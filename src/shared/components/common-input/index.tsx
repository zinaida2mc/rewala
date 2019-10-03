import React from 'react';
import { Input as ElementsInput, InputProps } from 'react-native-elements';

import { FieldProps } from 'formik';
import get from 'lodash/get';
import { style } from './style';
import { ColorVariables, FontFamilyVariables, FontSizeVariables } from '../../../styles/variables';
import { StyleSheet } from 'react-native';

type Props = FieldProps & InputProps;

export const CommonInput: React.FC<Props> = React.memo((props) => {
  const {
    containerStyle: containerStyleProp,
    inputContainerStyle: inputContainerStyleProp,
    field: { name, value },
    form: { handleChange, handleBlur, errors, touched },
    ...restProps
  } = props;

  const error = get(errors, name);
  const touchedField = get(touched, name);

  const errorMessage = typeof error === 'string' ? error : '';

  /**
   * Used to combine default styles with prop styles
   */
  const containerStyle = { ...style.container, ...(containerStyleProp as any) };
  const inputContainerStyle = { ...style.inputContainer, ...(inputContainerStyleProp as any) };

  return (
    <ElementsInput
      value={value && String(value)}
      containerStyle={containerStyle}
      inputContainerStyle={error && touchedField ? styles.inputErrorContainer : inputContainerStyle}
      placeholderTextColor={error && touchedField ? ColorVariables.error : ColorVariables.lightTeal}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      errorMessage={touchedField ? errorMessage : ''}
      errorStyle={styles.errorMessageStyle}
      {...restProps}
    />
  );
});

const styles = StyleSheet.create({
  inputErrorContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ColorVariables.error,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    maxWidth: 250,
  },
  errorMessageStyle: {
    color: ColorVariables.error,
    fontFamily: FontFamilyVariables.bold,
    fontSize: FontSizeVariables.small,
    marginTop: -2,
    marginBottom: -2,
  },
});
