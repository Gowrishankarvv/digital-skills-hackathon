// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      },
    ]
  });
  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);