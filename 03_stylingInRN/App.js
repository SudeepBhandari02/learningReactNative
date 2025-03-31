import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BoxModel from "./components/BoxModel";
import FlexBox from "./components/FlexBox";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Learning Styling in React Native</Text>
      <ScrollView style={styles.scrollContainer}>
          <BoxModel/>
          <FlexBox/>
      </ScrollView>
      
      <Text>
        
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flexStart',
    backgroundColor:"#FED2E2"
  },
  mainText:{
    fontSize:25,
    color:"#8F87F1",
    textAlign:"center",
    fontWeight:600,
    
  },
  scrollContainer:{
    rowGap:20,
  },
});
