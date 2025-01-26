import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import styles from "./styles";
import { FontAwesome6, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

const logo = require('../assets/images/logotemp.jpg');

export default function Index() {

  const router = useRouter();

  return (
    <View style={styles.indexContainer}>

      <TouchableOpacity style={styles.topLeftIcon} onPress={() => router.push("/scroll")}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
      
      <Text style={styles.indexTitle}>Add a Friend</Text>
      
      <View style={styles.phone}>
        <Text style={styles.phoneNumber}>phone number</Text>
      </View>

      <Text style={styles.indexTitle}>Friend Requests</Text>
      <View style={styles.friends}>
        <View style={styles.confirmButtons}>
            <View style={styles.friendProfile}>
            </View>
            <Text style={styles.usernameText}>Username</Text>
            <TouchableOpacity
                style={styles.confirm}
                onPress={() => router.push("/friends")}
                >
                <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
          style={styles.confirm}
          onPress={() => router.push("/friends")}
        >
          <Text style={styles.confirmButtonText}>Deny</Text>
        </TouchableOpacity>
        </View>
        
      </View>


      <Text style={styles.indexTitle}>Your Friends</Text>
      <View style={styles.friends}>
        <View style={styles.confirmButtons}>
            <View style={styles.friendProfile}>
            </View>
            <Text style={styles.usernameText}>Username</Text>
        </View>
      </View>
      <View style={styles.friends}>
        <View style={styles.confirmButtons}>
            <View style={styles.friendProfile}>
            </View>
            <Text style={styles.usernameText}>Username</Text>
        </View>
      </View>

      {/* <View style={styles.confirmButtons}>

            <View style={styles.friends}>
                <View style={styles.friendProfile}>
                        </View>
                <Text style={styles.usernameText}>Username</Text>
            </View>
        </View>
      <View style={styles.friends}></View> */}

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
