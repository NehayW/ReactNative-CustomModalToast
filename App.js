import React, {useState} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import RNModal from './src/component/RNModal';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/config';
import RNButton from './src/component/RNButton';
import RNInput from './src/component/RNInput';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('success');
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <RNModal
        type={type} // type success or error
        visible={showModal}
        title={type === 'error' ? 'Oh no!' : null}
        subTitle={
          type === 'error'
            ? 'Your invitation could not be sent out!'
            : 'Your Invitation has been been sent successfully'
        }
        buttonLabel={type === 'error' ? 'Go back' : 'Got it'}
        onClose={() => setShowModal(false)}
      />
      <View style={{flexDirection: 'row', flexWrap: 'wrap', zIndex: 0}}>
        <Button
          title="Show Success Modal"
          onPress={() => {
            setType('success');
            setShowModal(true);
          }}
        />

        <Button
          title="Show Error Modal"
          onPress={() => {
            setType('error');
            setShowModal(true);
          }}
        />

        <Button
          title="Show success Toast"
          onPress={() =>
            Toast.show({
              type: 'success', // Toast type success or error
              text1: 'Hello', // Title
              text2: 'This is some something 👋', // SubTitle
              visibilityTime: 2000, // Set visible time of toast
            })
          }
        />

        <Button
          title="Show Error Toast"
          onPress={() =>
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: 'Something went wrong❕',
              visibilityTime: 2000,
            })
          }
        />
      </View>
      <View style={styles.space} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <RNButton btnColor="#2ed784" textColor="white" />
        <RNButton isLoading={true} />
        <RNButton disabled={true} />
        <RNButton
          leftIcon={
            <Image
              source={require('./src/assets/checked.png')}
              style={{height: 15, width: 15}}
            />
          }
        />
        <RNButton
          rightIcon={
            <Image
              source={require('./src/assets/checked.png')}
              style={{height: 15, width: 15}}
            />
          }
        />
      </View>
      <RNInput
        value={text}
        setValue={e => setText(e)}
        placeholder="Enter Email"
        label="Email"
        type="text"
        error={true}
        errorText="Please enter correct email."
        leftIcon={
          <Image
            source={require('./src/assets/email.png')}
            style={{height: 25, width: 25}}
          />
        }
        rightIcon={
          <Image
            source={require('./src/assets/checked.png')}
            style={{height: 15, width: 15}}
          />
        }
      />
      <Toast config={toastConfig} />
      {/* Adding Toast component is mandatory */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  space: {
    marginVertical: 10,
  },
});

export default App;
