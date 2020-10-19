import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleExt from '../styles/styleExt';

const screen = Dimensions.get('screen').width;

export default function CameraFullView2({navigation}) {
  return (
    <View style={styleExt.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/camera-full-view1.jpg')}
      />

      <View style={styles.block}>
        <Icon style={styles.icon} name="angle-left" size={40} color="#000" />

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CameraPicFlowers')}>
            <Text style={styleExt.text}>Proceed</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>1 of 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 10,
    width: screen,
    height: 480,
  },

  block: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 50,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 50,
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
