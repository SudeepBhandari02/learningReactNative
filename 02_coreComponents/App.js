import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleStatusBar = () => {
    setIsStatusBarHidden(!isStatusBarHidden);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={isStatusBarHidden}
      />
      <Text style={styles.title}>Hello world!</Text>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Button title="Toggle StatusBar" onPress={toggleStatusBar} />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
        <Text>viewing the modal</Text>
        <Button
          title="Hide Modal"
          onPress={() => {
            setIsModalVisible(!isModalVisible);
          }}
        />
        </View>
      </Modal>

      <Text style={styles.title}>Open a modal</Text>
      <Button
        title="Show Modal"
        onPress={() => {
          setIsModalVisible(!isModalVisible);
        }}
      />
      {isLoading && (
        <ActivityIndicator
          size="80"
          color="#0000ff"
          animating={isLoading}
          hidesWhenStopped={true}
          style={{ marginTop: 20 }}
        />
      )}
      <Button
        title={`${isLoading?"Off":"On"} the Loading Indicator`}
        onPress={() => {
          setIsLoading(!isLoading);
        }}
      />
      <Button 
      title="Alert"
      onPress={()=>{
        Alert.alert("Hey There","Its nice to meet you",[
          {
            text:"Hi"
          },
          {
            text:"Bye"
          }
        ])
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#333333",
  },
  modalOverlay:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  gap:20,
  }
});
