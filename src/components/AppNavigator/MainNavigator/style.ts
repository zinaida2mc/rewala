import { StyleSheet } from 'react-native';

import { ColorVariables, FontSizeVariables } from '../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  tabBarStyle: {
    borderTopColor: ColorVariables.darkTeal,
    paddingVertical: 10,
  },
  tabBarLabel: {
    fontSize: FontSizeVariables.semiSmall,
  },
});
