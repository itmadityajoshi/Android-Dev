import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
    <View>
      <Text style={styles.headerText}>FancyCard</Text>
        <ScrollView horizontal={true}>
        <View style={styles.container}>
            <View style={[styles.box, styles.boxSix]} >
                <Text>Box 1</Text>
            </View>
            <View style={[styles.box, styles.boxSeven]} >
                <Text>Box 2</Text>
            </View>
            <View style={[styles.box, styles.boxThree]} >
                <Text>Box 3</Text>
            </View>
            <View style={[styles.box, styles.boxFour]} >
                <Text>Box 4</Text>
            </View>
            <View style={[styles.box, styles.boxFive]} >
                <Text>Box 5</Text>
            </View>
            <View style={[styles.box, styles.boxTwo]} >
                <Text>Box 6</Text>
            </View>
            <View style={[styles.box, styles.boxOne]} >
                <Text>Box 7</Text>
            </View>

        </View>

        </ScrollView>
      
      
    </View >
  )
}

export default FancyCard

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
  },
  box:{
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:4,
    margin:4,
  },
  boxOne:{
      backgroundColor: '#A24936'
  },
  boxTwo:{
    backgroundColor:'#3E5641'
  },
  boxThree:{
    backgroundColor:'#D36135'
  },
  boxFour:{
    backgroundColor:'#282B28'
  },
  boxFive:{
    backgroundColor:'#83BCA9'
  },
  boxSix :{
    backgroundColor:'#0B7A75'
  },
  boxSeven:{
    backgroundColor:'#19535F'
  },
  headerText: {
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
})