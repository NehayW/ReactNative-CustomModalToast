import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const RNInput = ({
  label,
  disabled,
  value,
  setValue,
  placeholder,
  leftIcon,
  rightIcon,
  type,
  error,
  errorText,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View>
      {label && <Text style={styles.text}>{label}</Text>}
      <View style={[styles.container, containerStyle]}>
        <View style={styles.inputContainer}>
          {leftIcon && leftIcon}
          <TextInput
            value={value}
            editable={!disabled}
            secureTextEntry={type === 'password' ? true : false}
            placeholder={placeholder}
            onChangeText={e => setValue(e)}
            style={[styles.input, inputStyle]}
          />
        </View>
        {rightIcon && rightIcon}
      </View>
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    paddingHorizontal: 15,
    minWidth: 150,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 48,
    borderWidth: 0,
    borderRadius: 5,
    paddingLeft: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  error: {
    fontSize: 14,
    marginTop: 5,
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RNInput;
