import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/core';

import {authNavigationPropLogin} from '../../constant/type/routerType';
import {useDispatch} from 'react-redux';
import {signIn} from '../../config/redux/actions/auth';

import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

type State = {a: string}; // your state type
type AppDispatch = ThunkDispatch<State, any, AnyAction>;

const login = () => {
  const navigation = useNavigation<authNavigationPropLogin>();
  const [hidePass, setHidePass] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const dispatch: AppDispatch = useDispatch();

  const loginHandler = async () => {
    try {
      if (email == '' || password == '')
        return setErrorMessage('Mohon isi kolom kosong');

      setModalVisible(true);

      const loginStatus = await dispatch(signIn({email, password}));

      setModalVisible(false);

      if (loginStatus?.type == 'error') {
        setErrorMessage(loginStatus.message);
        return;
      } else if (loginStatus?.type == 'success') {
        navigation.reset({index: 0, routes: [{name: 'main'}]});
      }
    } catch (error) {
      console.log('error', error);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#99999999',
          }}>
          <ActivityIndicator size="large" color="rgb(34,73,242)" />
        </View>
      </Modal>
      <View style={styles.content}>
        <IconFa
          name="opencart"
          size={60}
          color="#fcfcfc"
          style={{alignSelf: 'center', marginBottom: 30}}
        />
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            color: '#F70000',
            fontWeight: 'bold',
            fontSize: 19,
            textShadowColor: '#fff',
            textShadowRadius: 1,
          }}>
          {errorMessage}
        </Text>
        <View style={styles.contentInput}>
          <TextInput
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            placeholderTextColor="#909090"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              fontSize: 20,
              color: '#000',
              paddingHorizontal: 20,
              marginVertical: 0,
              paddingVertical: 10,
              textTransform: 'lowercase',
            }}
          />
          <View style={{height: 0.5, backgroundColor: '#aaa'}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <TextInput
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={hidePass}
              placeholderTextColor="#909090"
              style={{
                fontSize: 20,
                color: '#000',
                marginVertical: 0,
                paddingVertical: 10,
                flex: 1,
              }}
            />
            <TouchableOpacity onPress={() => setHidePass(prev => !prev)}>
              <IconFeather name={hidePass ? 'eye-off' : 'eye'} size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={7} />
        <TouchableOpacity
          onPress={() => loginHandler()}
          style={[
            styles.btnAuth,
            {
              backgroundColor: '#5474FF',
            },
          ]}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Masuk
          </Text>
        </TouchableOpacity>
        <Gap height={7} />
        <TouchableOpacity
          onPress={() => navigation.push('forgot')}
          style={[
            styles.btnAuth,
            {
              backgroundColor: '#fff',
            },
          ]}>
          <Text style={{color: '#5474FF', fontSize: 16, fontWeight: 'bold'}}>
            Lupa Password ?
          </Text>
        </TouchableOpacity>
        <Gap height={15} />
        <Pressable
          onPress={() => navigation.push('regis')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 16}}>Belum punya akun ?</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#fff'}}>
          Silahkan masuk untuk meningkatkan pengalaman berbelanja anda
        </Text>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(34,73,242)',
  },
  content: {
    flex: 9,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  contentInput: {
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fcfcfc',
  },
  footer: {flex: 1, marginHorizontal: 20},
  btnAuth: {
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 2,
  },
});
