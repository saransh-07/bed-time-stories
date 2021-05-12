import * as React from 'react';
import {View, Text, StyleSheet, TextInput , TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config.js';

export default class Write extends React.Component{
    constructor(){
        super();
        this.state = {
            author : '',
            title : '',
            story : '',
        }
    }
    submitStory=async()=>{
db.collection('stories').add({
    'Author' : this.state.author,
    'Title' : this.state.title,
    'Story' : this.state.story,
})    
ToastAndroid.show('Submitted Story', ToastAndroid.SHORT);
    }
    render(){
       
        return(
            <KeyboardAvoidingView style ={styles.container} behavior = "position" enabled>
                  
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>
                    Write Story
                </Text>
            </View>
            <View>
<TextInput style = {styles.inputBox} onChangeText = {text=>{this.setState({title : text})}} placeholder = '  Enter Story Title'/>
<TextInput style = {styles.inputBox} onChangeText = {text=>{this.setState({author : text})}}placeholder = '  Enter Author Name(Yours infact)'/>
<TextInput style = {[styles.inputBox,{height : 250}]} onChangeText={text=>{this.setState({story : text})}} placeholder = '  Your Story Here!' multiline = {true} />
            </View>
                 <TouchableOpacity style = {styles.button} onPress = {()=>{this.submitStory()}} >
                     <Text style ={[styles.heading,{fontSize : 20}]}>
                         Submit 
                     </Text>
                 </TouchableOpacity>
            
            </KeyboardAvoidingView>
          
          
        )
    }
}
const styles = StyleSheet.create({
    container:{
      
        flex : 1,
       backgroundColor : 'green'
    },
    heading : {
        fontWeight : 'bold',
        fontSize : 40,
        color : 'white',
        textAlign : 'center'
    },
    headingContainer : {
        marginTop : 20,
        backgroundColor : '#00BFFF',
        height : 150,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'

    },
    inputBox : {
        width : '80%',
        height : 60,
        borderStyle : 'solid',
       alignSelf :'center',
        borderWidth : 3,
        marginTop : 50,
        backgroundColor : '#FAEBD7',
       
    },
    button : {
       
        display : 'flex',
        backgroundColor : '#00BFFF',
        width : '30%',
        height : 40,
        justifyContent : 'center',
        marginTop : 10,
        alignSelf : 'center'
    }
})