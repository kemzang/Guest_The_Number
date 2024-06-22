import { GoogleSignin } from "@react-native-google-signin/google-signin";




export async function onGoogleButtonPress() {
   
    try{
        GoogleSignin.configure({  
            webClientId: '2181659769-9stgm0fvoshma8qtt7gf143f41ovirt7.apps.googleusercontent.com'
        })

   /* // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}catch(e){
    console.log('Error:'+e);
}*/
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    console.log("reached google sign in");
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
   return userInfo
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("error occured SIGN_IN_CANCELLED");
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("error occured IN_PROGRESS");
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("error occured PLAY_SERVICES_NOT_AVAILABLE");
    } else {
      console.log(error)
      console.log("error occured unknow error");
    }
  }
}