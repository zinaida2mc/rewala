import { StyleSheet } from 'react-native';

import { FontFamilyVariables, FontSizeVariables } from '../../../styles/variables';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  tabBarLabel: {
    fontSize: FontSizeVariables.small,
    fontFamily: FontFamilyVariables.medium,
  },
  tabBarIcon: {
    fontSize: FontSizeVariables.h2,
  },
});
