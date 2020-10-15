import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import styleExt from '../../src/styles/styleExt';
import ReportFooterSubscribe from '../components/ReportFooterSubscribe';
// import ReportFooterThank from '../components/ReportFooterThank';

const screen = Dimensions.get('screen').width;
const widthImage = 350;
export default function Report({navigation}) {
  return (
    <ScrollView>
      <View style={styleExt.container}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Report.png')}
          />
          <Text style={styles.title}>Your orchid looks healthy!</Text>
          <Text style={styles.report}>Report</Text>
          <Text style={styles.text}>
            Water the plants only as often as needed. Watering can cause
            perfectly lovely people to become serial plant killers. They either
            water too little or too much.
          </Text>
          <Text style={styles.text}>
            Many first-time gardeners or potted plant owners water plants more
            than necessary, believing that the more water the plant gets, the
            better. This is true for certain plants, but too much water can kill
            other plants.
          </Text>
          <View style={styles.stay}>
            <ReportFooterSubscribe />
            {/* <ReportFooterThank /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screen - 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  image: {
    width: widthImage,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    color: '#000',
    letterSpacing: 0.02,
    marginBottom: 10,
  },
  report: {
    fontFamily: 'Poppins-Regular',
    color: '#22B35C',
    fontSize: 14,
    lineHeight: 18.2,
    alignSelf: 'flex-start',
    letterSpacing: 0.02,
    marginBottom: -10,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 16,
    lineHeight: 22.4,
    marginTop: 20,
  },
  stay: {
    flex: 1,
    width: widthImage,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#22B35C',
    borderRadius: 30,
  },
});
