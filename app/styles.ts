// styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // General Styles

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
  },

  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "#F75E53",
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    fontSize: 20,
  },

  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F75E53',
    height: 110,
  },

  navBarCameraIcon: {

    marginHorizontal: 80,
  },

  topRightIcon: {
    position: 'absolute',
    top: 70,
    right: 40,
  },

  topRightIconProfile: {
    position: 'absolute',
    top: 70,
    right: 40,
    backgroundColor: '#F75E53',
    borderRadius: 50,
    zIndex: 10,
  },

  topLeftIcon: {
    position: 'absolute',
    top: 70,
    left: 20,
  },

  // Index Page

  indexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F75E53",
  },

  indexTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 15,
    marginBottom: 15,
  },

  indexLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  // Home Page

  homeimage: {
    width: 300,
    height: 500,
    borderRadius: 20,
  },

  // Camera

  cameraMessage: {
    textAlign: 'center',
    paddingBottom: 10,
  },

  cameraWrapper: {
    flex: 1,
    // top: -100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
  },

  camera: {
    width: '95%',
    height: "80%",
    borderRadius: 20,
    overflow: 'hidden',
  },

  photoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 1,
  },

  capturedImage: {
    width: '95%',
    height: '80%',
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'cover',
  },

  cameraButtonsContainer: {
    // position: 'absolute',
    // bottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
    width: '100%',
    // paddingHorizontal: 10,
  },

  takePhotoButton: {
    marginHorizontal: '18%',
    borderWidth: 4,
    borderColor: '#F75E53',
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  savePhotoButton: {
    marginHorizontal: '18%',
    borderWidth: 4,
    borderColor: '#F75E53',
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraButton: {
    // padding: 20,
    // backgroundColor: '#F75E53',
    // borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // previewContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#000',
  // },
  // previewImage: {
  //   width: '90%',
  //   height: '80%',
  //   resizeMode: 'contain',
  // },
  

  // calendar 

  calContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70,
  },
  calendarContainer: {
    width: '100%',
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 50, // Optional: control the size of the day cells
    height: 72, // Optional: control the size of the day cells
  },
  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    zIndex: 1, // Ensure text is above the background image
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Same size as dayContainer
    height: 80, // Same size as dayContainer
    borderRadius: 5, // Optional: for rounded corners
  },
  imageBackgroundImage: {
    borderRadius: 5, // Optional: for rounded corners
    opacity: 0.7,
  },
  selectedDay: {
    backgroundColor: '#000',
    borderRadius: 5, // Optional: for rounded corners
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  modalCloseText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  navigationControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  navButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // scroll

  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 15,
    marginBottom: 30,
  },

  post: {
    width: 300,
    height: 400,
    borderRadius: 30,
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 140,
  },

  reactions: {
    flexDirection: 'row',
    padding: 10,    
  },

  emoji: {
    width: 50,
    height: 50,
    margin: 20,
  },

  scrollContainer: {
    flex: 1,
    // padding: 16,
    alignItems: 'center',
  },

  swipeIndicator: {
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: [{ translateX: -100 }],
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 10,
  borderRadius: 5,
},

swipeText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

//friends

friends: {
  width: "95%",
  height: 100,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
},

phone: {
  width: 400,
  height: 70,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  margin: 20,
  alignItems: 'center',
  justifyContent: 'center',
},

confirm: {
  width: 100,
  height: 40,
  backgroundColor: '#F75E53',
  borderRadius: 20,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
},

confirmButtons:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  // marginTop: 20,
  // marginLeft: 150,
  // marginTop: 20,
},

confirmButtonText:{
  color: 'white',
  fontWeight: 'bold',
},

friendProfile: {
  width: 50,
  height: 50,
  borderRadius: 100,
  backgroundColor: '#000000',
  // marginRight: 30,
},

usernameText: {
  margin: 10,
  fontWeight: 'bold',
},

phoneNumber: {
  fontSize: 20,
  fontWeight: "bold",
  color: "gray",
  marginTop: 15,
  marginBottom: 15,
},

});

export default styles;
