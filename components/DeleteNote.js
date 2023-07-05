import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { db } from '../config/firebase'
import { collection, deleteDoc,doc, addDoc } from 'firebase/firestore'
import react from 'react';

import React from 'react'
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

export default function DeleteNote({id}) {

    const deleteNote=()=>{
        const noteToBeDel=doc(db,'notes',id);
        deleteDoc(noteToBeDel);
    }

    return (
        <View style={styles.container}>
              <TouchableOpacity onPress={deleteNote}  style={[styles.addTodo]}>
                    <Text style={{color:'white',fontSize:12}}>X</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    addTodo: {
        borderRadius: 5,
        marginLeft:8,
        paddingVertical: 6,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        
    },
    
})