import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const RNButton = ({
  label,
  disabled,
  isLoading,
  onPress,
  btnStyle,
  leftIcon,
  rightIcon,
  btnColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.button,
        btnStyle,
        {backgroundColor: disabled ? '#e4dee0' : btnColor || '#d1bbff'},
      ]}>
      {isLoading ? (
        <>
          <ActivityIndicator size="small" color={textColor || '#5d526c'} />
          <Text style={[styles.buttonTxt, {color: textColor || '#5d526c'}]}>
            Loading
          </Text>
        </>
      ) : (
        <>
          {leftIcon && leftIcon}
          <Text
            style={[
              styles.buttonTxt,
              {color: disabled ? '#9f929d' : textColor || '#5d526c'},
            ]}>
            {label || 'Button'}
          </Text>
          {rightIcon && rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 25,
    marginVertical: 20,
    minWidth: 150,
    flexDirection: 'row',
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
});

export default RNButton;
