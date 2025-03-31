import { StyleSheet, Text, View } from 'react-native'

const FlexBox = () => {
  return (
    <View>
        <Text>flexBox Example</Text>
        <View style={styles.container}>
            <View style={[styles.box,{backgroundColor:"red"}]}>
              <Text> Box 1 </Text>
            </View>
            <View style={[styles.box,{backgroundColor:"blue"}]}>
              <Text> Box 2 </Text>
            </View>
            <View style={[styles.box,{backgroundColor:"green"}]}>
              <Text> Box 3 </Text>
            </View>
            <View style={[styles.box,{backgroundColor:"yellow"}]}>
              <Text> Box 4 </Text>
            </View>
            {/* <View style={[styles.box,{backgroundColor:"orange"}]}>
              <Text> Box 5 </Text>
            </View>
            <View style={[styles.box,{backgroundColor:"purple"}]}>
              <Text> Box 6 </Text>
            </View>
            <View style={[styles.box,{backgroundColor:"brown"}]}>
              <Text> Box 7 </Text>
            </View> */}
        </View>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      alignItems:"stretch",
      justifyContent:"space-around",
      height:400,
      borderWidth:1,
      borderColor:"#8F87F1",
      padding:10,
    },
    box:{
    }
})