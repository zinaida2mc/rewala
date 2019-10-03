import { StyleSheet, ViewStyle } from 'react-native';
import { ColorVariables } from '../../../../../styles/variables';

interface Style {
  container: ViewStyle;
  inputContainer: ViewStyle;
}

const styleInput: Style = {
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
    maxWidth: 70
  },
};

export const style = StyleSheet.create(styleInput);