import { StyleSheet } from 'react-native';
import { FontFamilyVariables } from '../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  button: {
    borderRadius: 25,
    height: 45,
    maxWidth: 250,
  },
  container: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  text: {
    letterSpacing: 0.5,
    fontFamily: FontFamilyVariables.medium,
  }
});
