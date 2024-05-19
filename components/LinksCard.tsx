import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const LinksCard = () => {

    const openwebsite =(websiteLink:string)=>{
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>LinksCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style= {styles.headerText}> What's New on React-Native? </Text>
            </View>
            <Image 
            source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHB1_-Ghe-QWTn6_v5ZmbqxdrBV7S5mn0Yw&usqp=CAU'}}
            style ={styles.cardImage} />
 
      <View style={styles.cardBody}>
        <Text numberOfLines={3} style={styles.bodyText}> Today we're releasing React Native 0.74! This release adds Yoga 3.0, Bridgeless by default under the New Architecture, batched onLayout updates (New Architecture), and Yarn 3 as the default package manager for new projects.
  
        We are also removing deprecated APIs, with the removal of PropTypes and breaking changes to PushNotificationIOS. On Android, SDK 23 (Android 6.0) is now the minimum supported </Text>
         
         
         </View>
        <View style={styles.footerButton}>
            <TouchableOpacity onPress={() => {openwebsite('https://reactnative.dev/')}}> 
                <Text style={styles.footer}> Read More ... </Text>
            </TouchableOpacity>
      </View>
      </View>

    </View>
  )
}

export default LinksCard

const styles = StyleSheet.create({
    headingText: {
        fontWeight: '400',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        marginTop: 8,
      },
      card:{
        marginHorizontal:16,
        borderRadius:8,
        marginBottom:8,
      },
      elevatedCard:{
        backgroundColor: '#D7C9AA'
      },
      headerText:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5, 
      },
      headingContainer:{},
      cardImage:{
        height:200,
        marginTop: 5,
        marginHorizontal: 16,
      }, 
      cardBody:{
        padding:10,
      },
      bodyText:{
        paddingLeft: 8,
        color: 'black',
      },
      footer:{
        padding: 10,
        fontSize: 20,
        color: 'black',
        fontWeight:'600',
      },
      footerButton:{
          width: 150,
          backgroundColor: '#19535F',
          borderRadius: 5,
          margin: 10,

      }

})


