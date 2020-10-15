import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styleExt from '../../src/styles/styleExt';

export default function ReportFooterSubscribe() {
  const [value, onChangeText] = React.useState('Email');
  return (
    <View style={styles.container}>
      <Text style={styles.stayTitle}>
        Stay tuned. Subscribe to our newsletter
      </Text>
      <Text style={styles.stayText}>100% no spam</Text>
      <TextInput
        style={styles.stayTextInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('OK Subscribe')}>
          <Text style={styleExt.text}>Subscribe</Text>
        </TouchableOpacity>
      </View>
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
  stayTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    lineHeight: 19.41,
    color: '#000',
    marginTop: 30,
    marginBottom: 5,
  },
  stayText: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 12,
    lineHeight: 16.8,
    textAlign: 'center',
    marginBottom: 10,
  },
  stayTextInput: {
    width: 300,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#AFB9CB',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 108,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#22B35C',
    borderRadius: 30,
    marginBottom: 30,
  },
});
