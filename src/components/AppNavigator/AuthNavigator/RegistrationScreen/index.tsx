import React from 'react';
import { View, Platform, Image } from 'react-native';
import { Field, Formik, FormikActions, FormikProps } from 'formik';
import { Button, Text, CheckBox } from 'react-native-elements';
import { style } from './style';
import { CommonInput } from '../../../../shared/components/common-input/index';
import { CountryInput } from './country-input/index';
import { PhoneInput } from './phone-input/index';
import { CommonButton } from '../../../../shared/components/common-button/index';
import { NavigationStackProp } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import { UserInput } from '../../../../shared/interfaces/registration';
import {
  required,
  validateEmail,
  validatePassword,
} from '../../../../shared/validators/validators';


const mapDispatchToProps = (dispatch: Dispatch) => ({
  registration: (userInput: UserInput) => dispatch(Actions.registration(userInput)),
});

interface InitialValues {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  password: any;
  passwordConfirm: any;
  checkbox: boolean;
}

const registrationInitialValues = {
  name: '',
  countryCode: '+380',
  phone: '',
  email: '',
  password: '',
  passwordConfirm: '',
  checkbox: false,
};


type NavProps = {
  navigation: NavigationStackProp;
};
type Props = ReturnType<typeof mapDispatchToProps> &
  NavProps &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const RegistrationScreen: React.FC<Props> = ({ navigation, registration }) => {
  const goToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const submitRegisterForm = (values: InitialValues) => {
    const valuesToSend: UserInput = {
      email: values.email,
      password: values.password,
      isAgreeWithPrivacyPolicyAndTermOfUse: values.checkbox,
      profileInput: {
        fullName: values.name,
        phone: values.phone,
        countryCode: values.countryCode,
        notifications: true,
      },
    };
    return registration(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={registrationInitialValues}
        onSubmit={(values) => {
          submitRegisterForm(values);
        }}
        render={({ handleSubmit, handleBlur, values, setFieldValue, error, touched, isValid }) => (
          <View style={style.container}>
            <View>
              <Image source={require('../../../../../assets/logo/alien128.png')} />
            </View>

            <View style={style.fieldsWrapper}>
              <Field
                name={'name'}
                placeholder={'Full name'}
                component={CommonInput}
                validate={required}
              />

              <View style={style.phoneInputContainer}>
                <Field
                  name={'countryCode'}
                  placeholder={'code'}
                  component={CountryInput}
                  validate={required}
                />

                <Field
                  name={'phone'}
                  placeholder={'phone'}
                  component={PhoneInput}
                  validate={required}
                />
              </View>

              <Field
                name={'email'}
                placeholder={'Enter email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'} //only iOS?
                component={CommonInput}
                validate={validateEmail}
              />

              <Field
                name={'password'}
                placeholder={'Password'}
                keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
                secureTextEntry={true} //doesn't work with visible-password
                component={CommonInput}
                validate={validatePassword}
              />

              <Field
                name={'passwordConfirm'}
                placeholder={'Confirm password'}
                keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
                component={CommonInput}
              />

              <Field
                component={CheckBox}
                name={'checkbox'}
                title={'I agree with Privacy Policy'}
                onBlur={handleBlur('checkbox')}
                checked={values.checkbox}
                onPress={() => setFieldValue('checkbox', !values.checkbox)}
                style={style.checkbox}
                checkedIcon={<Image source={require('../../../../../assets/icons/check-box.png')} />}
                uncheckedIcon={<Image source={require('../../../../../assets/icons/check-box-empty.png')} />}
                textStyle={style.checkboxText}
                containerStyle={style.checkboxContainer}
                validate={required}
              />

              <CommonButton
                title={'Sign up'}
                type={'outline'}
                buttonStyle={style.button}
                titleStyle={style.buttonTitle}
                disabled={!isValid}
                disabledStyle={style.disabledButton}
                onPress={handleSubmit}
              />
            </View>

            <View style={style.textContainer}>
              <Text style={style.text}>Already have an account?</Text>
              <Button title={'Log in'} type={'clear'} titleStyle={style.buttonClear} onPress={goToLogin} />
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
)(RegistrationScreen);
