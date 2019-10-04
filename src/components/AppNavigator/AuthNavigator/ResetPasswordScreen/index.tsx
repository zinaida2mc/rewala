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
import { validateEmail } from '../../../../shared/validators/validators';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: (userInput: string) => dispatch(Actions.resetPassword(userInput)),
});

interface InitialValues {
  email: string;
}

const resetPasswordInitialValues = {
  email: '',
};

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  NavProps &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const ResetPasswordScreen: React.FC<Props> = ({ navigation, resetPassword }) => {

  const submitResetPasswordForm = (values: InitialValues) => {
    const valuesToSend: any = {
      email: values.email,
    };

    return resetPassword(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={resetPasswordInitialValues}
        onSubmit={(values) => {
          submitResetPasswordForm(values);
        }}
        render={({ handleSubmit, isValid }) => (
          <View style={style.container}>
            <View>
              <Image source={require('../../../../../assets/logo/alien128.png')} />
            </View>

            <View style={style.fieldsWrapper}>
              <Field
                name={'email'}
                placeholder={'Enter Your Email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'} //only iOS?
                validate={validateEmail}
                component={CommonInput}
              />

              <CommonButton
                title={'RESET PASSWORD'}
                type={'outline'}
                buttonStyle={style.button}
                containerStyle={style.buttonContainer}
                titleStyle={style.buttonTitle}
                disabled={!isValid}
                disabledStyle={style.disabledButton}
                onPress={handleSubmit}
              />
            </View>

            <View style={style.textContainer}>
              <Text style={style.text}>Already have an account?</Text>
              <Button
                title={'Log in'}
                type={'clear'}
                titleStyle={style.buttonClear}
                onPress={() => navigation.navigate('LoginScreen')}
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
)(ResetPasswordScreen);
