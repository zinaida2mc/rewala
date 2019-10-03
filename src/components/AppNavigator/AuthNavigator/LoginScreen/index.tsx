import React from 'react';
import { Image, Platform, View } from 'react-native';
import { Field, Formik, FormikActions, FormikProps } from 'formik';
import { CommonInput } from '../../../../shared/components/common-input/index';
import { CommonButton } from '../../../../shared/components/common-button/index';
import { Button, Text } from 'react-native-elements';
import { style } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import { LoginInput } from '../../../../shared/interfaces/login';
import { required, validateEmail } from '../../../../shared/validators/validators';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (userInput: LoginInput) => dispatch(Actions.login(userInput)),
});

interface InitialValues {
  email: string;
  password: any;
}

const registrationInitialValues = {
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
  const submitLoginForm = (values: InitialValues) => {
    const valuesToSend: LoginInput = {
      email: values.email,
      password: values.password,
    };
    return login(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={registrationInitialValues}
        onSubmit={(values) => {
          submitLoginForm(values);
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
                textContentType={'emailAddress'} //only iOS?
                validate={validateEmail}
                component={CommonInput}
              />

              <Field
                name={'password'}
                placeholder={'Password'}
                secureTextEntry={true} //doesn't work with keyboardType visible-password
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
