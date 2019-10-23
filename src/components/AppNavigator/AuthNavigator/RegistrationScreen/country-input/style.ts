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
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    maxWidth: 70,
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
