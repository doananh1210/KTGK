import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./ảnh2.jpg')} 
        style={styles.image}
      />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <FontAwesome5 name="carrot" size={50} color="#FFFFFF" style={styles.icon} />
          <Text style={styles.title}>Welcome </Text>
          <Text style={styles.title}>to our store </Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 420,
    height: 896.35,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',  
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,  
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  icon: {
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,  
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 56,
    fontFamily: 'Gilroy',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 15,
    color: 'rgba(252, 252, 252, 0.7)', 
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
    marginTop: 6,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 19,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 353,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  buttonText: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;