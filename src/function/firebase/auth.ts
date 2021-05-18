import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const loginFunc = async (username: string, password: string) => {
  try {
    const authLogin = await auth().signInWithEmailAndPassword(
      username.trim().toLowerCase(),
      password.trim(),
    );

    if (!authLogin.user.emailVerified) {
      auth().signOut();
      return {type: 'error', message: 'Mohon periksa email anda'};
    }

    return {type: 'success', message: ''};
  } catch (error) {
    return {type: 'error', message: 'username atau password salah'};
  }
};

export const logoutFunc = () => {
  return auth().signOut();
};

export const regisFunc = async (
  name: string,
  username: string,
  password: string,
) => {
  try {
    const authRegis = await auth().createUserWithEmailAndPassword(
      username.trim().toLowerCase(),
      password.trim(),
    );
    await authRegis.user.updateProfile({displayName: name});
    await authRegis.user.sendEmailVerification();
    await firestore().collection('users').doc(authRegis.user.uid).set({
      name,
      email: username,
      createdAt: authRegis.user.metadata.creationTime,
    });
    return authRegis;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
