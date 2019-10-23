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
  phoneInputContainerWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  countryCodeInputContainer: {
    borderRadius: 25,
    borderWidth: 1,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 50,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    maxWidth: 70,
  },
  phoneInputContainer: {
    borderRadius: 25,
    borderWidth: 1,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 50,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    maxWidth: 155,
    marginLeft: -50,
  },
  phoneInputErrorMessage: {
    marginLeft: -50,
    marginTop: -2,
    marginBottom: -2,
  },
});
