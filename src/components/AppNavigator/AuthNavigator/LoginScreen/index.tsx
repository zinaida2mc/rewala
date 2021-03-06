import React from 'react';
import { Image, Platform, View } from 'react-native';
import { Field, Formik, FormikActions, FormikProps } from 'formik';
import { Button, Text } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Actions } from '../../../../store/auth/actions';

import { CommonInput } from '../../../../shared/components/common-input';
import { CommonButton } from '../../../../shared/components/common-button';
import { LoginInput } from '../../../../shared/interfaces/login';

import { required, validateEmail } from '../../../../shared/validators/validators';

import { style } from './style';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (userInput: LoginInput) => dispatch(Actions.login(userInput)),
});

interface InitialValues {
  email: string;
  password: any;
}

const loginInitialValues = {
  email: '',
  password: '',
};

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  NavProps &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const LoginScreen: React.FC<Props> = ({ navigation, login }) => {
  const submitLoginForm = (values: InitialValues, {resetForm}: FormikActions<InitialValues>) => {
    const valuesToSend: LoginInput = {
      email: values.email,
      password: values.password,
    };

    login(valuesToSend);
    resetForm();
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={loginInitialValues}
        onSubmit={(values, resetForm) => {
          submitLoginForm(values, resetForm);
        }}
        render={({ handleSubmit, isValid }) => (
          <View style={style.container}>
            <View>
              <Image source={require('../../../../../assets/logo/alien128.png')} />
            </View>

            <View style={style.fieldsWrapper}>
              <Field
                name={'email'}
                placeholder={'Enter email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                validate={validateEmail}
                component={CommonInput}
              />

              <Field
                name={'password'}
                placeholder={'Password'}
                secureTextEntry={true}
                keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
                validate={required}
                component={CommonInput}
              />

              <CommonButton
                title='Log in'
                type='outline'
                buttonStyle={style.button}
                containerStyle={style.buttonContainer}
                titleStyle={style.buttonTitle}
                disabled={!isValid}
                disabledStyle={style.disabledButton}
                onPress={handleSubmit}
              />
              <Button
                title={'FORGOT PASSWORD?'}
                type={'clear'}
                titleStyle={style.buttonClear}
                onPress={() => navigation.navigate('ResetPasswordScreen')}
              />
            </View>

            <View style={style.textContainer}>
              <Text style={style.text}>Do not have an account?</Text>
              <Button
                title='Sign up'
                type='clear'
                titleStyle={style.buttonClear}
                onPress={() => navigation.navigate('RegistrationScreen')}
              />
            </View>
          </View>
        )}
      />
    </KeyboardAwareScrollView>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
