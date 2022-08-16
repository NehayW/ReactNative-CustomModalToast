import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const successColor = '#2ed784';
const errorColor = '#e34c5f';

const RNModal = ({visible, onClose, title, subTitle, buttonLabel, type}) => {
  const color = type === 'error' ? errorColor : successColor;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={[styles.firstContainer, {backgroundColor: color}]}>
            <Image
              source={
                type === 'error'
                  ? require('../assets/error.png')
                  : require('../assets/success.png')
              }
              style={styles.img}
            />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.mainTxt}>{title || 'Awesome!'}</Text>
            <Text style={[styles.mainTxt, {fontWeight: '400', fontSize: 16}]}>
              {subTitle || 'Your Invitation has been been sent successfully'}
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.button,
                {
                  backgroundColor: color,
                },
              ]}>
              <Text style={styles.buttonTxt}>{buttonLabel || 'Got it'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get('window').width - 100,
  },
  firstContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  img: {
    height: 100,
    width: 100,
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
  subContent: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  button: {
    width: 150,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonTxt: {
    fontSize: 18,
    color: 'white',
  },
});

export default RNModal;
