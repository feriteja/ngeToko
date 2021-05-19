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
import {signUp} from '../../config/redux/actions/auth';
import {authNavigationPropRegis} from '../../constant/type/routerType';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

type State = {a: string}; // your state type
type AppDispatch = ThunkDispatch<State, any, AnyAction>;

const regis = () => {
  const navigation = useNavigation<authNavigationPropRegis>();
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConf, setHidePassConf] = useState(true);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const regisHandler = async () => {
    if (email == '' || password == '' || nama == '' || confirmPassword == '')
      return setErrorMessage('Mohon isi kolom kosong');
    if (password !== confirmPassword)
      return setErrorMessage('Password tidak cocok');

    try {
      setModalVisible(true);
      const authStat = await dispatch(signUp({email, password}));

      if (authStat.type == 'error') {
        setErrorMessage(authStat.message);
      } else if (authStat.type == 'error') {
        navigation.replace('success');
      }

      setModalVisible(false);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9,
            elevation: 2,
          }}
          onPress={() => navigation.goBack()}>
          <IconFa name="angle-left" color="#fff" size={40} style={{}} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}>
            Daftar
          </Text>
        </View>
      </View>
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
          }}>
          {errorMessage}
        </Text>
        <View style={styles.contentInput}>
          <TextInput
            placeholder="Nama"
            onChangeText={text => setNama(text)}
            placeholderTextColor="#909090"
            keyboardType="default"
            style={[
              styles.textInputStyle,
              {
                paddingHorizontal: 20,
              },
            ]}
          />
          <View style={{height: 0.5, backgroundColor: '#aaa'}} />
          <TextInput
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            placeholderTextColor="#909090"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[
              styles.textInputStyle,
              {
                paddingHorizontal: 20,
                textTransform: 'lowercase',
              },
            ]}
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
              autoCapitalize="none"
              secureTextEntry={hidePass}
              placeholderTextColor="#909090"
              style={[
                styles.textInputStyle,
                {
                  flex: 1,
                },
              ]}
            />
            <TouchableOpacity onPress={() => setHidePass(prev => !prev)}>
              <IconFeather name={hidePass ? 'eye-off' : 'eye'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={{height: 0.5, backgroundColor: '#aaa'}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <TextInput
              placeholder="Confirm Password"
              onChangeText={text => setConfirmPassword(text)}
              autoCapitalize="none"
              secureTextEntry={hidePassConf}
              placeholderTextColor="#909090"
              style={[
                styles.textInputStyle,
                ,
                {
                  flex: 1,
                },
              ]}
            />
            <TouchableOpacity onPress={() => setHidePassConf(prev => !prev)}>
              <IconFeather name={hidePassConf ? 'eye-off' : 'eye'} size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={20} />
        <TouchableOpacity
          onPress={() => regisHandler()}
          style={[
            styles.btnAuth,
            {
              backgroundColor: '#5474FF',
            },
          ]}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default regis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(34,73,242)',
  },
  header: {
    height: 60,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
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
  footer: {flex: 1},
  btnAuth: {
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 2,
  },
  textInputStyle: {
    fontSize: 18,
    color: '#000',
    marginVertical: 0,
    paddingVertical: 10,
  },
});
