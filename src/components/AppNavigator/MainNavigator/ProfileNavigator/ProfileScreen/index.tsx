import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import { CommonButton } from '../../../../../shared/components/common-button/index';
import { Dispatch } from 'redux';
import { Actions } from '../../../../../store/auth/actions';
import { connect } from 'react-redux';
import { RootState } from '../../../../../store/index';

const mapStateToProps = (state: RootState) => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe()),
  logout: () => dispatch(Actions.logout()),
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

const ProfileScreen: React.FC<Props> = ({ getMe, userData, logout }) => {
  useEffect(() => {
    getMe();
  }, [getMe]);

  if (!userData) {
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
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
