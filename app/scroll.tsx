import { Text, View, TextInput, TouchableOpacity, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import styles from "./styles";
const noodles = require('../assets/images/noodles.jpg');
const pfp = require('../assets/images/pfp.jpg');
const fire = require('../assets/images/fire.png');
const sparkles = require('../assets/images/sparkles.png');
const yellowheart = require('../assets/images/yellow_heart.png');

export default function Index() {
  const router = useRouter();
  const [text, setText] = useState('');


  // Create separate Animated.Value for each emoji
  const [fireScale] = useState(new Animated.Value(1));
  const [sparklesScale] = useState(new Animated.Value(1));
  const [yellowHeartScale] = useState(new Animated.Value(1));

  // Function to animate clicked emoji
  const animateEmoji = (emojiType) => {
    let scaleValue;
    if (emojiType === 'fire') scaleValue = fireScale;
    else if (emojiType === 'sparkles') scaleValue = sparklesScale;
    else if (emojiType === 'yellowheart') scaleValue = yellowHeartScale;

    Animated.sequence([
      // Scale up
      Animated.timing(scaleValue, {
        toValue: 1.5,  // Scale to 1.5x
        duration: 200,
        useNativeDriver: true,
      }),
      // Scale back down
      Animated.timing(scaleValue, {
        toValue: 1,  // Return to original size
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  return (
    <View style={styles.scrollContainer}>

      <TouchableOpacity style={styles.topRightIcon} onPress={() => router.push("/friends")}>
        <Ionicons name="person-add" size={30} color="#F75E53" />
      </TouchableOpacity>

      <Image source={pfp} style={styles.profile} />
      <Text style={styles.username}>catherine22</Text>
      <Image source={noodles} style={styles.post} />
      
      <View style={styles.reactions}>
        {/* Wrap each emoji in TouchableOpacity and animate the one clicked */}
        <TouchableOpacity onPress={() => animateEmoji('fire')}>
          <Animated.Image
            source={fire}
            style={[styles.emoji, { transform: [{ scale: fireScale }] }]}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => animateEmoji('sparkles')}>
          <Animated.Image
            source={sparkles}
            style={[styles.emoji, { transform: [{ scale: sparklesScale }] }]}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => animateEmoji('yellowheart')}>
          <Animated.Image
            source={yellowheart}
            style={[styles.emoji, { transform: [{ scale: yellowHeartScale }] }]}
          />
        </TouchableOpacity>
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
