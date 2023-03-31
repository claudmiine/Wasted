import { StyleSheet, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  return (
    <ScrollView style={styles.scrollView}>
    <Image
        // style={{width:300, height:300 }}
          source={require('../assets/images/LOGOOO.png')}
          />
          <Text style={styles.title}>Wasted</Text>
      <Text style= {styles.baseText}>
      Join us and lets change the world together!
      </Text>
      <Text>
      Wasted helps you to make your waste management easier.
      </Text>
        <Image
        style={{width:300, height:300 }}
          source={require('../assets/images/Recycling_Isometric.png')}
        />
        <Text style= {styles.baseText}>
      Personal experience
      </Text>
      <Text>
      Create personalised calendar for your collection day and more!
      </Text>
        <Image
        // style={{width:300, height:300 }}
          source={require('../assets/images/calendarr.png')}
        />
        <Text style= {styles.baseText}>
      Accessible knowledge at yours fingertips
      </Text>
      <Text>
      Our information and resources are readily available to you.
      </Text>
        <Image
        // style={{width:300, height:300 }}
          source={require('../assets/images/phonen.png')}
        />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
baseText: {
fontWeight: 'bold',
fontSize: 20,
},
scrollView: {
    marginHorizontal: 20,
},
title:{
fontSize: 50,
fontWeight: 'bold',
color: '#333333',
}
})