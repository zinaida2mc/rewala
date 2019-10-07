import { StyleSheet } from 'react-native';
import { ColorVariables } from '../../../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  root: {
    flexGrow: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    minHeight: 300,
    maxHeight: 300,
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
});