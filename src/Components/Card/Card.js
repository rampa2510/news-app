import React, { PureComponent } from 'react'
import { View,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerStyle:{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    shadowRadius:2,
    elevation:5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
  }
})

export default class Card extends PureComponent {


  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}
