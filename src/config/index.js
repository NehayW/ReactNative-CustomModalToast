import React from 'react';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#2ed784'}}
      contentContainerStyle={{backgroundColor: '#2ed784'}}
      text1Style={{color: '#fff', fontSize: 16}}
      text2Style={{color: '#fff', fontSize: 14}}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: '#e34c5f'}}
      contentContainerStyle={{backgroundColor: '#e34c5f'}}
      text1Style={{color: '#fff', fontSize: 16}}
      text2Style={{color: '#fff', fontSize: 14}}
    />
  ),
};
