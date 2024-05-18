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
            source={{ uri:'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png'}}
            style ={styles.cardImage} />
      </View>
      <View style={styles.cardBody}>
        <Text numberOfLines={3} style={styles.bodyText}> Today we're releasing React Native 0.74! This release adds Yoga 3.0, Bridgeless by default under the New Architecture, batched onLayout updates (New Architecture), and Yarn 3 as the default package manager for new projects.
  
        We are also removing deprecated APIs, with the removal of PropTypes and breaking changes to PushNotificationIOS. On Android, SDK 23 (Android 6.0) is now the minimum supported </Text>
         
         
         </View>
        <View>
            <TouchableOpacity onPress={() => {openwebsite('https://reactnative.dev/')}}> 
                <Text> Read More ... </Text>
            </TouchableOpacity>
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
      },
      card:{
        margin: 4,
      },
      elevatedCard:{},
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
        
      },
      bodyText:{
        paddingLeft: 8,
        color: 'black',
      },
})


