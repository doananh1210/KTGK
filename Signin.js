import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal'; 

const Signin = () => {
  const [phoneValue, setPhoneValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [country, setCountry] = useState({ code: 'BD', name: 'Bangladesh' });
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef(null);

  const handleContinue = () => {
    if (phoneInput.current) {
      setLoading(true); 
      const isValid = phoneInput.current.isValidNumber(phoneValue);
      if (isValid) {
        Alert.alert("Login Successful", `Phone Number: ${formattedValue}`);
      } else {
        Alert.alert("Error", "Invalid phone number. Please enter a valid number.");
      }
      setLoading(false); 
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('./ảnh.jpg')} 
          style={styles.banner}
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <View style={styles.phoneInputContainer}>
            <CountryPicker
              countryCode={country.code}
              withFlag
              withFilter
              withCountryNameButton={false}
              onSelect={(country) => {
                setCountry(country);
                setPhoneValue(''); 
              }}
              containerButtonStyle={styles.countryPicker}
            />
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneValue}
              defaultCode={country.code}
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
        </View>

        <Text style={styles.orText}>Or connect with social media</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#4285F4" style={styles.loadingIndicator} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',  // Align items to the start (left side)
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  banner: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'flex-start',  // Align text to the left
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left', // Align title text to the left
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    height: 50,
  },
  countryPicker: {
    width: 100,  
    marginRight: 5,  
  },
  phoneInput: {
    flex: 1,
  },
  phoneTextInput: {
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  codeTextStyle: {
    color: '#000',
  },
  inputStyle: {
    paddingVertical: 0,
    backgroundColor: '#fff',
  },
  orText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10,
    justifyContent: 'center',
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 8,
    width: '100%',
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
