import React from 'react';
import { Input as ElementsInput, InputProps } from 'react-native-elements';
import { FieldProps } from 'formik';
import get from 'lodash/get';
import { ColorVariables } from '../../../styles/variables';

import { style } from './style';

type Props = FieldProps & InputProps;

export const CommonInput: React.FC<Props> = React.memo((props) => {
  const {
    containerStyle: containerStyleProp,
    inputContainerStyle: inputContainerStyleProp,
    inputStyle: inputStyleProp,
    errorStyle: errorStyleProp,
    field: { name, value },
    form: { handleChange, handleBlur, errors, touched },
    ...restProps
  } = props;

  const error = get(errors, name);
  const touchedField = get(touched, name);
  const isError = error && touchedField;

  const errorMessage = typeof error === 'string' ? error : '';

  /**
   * Used to combine default styles with prop styles
   */
  const containerStyle = { ...style.container, ...(containerStyleProp as any) };
  const inputContainerStyle = { ...style.inputContainer, ...(inputContainerStyleProp as any) };
  const inputStyle = { ...style.inputStyle, ...(inputStyleProp as any) };
  const errorStyle = { ...style.errorMessageStyle, ...(errorStyleProp as any) };

  return (
    <ElementsInput
      value={value && String(value)}
      containerStyle={containerStyle}
      inputContainerStyle={{ ...inputContainerStyle, ...(isError ? style.inputErrorContainer : {}) }}
      inputStyle={inputStyle}
      placeholderTextColor={isError ? ColorVariables.error : ColorVariables.lightTeal}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      errorMessage={touchedField ? errorMessage : ''}
      errorStyle={errorStyle}
      {...restProps}
    />
  );
});
