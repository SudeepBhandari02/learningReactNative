import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Pressable,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.text}>Hey there its me sudeep</Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/59/32/7e/59327eaf38bee8d45effe74a7ab0823e.jpg",
          }}
          style={styles.image}
        ></Image>
        <Button
          title="Click me"
          color="#48A6A7"
          onPress={() => alert("Button Pressed")}
        />
        <Pressable onPress={() => alert("Pressable Pressed")}>
          <Text style={styles.text}>Pressable</Text>
        </Pressable>
        <Text style={styles.secondaryText}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur, nunc at fringilla facilisis, enim ligula bibendum felis,
          vitae tincidunt enim nunc euismod nunc. Sed euismod, nisi vel
          tincidunt lacinia, nunc nunc fringilla nunc, euismod fringilla nunc
          euismod euismod. Donec efficitur, nunc at fringilla facilisis, enim
          ligula bibendum felis, vitae tincidunt enim nunc euismod nunc. Sed
          euismod, nisi vel tincidunt lacinia, nunc nunc fringilla nunc, euismod
          fringilla nunc euismod euismod. Donec efficitur, nunc at fringilla
          facilisis, enim ligula bibendum felis, vitae tincidunt enim nunc
          euismod nunc. Sed euismod, nisi vel tincidunt lacinia, nunc nunc 
          fringilla nunc, euismod fringilla nunc euismod euismod. Donec
          efficitur, nunc at fringilla facilisis, enim ligula bibendum felis,
          vitae tincidunt enim nunc euismod nunc. Sed euismod, nisi vel
          tincidunt lacinia, nunc nunc fringilla nunc, euismod fringilla nunc
          euismod euismod. Donec efficitur, nunc at fringilla facilisis, enim
          ligula bibendum felis, vitae tincidunt enim nunc euismod nunc. Sed
          euismod, nisi vel tincidunt lacinia, nunc nunc fringilla nunc, euismod
          fringilla nunc euismod euismod. Donec efficitur, nunc at fringilla
          facilisis, enim ligula bibendum felis, vitae tincidunt enim nunc
          euismod nunc. Sed euismod, nisi vel tincidunt lacinia, nunc nunc
          fringilla nunc, euismod fringilla nunc euismod euismod. Donec
          efficitur, nunc at fringilla facilisis, enim ligula bibendum felis,
          vitae tincidunt enim nunc euismod nunc. Sed euismod, nisi vel
          tincidunt lacinia, nunc nunc fringilla nunc, euismod fringilla nunc
          euismod euismod. Donec efficitur, nunc at fringilla facilisis, enim
          ligula bibendum felis, vitae tincidunt enim nunc euismod nunc. Sed
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#9ACBD0",
  },
  text: {
    color: "#006A71",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  scroll:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    padding:40,
    gap:20,
  },
  secondaryText:{
    fontSize: 20,
    color:"white",
  }
});
