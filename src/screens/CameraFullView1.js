import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleExt from '../styles/styleExt';

export default function CameraFullView1({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/images/camera-full-view1.jpg')}
      style={styles.bg}>
      <View style={styles.block}>
        <TouchableOpacity onPress={() => alert('Ask me later pressed')}>
          <View>
            <Icon
              style={styles.icon}
              name="angle-left"
              size={40}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraFullView2')}>
          <Image source={require('../../assets/images/camera-button.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  block: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    position: 'relative',
    left: -120,
    bottom: -50,
    zIndex: 2,
  },
});
