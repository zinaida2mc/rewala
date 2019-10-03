import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { style } from './style';

import { authService } from '../../../shared/services/auth.service';

import { Actions } from '../../../store/auth/actions';
import { useDispatch } from 'react-redux';

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const token$ = authService.getToken();

    const subscription = token$.subscribe(dispatch(Actions.setAccessToken()));

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

export default LoadingScreen;
