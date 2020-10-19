import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import ImageLogo from '../components/ImageLogo';
import ImageLogoSmile from '../components/ImageLogoSmile';
import styleExt from '../../src/styles/styleExt';
import {set} from 'react-native-reanimated';
export default class Analising extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      flag: true,
    };
  }

  getData() {
    while (this.state.loaded) {
      let set = 800,
        i = 0;
      for (i; i < set; i++) {
        if (i < 400) {
          this.setState({flag: true});
          console.log(this.state.flag);
        } else if (i > 400) {
          this.setState({flag: false});
          console.log(this.state.flag);
        }
      }
    }
  }

  componentDidMount() {
    // setInterval(this.getData(), 3000);
    // setInterval(this.instance(), 100);
    // setInterval(this.instance(), 100);
    // this.instance();
    // this.getData();
  }

  render() {
    return (
      <View style={styleExt.container}>
        <View style={styles.block}>
          {this.state.flag ? <ImageLogo /> : <ImageLogoSmile />}
          {/* {this.state.loaded ? <ImageLogo /> : <ImageLogoSmile />} */}
        </View>
        <Text style={styleExt.titleText}>Analising ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
});
//*****************
//  onPress={() => navigation.navigate('Analising')}>

// getData() {
//   setTimeout(() => {
//     this.setState({loaded: false});
//     console.log(this.state.loaded);
//   }, 1000);
//   setTimeout(() => {
//     this.setState({loaded: true});
//     console.log(this.state.loaded);
//   }, 1000);
// }
