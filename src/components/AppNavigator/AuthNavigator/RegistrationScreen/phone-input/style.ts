import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  container: {
    flex: 1,
  },
  inputContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ColorVariables.darkTeal,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 50,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    maxWidth: 155,
    marginLeft: -50,
  },
  inputErrorContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ColorVariables.error,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    maxWidth: 155,
    marginLeft: -50,
  },
  errorMessageStyle: {
    color: ColorVariables.error,
    fontFamily: FontFamilyVariables.bold,
    fontSize: FontSizeVariables.small,
    marginLeft: -50,
    marginTop: -2,
    marginBottom: -2,
  },
});
