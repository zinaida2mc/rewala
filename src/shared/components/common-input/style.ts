import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  container: {
    flex: 1,
    width: 250,
  },
  inputContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ColorVariables.darkTeal,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 50,
    maxWidth: 250,
  },
  inputStyle: {
    color: ColorVariables.darkTeal,
    fontSize: FontSizeVariables.semiSmall,
  },
  inputErrorContainer: {
    borderColor: ColorVariables.error,
  },
  errorMessageStyle: {
    color: ColorVariables.error,
    fontFamily: FontFamilyVariables.bold,
    fontSize: FontSizeVariables.small,
    marginTop: -2,
    marginBottom: -2,
  },
});

