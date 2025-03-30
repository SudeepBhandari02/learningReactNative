import {Text, View,StyleSheet,Pressable} from 'react-native'

const BoxModel = () => {
  return (
    <View style={styles.container} >
        <Text>Box Model example</Text>
        <Pressable 
        onPress={()=>{
            alert("You pressed the box")
        }} 
        style={[styles.box,styles.shadowBox]}>   {/*Applying multiple styles*/}

           <Text style={{color:"white",fontSize:20}}> I am a Pressable Box with padding ,margin, border,border radius and shadow</Text>
        </Pressable>
    </View>
  )
}

export default BoxModel;

const styles=StyleSheet.create({
    container:{
        width:300,
        height:300,
        alignItems:"center",
        justifyContent:"center",
        gap:10,
    },
    box:{
        padding: 20,
        margin:20,
        backgroundColor:"#C68EFD",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#8F87F1"
    },
    shadowBox:{
        shadowColor:"#000",
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity:0.3,
        shadowRadius:20,
        elevation:15,
    }
})