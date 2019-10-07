import React from 'react';
import { Platform, View } from 'react-native';
import { Field, Formik, FormikActions, FormikProps } from 'formik';
import { CommonInput } from '../../../../../shared/components/common-input/index';
import { CommonButton } from '../../../../../shared/components/common-button/index';
import { style } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../../store/auth/actions';
import { validatePassword } from '../../../../../shared/validators/validators';
import { ChangePasswordInput } from '../../../../../shared/interfaces/changePassword';



const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePassword: (userInput: ChangePasswordInput) => dispatch(Actions.changePassword(userInput)),
});

interface InitialValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const changePasswordInitialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};


type Props = ReturnType<typeof mapDispatchToProps> &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const ChangePasswordScreen: React.FC<Props> = ({ changePassword }) => {

  const submitChangePasswordForm = (values: InitialValues) => {
    const valuesToSend: any = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    return changePassword(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={changePasswordInitialValues}
        onSubmit={(values) => {
          submitChangePasswordForm(values);
        }}
        render={({ handleSubmit, isValid }) => (
          <View style={style.container}>

            <Field
              name={'oldPassword'}
              placeholder={'Old Password'}
              validate={validatePassword}
              keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
              secureTextEntry={true} //doesn't work with visible-password
              component={CommonInput}
            />

            <Field
              name={'newPassword'}
              placeholder={'New Password'}
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
        )}
      />
    </KeyboardAwareScrollView>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(ChangePasswordScreen);