import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageLogoSmile = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo-smile.png')}
      />
    </View>
  );
};

export default ImageLogoSmile;

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 130,
  },
});
