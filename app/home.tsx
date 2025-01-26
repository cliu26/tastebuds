// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CameraPage from './camera';
// import PhotoPreviewPage from './photoPreview';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CameraPage />} />
//         <Route path="/photo-preview" element={<PhotoPreviewPage />} />
//       </Routes>
//     </Router>
//   );
// }


import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const Stack = createStackNavigator();

function CameraScreen({ navigation }: { navigation: any }) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (!permission) {
      return;
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.cameraMessage}>We need your permission to show the camera.</Text>
        <Button onPress={requestPermission} title="Grant Permission >" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  // Function to take a photo
  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      navigation.navigate('PhotoPreview', { photoUri: photo.uri }); // Navigate to the new screen
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrapper}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}></CameraView>
      </View>

      <View style={styles.cameraButtonsContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
          <MaterialIcons name="photo-library" size={40} color="#F75E53" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.takePhotoButton} onPress={takePhoto}>
          <FontAwesome name="circle" size={80} color="#F75E53" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
          <FontAwesome6 name="arrows-rotate" size={40} color="#F75E53" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PhotoPreviewScreen({ route }: { route: any }) {
  const { photoUri } = route.params; // Retrieve the photo URI passed via navigation

  return (
    <View style={styles.previewContainer}>
      <Image source={{ uri: photoUri }} style={styles.previewImage} />
      <Button title="Back to Camera" onPress={() => route.navigation.goBack()} />
    </View>
  );
}

export default function home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="PhotoPreview" component={PhotoPreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


