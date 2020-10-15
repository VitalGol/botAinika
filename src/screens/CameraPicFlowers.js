import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleExt from '../styles/styleExt';

export default function CameraPicFlowers({navigation}) {
  return (
    <View style={styleExt.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/camera-pic.jpg')}
      />
      <Text style={styles.title}>2 of 3</Text>
      <Text style={styles.text}>Take a picture of flowers</Text>
      <View style={styles.block}>
        <Icon style={styles.icon} name="angle-left" size={40} color="#000" />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CameraPicFlowers1')}>
            <Text style={styleExt.text}>Open camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 10,
    width: 320,
    height: 480,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 15,
    lineHeight: 18,
  },
  block: {
    flex: 2,
    flexDirection: 'row',
  },
  icon: {
    position: 'relative',
    left: -50,
    bottom: -5,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#22B35C',
    borderRadius: 30,
  },
});
