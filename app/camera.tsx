import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRouter } from "expo-router";
import { useState, useEffect, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome6, FontAwesome5, FontAwesome, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from "./styles";

export default function camera() {
  const router = useRouter();
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);  // State to store the photo URI
  const cameraRef = useRef<any>(null);  // Ref to access the camera instance

  useEffect(() => {
    if (!permission) {
      // Camera permissions are still loading.
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
      setPhoto(photo.uri);  // Save the photo URI to state
    }
  }

  // Function to retake the photo
  function retakePhoto() {
    setPhoto(null);  // Reset photo state to null, so we can take another one
  }

  // Function to save the photo
  // function savePhoto() {
  //   if (photo) {
  //     if (photo) {
  //       // Pass the photo URI to the calendar page via params
  //       router.push({
  //         pathname: '/calendar',
  //         params: { photoUri: photo }, // Use `params` to pass photo URI
  //       });
  //     }
  // }  

  return (
    <View style={styles.container}>
      
      <View style={styles.cameraWrapper}>

        <CameraView style={styles.camera} facing={facing} ref={cameraRef}></CameraView>

        {/* Display the photo if it's taken */}
        {photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.capturedImage} />
          </View>
        )}

      </View>
      
      <View style={styles.cameraButtonsContainer}>

      {photo ? (
          // Buttons after a photo is taken
          <>

            <TouchableOpacity style={styles.cameraButton} onPress={retakePhoto}>
              <MaterialCommunityIcons name="close" size={40} color="#F75E53" />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.savePhotoButton} onPress={savePhoto}>
              <MaterialCommunityIcons name="send-circle" size={80} color="#F75E53" />
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.savePhotoButton}>
              <MaterialCommunityIcons name="send-circle" size={80} color="#F75E53" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButton} onPress={() => {}}>
              <Entypo name="bar-graph" size={40} color="#F75E53" />
            </TouchableOpacity>
          </>
        ) : (
          // Buttons to take a new photo
          <>
            <TouchableOpacity style={styles.cameraButton} onPress={() => {}}>
              <MaterialIcons name="photo-library" size={40} color="transparent" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.takePhotoButton} onPress={takePhoto}>
              <FontAwesome name="circle" size={80} color="#F75E53" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
              <FontAwesome6 name="arrows-rotate" size={40} color="#F75E53" />
            </TouchableOpacity>
          </>
        )}

      </View>

      <View style={styles.navBar}>
      <TouchableOpacity onPress={() => router.push("/scroll")}>
          <FontAwesome5 name="user-friends" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBarCameraIcon } onPress={() => router.push("/camera")}>
          <MaterialIcons name="camera" size={40} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/calendar")}>
          <FontAwesome6 name="calendar" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

    </View>
  );
}
