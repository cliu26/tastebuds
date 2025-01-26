// import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
// import { FontAwesome6, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useNavigate, useLocation } from 'react-router-dom';
// import styles from "./styles";

// export default function photoPreview() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const photoUri = location.state?.photoUri;

//   if (!photoUri) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>No photo available.</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigate('/')}
//         >
//           <Text style={styles.buttonText}>Back to Camera</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   return (
//     <View style={styles.container}>
      
//       <Image source={{ uri: photoUri }} />
//       <Button title="Back to Camera" onPress={() => navigate('/')} />

//     </View>
//   );
// }