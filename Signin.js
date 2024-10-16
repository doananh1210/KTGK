import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input';

const Signin = () => {
  const [phoneValue, setPhoneValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef(null);

  const handleContinue = () => {
    if (phoneInput.current) {
      setLoading(true);
      const isValid = phoneInput.current.isValidNumber(phoneValue);
      if (isValid) {
        Alert.alert('Login Successful', `Phone Number: ${formattedValue}`);
      } else {
        Alert.alert('Error', 'Invalid phone number. Please enter a valid number.');
      }
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('./ảnh.jpg')} style={styles.banner} />

        <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

        <View style={styles.phoneInputContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneValue}
            defaultCode="BD"
            layout="first"
            onChangeText={(text) => {
              setPhoneValue(text);
              setFormattedValue(phoneInput.current?.getNumberAfterPossiblyEliminatingZero() || '');
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={styles.phoneInput}
            textContainerStyle={styles.phoneTextInput}
            codeTextStyle={styles.codeTextStyle}
            textInputStyle={styles.inputStyle}
            placeholder="Phone Number"
          />
        </View>

        <Text style={styles.orText}>Or connect with social media</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#5383EC" style={styles.loadingIndicator} />
        ) : (
          <>
            <TouchableOpacity style={styles.googleButton} onPress={handleContinue}>
              <FontAwesome name="google" size={20} color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton} onPress={handleContinue}>
              <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  banner: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#030303',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginLeft: 20,
  },
  phoneInputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  phoneInput: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  phoneTextInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  codeTextStyle: {
    color: '#000',
  },
  inputStyle: {
    backgroundColor: '#fff',
  },
  orText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#828282',
    textAlign: 'center',
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5383EC',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 19,
    justifyContent: 'center',
    marginBottom: 15,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A66AC',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 19,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  loadingIndicator: {
    marginVertical: 20,
  },
});

export default Signin;