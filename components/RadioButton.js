import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react';
import Styles from '../Styles'


export default function RadioButton({items,onPress}) {
    const [value, setValue] = useState(null);

    const handlePress = (selectedValue) => {
        setValue(selectedValue);
        onPress(selectedValue);
    }
  return (
    <>
      {
        items.map((item) => (
        <View key={item.value} style={Styles.radioButtonContainer}>
        <Text style={Styles.radioLabel}>{item.label}</Text>
        <Pressable style={Styles.radioCircle} onPress={() => handlePress(item.value)}>
        {value === item.value && <View style={Styles.radioCheckedCircle}/>}
        </Pressable>
        </View>
        ))
      }
    </>
  )
}