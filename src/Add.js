import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity} from 'react-native'
import FocusedStatusBar from '../components/FocusedStatusBar'
import React, {useState} from 'react';
import Header from '../components/Header';
import { SafeAreaView } from 'react-navigation';
import { COLORS} from '../constants';
import {firebase,journalsCollection} from '../config';

const Add = () => {

  const journalsCollection = firebase.firestore().collection('journals');
  const [addData, setAddData] = useState('');

  // add a new field

  const addField = () => {
    // Check if we have new field data
    if (addData && addData.length > 0) {
      // Get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        journalEntry: addData,
        createdAt: timestamp
      };
      journalsCollection
        .add(data)
        .then(() => {
          // Release the new field state
          setAddData('');
          // Release keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          // Show an alert in case of error
          alert(error);
        })
    }
  };
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor: COLORS.primary}}>
      <Header/>
      <FocusedStatusBar translucent={false} backgroundColor={COLORS.primary}/>
          <View style={{backgroundColor:COLORS.primary, height:350,paddingHorizontal:20}}>
            <Text style={style.headerTitle}>Add a Journal Entry</Text>
            <TextInput
              style={style.input}
              placeholder='Add your journal entry here!'
              placeholderTextColor='#aaaaaa'
              onChangeText={(text) => setAddData(text)}
              value={addData}
              multiline={true}
              underlineColorAndroid='transparent'
              autoCapitalize='none'/>
            <View style={StyleSheet.formContainer}>
              
              <TouchableOpacity style={style.button} onPress={addField}>
                <Text style={style.buttonText}>       Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  formContainer:{
    flexDirection: 'row',
    height:80,
    alignIntems:'center',
    justifyContent:'center',
    marginLeft:1,
    marginRight: 1
  },
  input: {
      marginTop:15,
      elevation:10,
      height:48,
      borderRadius: 15, 
      overflow: 'hidden',
      backgroundColor: 'white',
      paddingLeft: 16,
      flex:1,
      marginRight: 5, 
      elevation:10 
  },
  button: {
    height: 47,
    borderRadius: 15,
    backgroundColor: "#788eec",
    width:80,
    alignIntems:'center',
    justifyContent:'center',
    elevation:15,
    marginTop:15,
    
  },
  buttonText: {
    color:'white',
  },
  header: {
    paddingVertical:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color:COLORS.white,
    fontWeight:'bold',
    fontSize: 23,
  }
})

export default Add;