import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [ 
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <View style={styles.container} >
            {contacts.map(({uid, name, status, imageUrl})=> (
                <View key={uid}>
                    <Text> name </Text> </View>
            )
                 )}
      </View>

    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontWeight: '400',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        marginTop: 8,
      },
      container:{

      }
      
})