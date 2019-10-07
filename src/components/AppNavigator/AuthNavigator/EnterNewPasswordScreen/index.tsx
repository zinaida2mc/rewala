import React from 'react';
import { Image, Platform, View } from 'react-native';
import { Field, Formik, FormikActions, FormikProps } from 'formik';
import { CommonInput } from '../../../../shared/components/common-input/index';
import { CommonButton } from '../../../../shared/components/common-button/index';
import { Button, Text } from 'react-native-elements';
import { style } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import { validatePassword } from '../../../../shared/validators/validators';
import { RootState } from '../../../../store/index';
import { ResetPasswordConfirmInput } from '../../../../shared/interfaces/resetPasswordConfirm';
import { getCode, getUserData } from '../../../../store/auth/selectors';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirm: (userInput: ResetPasswordConfirmInput) => dispatch(Actions.resetPasswordConfirm(userInput)),
});

interface InitialValues {
  password: string;
  confirmPassword: string;
}

const enterNewPasswordInitialValues = {
  password: '',
  confirmPassword: '',
};

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  NavProps &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const EnterNewPasswordScreen: React.FC<Props> = ({ navigation, resetPasswordConfirm }) => {

  const code = useSelector((state: RootState) => getCode(state));

  const submitEnterNewPasswordForm = (values: InitialValues) => {
    const valuesToSend: any = {
      resetPasswordCode: code,
      password: values.password,
    };

    return resetPasswordConfirm(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={enterNewPasswordInitialValues}
        onSubmit={(values) => {
          submitEnterNewPasswordForm(values);
        }}
        render={({ handleSubmit, isValid }) => (
          <View style={style.container}>
            <View>
              <Image source={require('../../../../../assets/logo/alien128.png')} />
            </View>

            <View style={style.fieldsWrapper}>
              <Field
                name={'password'}
                placeholder={'Password'}
                validate={validatePassword}
                keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
                secureTextEntry={true} //doesn't work with visible-password
                component={CommonInput}
              />

              <Field
                name={'confirmPassword'}
                placeholder={'Confirm Password'}
                /**TODO: add validation on confirm password */
                keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
                secureTextEntry={true} //doesn't work with visible-password
                component={CommonInput}
              />

              <CommonButton
                title={'SAVE PASSWORD'}
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
)(EnterNewPasswordScreen);