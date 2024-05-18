import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ActionCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>

      <View style={styles.container}>
        <View style={styles.imgContain}>
          <Image
            style={styles.stretch}
            source={{
              uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/piri-piri-chicken-with-smashed-sweet-potatoes-broccoli-84cb220.jpg?quality=90&webp=true&resize=300,272',
            }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            
            Piri-piri chicken with smashed sweet potatoes & broccoli
          </Text>
          <Text style={styles.desc}>
            
            Serve up an easy one-pan traybake of piri-piri chicken with sweet
            potatoes and broccoli. As well as being simple to make, it delivers
            three of your 5-a-day.
          </Text>
        </View>
      </View>

    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  imgContain: {
   marginHorizontal:16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'gray',
    borderRadius:7,
    marginHorizontal:16,


  },
  stretch: {
    width: 360,
    height: 265,
    borderTopLeftRadius: 5,
    borderTopRightRadius:5,
  
  },
  info: {
    textAlign: 'center',

  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    paddingTop: 8,
  },
  desc: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
