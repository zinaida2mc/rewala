import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  circularProgress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontFamily: FontFamilyVariables.medium,
    fontSize: FontSizeVariables.h2,
    color: ColorVariables.darkTeal,
  },
  userInfo: {
    fontFamily: FontFamilyVariables.medium,
    fontSize: FontSizeVariables.middle,
  },
  button: {
    backgroundColor: ColorVariables.lightTeal,
    minWidth: 200,
    maxWidth: 250,
  },
  buttonTitle: {
    color: ColorVariables.darkTeal,
  },
  buttonChangePass: {
    backgroundColor: ColorVariables.warning,
    alignSelf: 'center',
    minWidth: 200,
    maxWidth: 250,
    marginTop: 15,
  }
});