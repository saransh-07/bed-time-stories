import * as React from 'react';
import {View, Text, StyleSheet, TextInput , Image , TouchableOpacity , FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import db from '../config.js'
export default class Read extends React.Component{
    constructor(){
     super();
     this.state = {
         foundStories : '',
         searchText : '',
         lastStory : '',
     }
    }
 getMoreStories = async()=>{
     if(this.state.searchText!==''){
        const nextQuery = await db.collection('stories')
        .where('Author','==',this.state.searchText)
        .startAfter(this.state.lastStory)
        .limit(10)
        .get();
nextQuery.docs.map((item)=>{
this.setState({foundStories : {...foundStories,item}})
})
     } else if(this.state.searchText===''){
        const query = await db.collection('stories')
        .where('Story','!=','')
        .startAfter(this.state.lastStory)
        .limit(10)
        .get();
query.docs.map((item)=>{
this.setState({foundStories : {...foundStories,item}})
})
     }

 }
    searchFilter=async()=>{
        if(this.state.searchText !== ''){
            var allStories =await db.collection('stories').where('Author','==',this.state.searchText).limit(10).get();
            allStories.docs.map((item)=>{
                this.setState({foundStories : {...foundStories,item}, lastStory : item})
            })
        } else if(this.state.searchText === ''){
var stories = await db.collection('stories').where('Story','!=','').limit(10).get();
stories.docs.map((item)=>{
    this.setState({foundStories: {...foundStories,item}, lastStory : item});
})
        }
     
        return(<FlatList data = {this.state.foundStories} renderItem = {({item})=>(
        <View style = {styles.listContainer}><Text>Author : {item.Author}</Text>
        <Text>Title : {item.Title}</Text></View>)} onEndReached = {this.getMoreStories()} onEndReachedThreshold = {0.7}></FlatList>
        )
    }
    /* */
    render(){
      
        return(
            <View>
                 <View style ={styles.headingContainer}>
                <Text style = {styles.heading}>Read Story Screen</Text>
                </View><View>
                < SearchBar style = {{width : 300}} placeholder = 'Type Author Name...' onChangeText = {text=>{this.setState({searchText : text})
    this.searchFilter();}} value = {this.state.searchText}></SearchBar>
            </View>
            </View>
          
        )

       
    }
}
const styles = StyleSheet.create({
    heading : {
        fontWeight : 'bold',
        fontSize : 30,
        color : 'white',textAlign:'center'
    },
    headingContainer : {
        marginTop : 40,
        backgroundColor : 'blue',
        height : 100,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'

    },
    listContainer : {
        fontWeight : 'bold',
        backgroundColor : '#FAEBD7',
        borderTopWidth : 2,
        borderTopColor : 'black',
        fontSize : 15,
        width : '90%',
        height : 70
    }
})