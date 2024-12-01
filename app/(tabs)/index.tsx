//JAWABAN NOMOR 2
// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';

// const App = () => {
//   const [message, setMessage] = useState("Hello, React Native!");

//   return (
//     <View style={styles.container}>
//       <Header />
//       <Text style={styles.text}>{message}</Text>
//       <Footer onChangeMessage={() => setMessage("You clicked the button!")} />
//     </View>
//   );
// };

// // Komponen Header
// const Header = () => (
//   <View style={styles.header}>
//     <Text style={styles.headerText}>Welcome to My App</Text>
//   </View>
// );

// // Komponen Footer
// const Footer = ({ onChangeMessage }) => (
//   <View style={styles.footer}>
//     <Button title="Click Me" onPress={onChangeMessage} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   text: {
//     fontSize: 20,
//     color: '#333',
//     marginVertical: 20,
//   },
//   header: {
//     position: 'absolute',
//     top: 50,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 50,
//   },
// });

// export default App;


//JAWABAN NOMOR 3
// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <View style={[styles.buttonWrapper, styles.buttonBlue]}>
//           <Button title="Button 1" color="#ffffff" onPress={() => alert('Button 1 pressed!')} />
//         </View>
//         <View style={[styles.buttonWrapper, styles.buttonGreen]}>
//           <Button title="Button 2" color="#ffffff" onPress={() => alert('Button 2 pressed!')} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//   },
//   buttonWrapper: {
//     flex: 1,
//     marginHorizontal: 5,
//     borderRadius: 5,
//     overflow: 'hidden', // Agar tombol terlihat bulat pada sudut
//   },
//   buttonBlue: {
//     backgroundColor: '#0000ff', // Biru
//   },
//   buttonGreen: {
//     backgroundColor: '#008000', // Hijau
//   },
// });

// export default App;

//JAWABAN NOMOR 4
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [clickCount, setClickCount] = useState(0); // Inisialisasi state

//   const handleButtonClick = () => {
//     setClickCount(clickCount + 1); // Menambahkan jumlah klik
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Jumlah Klik: {clickCount}</Text>
//       <Button title="Klik Saya!" onPress={handleButtonClick} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default App;

//JAWABAN NOMOR 5
// import React from 'react';
// import { Button, Text, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Komponen untuk Layar Pertama
// const FirstScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Go to Second Screen"
//         onPress={() => navigation.navigate('SecondScreen')}
//       />
//     </View>
//   );
// };

// // Komponen untuk Layar Kedua
// const SecondScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>This is the Second Screen</Text>
//     </View>
//   );
// };

// // Stack Navigator
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="FirstScreen"
//           component={FirstScreen}
//           options={{ title: 'First Screen' }}
//         />
//         <Stack.Screen
//           name="SecondScreen"
//           component={SecondScreen}
//           options={{ title: 'Second Screen' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;
