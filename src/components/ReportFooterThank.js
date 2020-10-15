import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ReportFooterThank() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.titleLogo}
        source={require('../../assets/images/ok.png')}
      />
      <Text style={styles.titleText}>Thank you!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  titleLogo: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginBottom: 10,
  },
  titleText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: '#000',
    marginBottom: 30,
  },
});
