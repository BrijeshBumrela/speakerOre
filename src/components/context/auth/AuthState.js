import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import firebase from 'firebase';
import setAuthToken from '../../utils/setAuthToken';
import {
  SIGN_IN_FB,
  SIGN_IN_GOOGLE,
  LOGOUT,
  SIGN_IN_FAIL,
  SHOW_MODAL,
  CLOSE_MODAL
} from '../types';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBhOhfy95TDK6C8U8kjgd1anwIXV6TD0dE',
    authDomain: 'speakerore-e254d.firebaseapp.com'
  });
}

var provider_google = new firebase.auth.GoogleAuthProvider();
var provider_fb = new firebase.auth.FacebookAuthProvider();

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isSubscribed: true,
    loading: false,
    user: null,
    error: null,
    auth_modal_visible: false,
    role: 'RDTEAM'
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  };

  const show_modal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const close_modal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: LOGOUT });
  };

  const signIn_google = () => {
    firebase
      .auth()
      .signInWithPopup(provider_google)
      .then(function(result) {
        var token = result.credential;
        var user = result.user;
        console.log(user, token);
        dispatch({ type: SIGN_IN_GOOGLE, payload: result });
      })
      .catch(function(error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        dispatch({
          type: SIGN_IN_FAIL,
          payload: error
        });
      });
  };
  const signIn_fb = () => {
    firebase
      .auth()
      .signInWithPopup(provider_fb)
      .then(function(result) {
        dispatch({ type: SIGN_IN_FB, payload: result });
      })
      .catch(function(error) {
        dispatch({
          type: SIGN_IN_FAIL,
          payload: error
        });
      });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isSubscribed: state.isSubscribed,
        loading: state.loading,
        user: state.user,
        error: state.error,
        auth_modal_visible: state.auth_modal_visible,
        role: state.role,
        loadUser,
        signIn_google,
        signIn_fb,
        logout,
        show_modal,
        close_modal
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
