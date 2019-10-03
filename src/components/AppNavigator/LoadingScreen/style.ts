import { StyleSheet } from 'react-native';

import { ColorVariables } from '../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorVariables.white,
  },
});
