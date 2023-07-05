import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { db } from '../config/firebase'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import react, { useState } from 'react';

import React from 'react'

export default function CreateNote() {
    const [noteToBeAdd, setNoteToBeAdd] = useState({ note: '' });

    const addNote=()=>{
        const noteDb=collection(db,'notes');
        addDoc(noteDb,{
            note: noteToBeAdd.note,
        })
        setNoteToBeAdd({note:''});
    }

    return (
        <View>
            <KeyboardAvoidingView style={[styles.section, styles.footer]}>

                <TextInput style={[styles.input]}  placeholder="Enter Note"
                value={noteToBeAdd.note}
                onChangeText={(text) => setNoteToBeAdd({ ...noteToBeAdd, note: text })}
                />
                <TouchableOpacity onPress={addNote}  style={[styles.addTodo, { backgroundColor: 'blue' }]}>
                    <AntDesign name='plus' size={16} color='white' />
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 16,
        alignSelf: 'stretch',
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addTodo: {
        borderRadius: 5,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
        color:'white',
        borderColor: 'white',   
    },
})