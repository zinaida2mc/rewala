import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { style } from './style';

import { authService } from '../../../shared/services/auth.service';

import { Actions } from '../../../store/auth/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAccessToken: (token: string | null) => dispatch(Actions.setAccessToken(token || undefined)),
});

type Props = ReturnType<typeof mapDispatchToProps>;

const LoadingScreen: React.FC<Props> = ({ setAccessToken }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const token$ = authService.getToken();

    const subscription = token$.subscribe(setAccessToken);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={style.root}>
      <Image source={require('../../../../assets/logo/alien256.png')} />
    </View>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(LoadingScreen);
