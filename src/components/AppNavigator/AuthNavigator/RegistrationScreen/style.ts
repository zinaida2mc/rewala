import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  root: {
    flexGrow: 1,
    paddingHorizontal: 15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
  },
  item: {
    width: 250,
    height: 55,
    marginBottom: 5,
  },
  fieldsWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 25,
    // marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontFamily: FontFamilyVariables.medium,
  },
  button: {
    backgroundColor: ColorVariables.lightTeal,
  },
  disabledButton: {
    backgroundColor: ColorVariables.grey,
  },
  buttonTitle: {
    color: ColorVariables.white,
  },
  buttonClear: {
    color: ColorVariables.darkTeal,
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  checkboxText: {
    color: ColorVariables.lightTeal,
    fontFamily: FontFamilyVariables.medium,
    fontSize: FontSizeVariables.small,
  },
  phoneInputContainer: {
    flex: 1,
    flexDirection: 'row'
  },
});
