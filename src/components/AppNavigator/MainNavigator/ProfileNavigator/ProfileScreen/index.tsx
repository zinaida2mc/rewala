import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Dispatch } from 'redux';
import { connect, useSelector } from 'react-redux';

import { CommonButton } from '../../../../../shared/components/common-button';

import { Actions } from '../../../../../store/auth/actions';
import { RootState } from '../../../../../store';
import { getUserData } from '../../../../../store/auth/selectors';

import { style } from './style';
import { ColorVariables } from '../../../../../styles/variables';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe()),
  logout: () => dispatch(Actions.logout()),
});

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps> & NavProps;

const ProfileScreen: React.FC<Props> = ({ navigation, getMe, logout }) => {
  useEffect(() => {
    getMe();
  }, [getMe]);

  const userData = useSelector((state: RootState) => getUserData(state));

  if (!userData) {
    return (
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={100}
        style={style.circularProgress}
        tintColor={ColorVariables.lightTeal}
      />
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Welcome to your profile!</Text>

      <View>
        <Text style={style.userInfo}>Name: {userData.profile.fullName}</Text>
        <Text style={style.userInfo}>Email: {userData.email}</Text>
        <Text style={style.userInfo}>
          Phone: {userData.profile.countryCode} {userData.profile.phone}
        </Text>
        <CommonButton
          title={'Change Password'}
          type={'outline'}
          buttonStyle={style.buttonChangePass}
          titleStyle={style.buttonTitle}
          onPress={() => navigation.navigate('ChangePasswordScreen')}
        />
      </View>

      <CommonButton
        title={'Log out'}
        type={'outline'}
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        onPress={logout}
      />
    </View>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(ProfileScreen);
