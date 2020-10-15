import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styleExt from '../styles/styleExt';
import ImageLogo from '../components/ImageLogo';

function HomeScreen({navigation}) {
  return (
    <View style={styleExt.container}>
      <View style={{marginBottom: 30}}>
        <Text style={styles.title}>Hi, I’m Bot Ainika!</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <ImageLogo />
      </View>
      <View style={{marginBottom: 40}}>
        <View style={styles.group51}>
          <ImageBackground
            source={require('../../assets/images/bg51.png')}
            style={styles.group51image}>
            <Text style={styles.group51text}>
              I’m currently learning so can analyse only orchids 🌸, more plants
              coming as I’m growing
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.group52}>
          <ImageBackground
            source={require('../../assets/images/bg52.png')}
            style={styles.group52image}>
            <Text style={styles.group52text}>
              Take a few pictures and I will check the health of your plants
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.group50}>
          <ImageBackground
            source={require('../../assets/images/bg50.png')}
            style={styles.group50image}>
            <Text style={styles.group50text}>
              Take a few pictures and I will check the health of your plants
            </Text>
          </ImageBackground>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CameraFullView')}>
        <Text style={styleExt.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#000',
  },
  group51: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  group51image: {
    width: 295,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group51text: {
    width: 290,
    height: 80,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 15,
    lineHeight: 18.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group52: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  group52image: {
    width: 295,
    height: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group52text: {
    width: 290,
    height: 62,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 15,
    lineHeight: 18.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group50: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group50image: {
    width: 295,
    height: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group50text: {
    width: 290,
    height: 62,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 15,
    lineHeight: 18.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#22B35C',
    borderRadius: 30,
  },
});
