import { StyleSheet } from 'react-native';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
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