import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O5qjFLGKk6FlyMzNetSaH-cVrcNKehohrP-Xh9eC9PfJfkkyhTO4Mfma-1fHNgERpE~p22xEfyB8HmYa6XRjjWD-TMxM0AS6R7HPIGKVymH6t981RsEC94-JcKZqHxrYD8Uvr6Zahuv7co8RLBQklKu9dufJWOP6Hq3omcMRw7AC0feCMdWGEvbjUVN55~hfiaMZCd0Hru-ZO7ZJk0-O5685-7qJT2V01rocnjvdAFUO5J~CZ3518ltspmexCVlPG30sh7oReVDuzWvyxnVjV-NlGZkD9IRMcLk5LmNBvhU3QbtC8BdgHGDqQv59hm-utG72-HbgZqs23AGqWM-ldw__' }}
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
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
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
