import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import styles from "./styles";
const logo = require('../assets/images/logotemp.jpg');

export default function Index() {

  const router = useRouter();

  return (
    <View style={styles.indexContainer}>

      <Image source={logo} style={styles.indexLogo} />
      
      <Text style={styles.indexTitle}>TasteBuds</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/camera")}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/friends")}
        >
          <Text style={styles.buttonText}>calendar</Text>
        </TouchableOpacity> */}
    </View>
  );
}
