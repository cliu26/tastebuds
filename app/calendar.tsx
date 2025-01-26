import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { FontAwesome6, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";

// Type definition for image markers, mapping dates to multiple images
interface ImageMarkers {
  [key: string]: any[]; // Key is the date string, value is an array of images
}

const App: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false); // To control modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // To track the current image
  const [selectedImages, setSelectedImages] = useState<any[]>([]); // Store selected images


  // Mapping of dates to images
  const imageMarkers: ImageMarkers = {
    '2025-01-01': [
      require('../assets/images/food1.jpeg'),
      require('../assets/images/food2.jpeg'),
    ],
    '2025-01-02': [
      require('../assets/images/food3.jpeg'),
      require('../assets/images/food5.jpeg'),
    ],
    '2025-01-05': [
      require('../assets/images/food4.jpeg'),
      require('../assets/images/food6.jpeg'),
    ],
    '2025-01-08': [
      require('../assets/images/food7.jpeg'),
      require('../assets/images/food8.jpeg'),
    ],
    '2025-01-09': [
      require('../assets/images/food9.jpeg'),
      require('../assets/images/food10.jpeg'),
    ],
    // Add more dates and images as needed
  };


  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    const images = imageMarkers[day.dateString];
    if (images) {
      setSelectedImages(images);
      setCurrentImageIndex(0); // Reset to the first image
      setModalVisible(true); // Open the modal
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
    setSelectedImages([]); // Reset the selected images
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + selectedImages.length) % selectedImages.length
    );
  };

  const renderDay = ({ date, state }: any) => {
    const isSelected = date.dateString === selectedDate;

    // Check if this date has a specific image
    const imageMarker = imageMarkers[date.dateString]?.[0]; // Use the first image for the background

    return (
      <View style={[styles.dayContainer, isSelected && styles.selectedDay]}>
        {imageMarker ? (
          <ImageBackground
            source={imageMarker}
            style={styles.imageBackground}
            imageStyle={styles.imageBackgroundImage}
          >
            
            <TouchableOpacity onPress={() => onDayPress(date)}>
              <Text
                style={[
                  styles.dayText,
                  { color: state === 'disabled' ? 'gray' : 'black' },
                ]}
              >
                {date.day}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <Text
            style={[
              styles.dayText,
              { color: state === 'disabled' ? 'gray' : 'black' },
            ]}
          >
            {date.day}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.calContainer}>

      <View style={styles.calendarContainer}>
        <CalendarList
          current={new Date().toISOString().split('T')[0]}
          minDate={'2025-01-01'} 
          maxDate={'2025-05-31'}
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: 'black',
              selectedTextColor: 'white',
            },
          }}
          monthFormat={'yyyy MM'}
          theme={{
            selectedDayBackgroundColor: 'black',
            selectedDayTextColor: 'white',
            todayTextColor: 'black',
            arrowColor: 'black',
          }}
          hideArrows={true}
          scrollEnabled={true}
          dayComponent={renderDay} // Use custom day rendering
        />
      </View>

      {/* Modal for showing images like a story */}
      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          {/* Close Button */}
          <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>

          {/* Render the current image */}
          {selectedImages.length > 0 && (
            <Image source={selectedImages[currentImageIndex]} style={styles.modalImage} resizeMode="contain" />
          )}

          {/* Navigation Controls */}
          <View style={styles.navigationControls}>
            <TouchableOpacity onPress={prevImage} style={styles.navButton}>
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextImage} style={styles.navButton}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
};

export default App;
