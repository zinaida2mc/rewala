import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  root: {
    flexGrow: 1,
    paddingHorizontal: 15
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  fieldsWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 25,
    maxHeight: 230,
  },
  hintTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  hintText: {
    fontFamily: FontFamilyVariables.regular,
    fontSize: FontSizeVariables.tiny,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: ColorVariables.lightTeal,
  },
  disabledButton: {
    backgroundColor: ColorVariables.grey,
  },
  buttonContainer: {
    backgroundColor: ColorVariables.lightTeal,
  },
  buttonTitle: {
    color: ColorVariables.white,
  },
  buttonClear: {
    color: ColorVariables.darkTeal,
  },
});