import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import { CommonButton } from '../../../../../shared/components/common-button/index';
import { Dispatch } from 'redux';
import { Actions } from '../../../../../store/auth/actions';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/index';
import { NavigationStackProp } from 'react-navigation-stack';
import { getUserData } from '../../../../../store/auth/selectors';
import { getIsGetMeLoading } from '../../../../../store/auth-requests/selectors';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe()),
  logout: () => dispatch(Actions.logout()),
});

type NavProps = {
  navigation: NavigationStackProp;
};

type Props = ReturnType<typeof mapDispatchToProps>  & NavProps;

const ProfileScreen: React.FC<Props> = ({ navigation, getMe, logout }) => {
  useEffect(() => {
    getMe();
  }, [getMe]);

  const userData = useSelector((state: RootState) => getUserData(state));
  const isGetMeLoading = useSelector((state: RootState) => getIsGetMeLoading(state));

  if (isGetMeLoading || !userData) {
    return <Text>L O A D I N G</Text>;
  }

  return (
    <View style={style.root}>
      <View>
        <Text style={style.header}>Welcome to your profile!</Text>
      </View>

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

      <View>
        <CommonButton
          title={'Log out'}
          type={'outline'}
          buttonStyle={style.button}
          titleStyle={style.buttonTitle}
          onPress={logout}
        />
      </View>
    </View>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(ProfileScreen);
