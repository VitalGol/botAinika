import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageLogo = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/botainika-logo.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 130,
  },
});

export default ImageLogo;
