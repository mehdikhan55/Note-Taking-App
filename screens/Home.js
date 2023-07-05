import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, SafeAreaView, FlatList } from 'react-native'
import React,{useEffect, useLayoutEffect,useState} from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { collection, onSnapshot } from 'firebase/firestore'
import { TouchableOpacity } from 'react-native-gesture-handler' 
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { db } from '../config/firebase'
import { render } from 'react-dom'
import CreateNote from '../components/CreateNote'
import DeleteNote from '../components/DeleteNote'


export default function Home({ navigation }) {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const notesQuery = collection(db, 'notes');
    onSnapshot(notesQuery, (snapshot) => {
      let notesList = [];
      snapshot.docs.map((doc)=> notesList.push({... doc.data(), id : doc.id }));
      setNotes(notesList);
      setLoading(false);
    })
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })

  const renderItem = ({item}) => { 
    return (
      <View style={styles.noteBox}>
        <Text style={styles.noteText}>{item.note}</Text>
        <DeleteNote id={item.id}/>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex:1,paddingTop:40,backgroundColor:'gray'}}>
      <View style={styles.container}>
       {/* top buttons  */}
        <View style={{ flexDirection: 'row', height: 50, gap: 20 }}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => {
              navigation.navigate('login');
            }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => {
              navigation.navigate('signup');
            }}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => {
              signOut(auth)
                .then(() => console.log('User signed out!'))
                .catch *= ((error) => console.log('Error signing out: ', error))
              navigation.navigate('login');
            }}>Logout</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Home</Text>
        <Text style={styles.subTitle}>Add Your Quick Notes Here!</Text>
        <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />

      </View>
      <CreateNote/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    alignSelf: 'center',
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'orange',
      alignSelf: 'center',
      paddingBottom: 10,
      color: 'black',
      fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  noteBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 15,
    paddingVertical:10,
    borderWidth:2,
    borderColor:'white',
    width: 320,
    margin:5,
  },
  noteText:{
    flex:7,
    fontSize: 18,
    color:'black'

  }
})