import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
      marginLeft: 24,
      marginRight: 24,
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
    },
    heading: {
        fontFamily: 'RubikRegular',
        marginTop:24,
        fontSize: 42,
        color: '#24a0ed',
        textAlign: 'center',
        paddingTop: 16,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 12,
      paddingBottom: 12,
    },
    input: {
      borderBottomColor: '#C7C7CD',
      borderBottomWidth: 1.0,
      fontSize: 18,
      marginBottom: 20,
      height: 32,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: 30,
      paddingLeft: 10,
      paddingRight: 10,
      
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16,

},
  radioCircle: {
      height: 32,
      width: 32,
      borderRadius: 16,
      borderWidth: 1.2,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },
  radioCheckedCircle: {
      width: 20,
      height: 20,
      borderRadius: 14,
      backgroundColor: '#24a0ed',
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#24a0ed',
    textAlign: 'center',
  },
  intoxicated: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#24a0ed",
    backgroundColor: "#24a0ed",
    overflow: "hidden",
    marginBottom: 40,
  },
  
  
})