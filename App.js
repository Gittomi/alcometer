import { Text, View, TextInput, Button, ScrollView, Alert, Platform } from 'react-native';
import Styles from './Styles'
import {useState} from 'react'
import RadioButton from './components/RadioButton';
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font';


export default function App() {

  const [weight, setWeight] = useState(null);
  const [result, setResult] = useState(null);
 
  //these statevars for radiobutton
  const [radio, setRadio] = useState(0);
  const items = [
      {label: 'Male', value: 1},
      { label: 'Female', value: 0},
  ];
  //these statevars for Pickers
  const [valueBottles, setValueBottles] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  
  //custom font for heading
  const [loaded] = useFonts({
    'RubikRegular': require('./assets/fonts/RubikDirt-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  };
  const bottles = [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value:10},
    {label: '11 bottles', value: 11},
    {label: '12 bottles', value: 12},
  ];
  const times = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6},
    {label: '7 hours', value: 7},
    {label: '8 hours', value: 8},
    {label: '9 hours', value: 9},
    {label: '10 hours', value:10},
    {label: '11 hours', value: 11},
    {label: '12 hours', value: 12},
  ];

// anonymous function to calculate blood alcohollevel
const alcoholLevel = () => {
  //check first that weight is typed, if not do alert and exit
  if (weight === null || weight === undefined || weight === 0 || weight === "") {
    Alert.alert("Warning!",
    "Weight is not typed! First type weight then calculate.",
    [
      {
        text: "OK",
      
      }
    ]
    );
    setResult(null);
    return false;
  }
  //if weight is typed => calculate
  let grams = (valueBottles * 0.33) * 8 * 4.5;
  let burning = weight / 10;
  let alcoholGrams = 0;
  //if male or female comparison
  if (radio === 1) {
    alcoholGrams = (grams - (burning * timeValue)) / (weight * 0.7);
  }
    else {
      alcoholGrams = (grams - (burning * timeValue)) / (weight * 0.6);
   }
   //if negative, mount to zero
   if (alcoholGrams < 0) { alcoholGrams = 0};
  setResult(alcoholGrams.toFixed(2));
  };
  //func for different colored result depending on how intoxicated
  const resultColor = () => {
    if(result <= 0.02) {
      return {color: 'green'};
     }
      else if(result > 0.02 && result < 0.5) {
        return {color: '#FFBA01'};
      }
      else {
        return {color: 'red'};
      }
    }
  
  return (
      <ScrollView style={Styles.container}>
      <Text style={Styles.heading}>Alcometer</Text>
      
      <Text style={Styles.label}>Weight</Text>
      <TextInput style={Styles.input} placeholder='Your weight here..' keyboardType='numeric' onChangeText={(text) => setWeight(text.replace(',','.'))}/>
      
      <Text style={Styles.label}>Bottles</Text>
      <Picker
      selectedValue={valueBottles}
      onValueChange={(itemValue, itemIndex) =>
     setValueBottles(itemValue)
  }>
    {bottles.map((bottle, index) => (
      <Picker.Item key={index} label={bottle.label} value={bottle.value} />
    ))
    }
      </Picker>
      
      <Text style={Styles.label}>Time</Text>
      <Picker
      selectedValue={timeValue}
      onValueChange={(itemValue, itemIndex) =>
     setTimeValue(itemValue)
  }>
    {times.map((time, index) => (
      <Picker.Item key={index} label={time.label} value={time.value} />
    ))
    }
      </Picker>

      <Text style={Styles.label}>Gender</Text>
      <RadioButton items={items} onPress={(value) => {setRadio(value)}}/>
      
      <Text style={[Styles.result, resultColor(result)]}>{result}</Text>
      {result >= 0.5 ? <Text style={[Styles.intoxicated, resultColor(result)]}>Don't drive!</Text> : <Text></Text>}
      
      <View style={Styles.button}>
      <Button title='CALCULATE' onPress={alcoholLevel} color={Platform.OS === 'ios' ? 'white' : 0}/>
      </View>
      </ScrollView>
  );
}


