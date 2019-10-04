import React from 'react';
import { Image, View } from 'react-native';
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
import { validateCode } from '../../../../shared/validators/validators';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirmCode: (userInput: string) => dispatch(Actions.resetPasswordConfirmCode(userInput)),
});

interface InitialValues {
  code: string;
}

const enterCodeInitialValues = {
  code: '',
};

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  NavProps &
  FormikProps<InitialValues> &
  FormikActions<InitialValues>;

const EnterCodeScreen: React.FC<Props> = ({ navigation, resetPasswordConfirmCode }) => {

  const submitEnterCodeForm = (values: InitialValues) => {
    const valuesToSend: any = {
      code: values.code,
    };

    return resetPasswordConfirmCode(valuesToSend);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={style.root}>
      <Formik
        initialValues={enterCodeInitialValues}
        onSubmit={(values) => {
          submitEnterCodeForm(values);
        }}
        render={({ handleSubmit, isValid }) => (
          <View style={style.container}>
            <View>
              <Image source={require('../../../../../assets/logo/alien128.png')} />
            </View>

            <View style={style.fieldsWrapper}>
              <Field
                name={'code'}
                placeholder={'Enter Code From Email'}
                keyboardType={'default'}
                validate={validateCode}
                component={CommonInput}
              />

              <View style={style.hintTextContainer}>
                <Text style={style.hintText}>The verification code was sent to your</Text>
                <Text style={style.hintText}>account email address. Check your email</Text>
                <Text style={style.hintText}>inbox and enter the code to the field above.</Text>
              </View>

              <CommonButton
                title={'CHANGE PASSWORD'}
                type={'outline'}
                buttonStyle={style.button}
                containerStyle={style.buttonContainer}
                titleStyle={style.buttonTitle}
                disabled={!isValid}
                disabledStyle={style.disabledButton}
                onPress={handleSubmit}
              />

              <Button
                title={'RESEND CODE'}
                type={'clear'}
                titleStyle={style.buttonClear}
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>

            <View style={style.textContainer}>
              <Text style={style.text}>Already have an account?</Text>
              <Button
                title={'Log in'}
                type={'clear'}
                titleStyle={style.buttonClear}
                // onPress={() => resetPassword} //need to improve
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
)(EnterCodeScreen);