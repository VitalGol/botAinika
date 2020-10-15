import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImageLogo from '../components/ImageLogo';
import ImageLogoSmile from '../components/ImageLogoSmile';
import styleExt from '../../src/styles/styleExt';

const Analising = () => {
  return (
    <View style={styleExt.container}>
      <View style={styles.block}>
        <ImageLogo />
        <ImageLogoSmile />
      </View>
      <Text style={styleExt.titleText}>Analysing…</Text>
    </View>
  );
};

export default Analising;
const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
});
