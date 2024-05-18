import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import LinksCard from './components/LinksCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.headerText}>App</Text>
          <FlatCards />
          <FancyCard />
          <ActionCard />
          <LinksCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 28,
  },
});
