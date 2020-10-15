import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const Button = ({title, style}) => {
  // const {paddingVertical, paddingHorizontal, backgroundColor} = style;

  return (
    <View>
      <TouchableOpacity
        style={{
          // backgroundColor: backgroundColor,
          // paddingVertical: paddingVertical,
          // paddingHorizontal: paddingHorizontal,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#22B35C',
          borderRadius: 30,
        }}
        onPress={() => alert(125)}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular  ',
    fontSize: 16,
    lineHeight: 20,
  },
});
