import auth0 from "auth0-js";
import history from '../history';
// import { log } from "util";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "joo-movie.auth0.com",
    clientID: "s99h7uLoUn3dG7Zt1UzkW9Pz0SU2hwlG",
    redirectUri: 'http://localhost:3000/callback',
    responseType: "token id_token",
    scope: "openid"
  });

  accessToken;
  idToken;
  expiresAt;

  // ...

  constructor(){
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.getAccessToken = this.getAccessToken.bind(this);
      this.getIdToken = this.getIdToken.bind(this);
      this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication(){
      this.auth0.parseHash((err,authResult) => {
          if(authResult && authResult.accessToken && authResult.idToken){
              this.setSession(authResult);
          }else if(err){
              history.replace('/home');
              console.log(err);
              alert(`Error: ${err.error}. Check the console for futher details.`);
          }
      });
  }

  getAccessToken(){
      return this.accessToken;
  }

  getIdToken(){
      return this.idToken;
  }

  setSession(authResult){
      //set isLoggedIn flag in localstorage
      localStorage.setItem('isLoggedIn','true');

      //set the time that the access token will expire at
      let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;
      this.expiresAt = expiresAt;

      //navigate to the home route
      history.replace('/home');
  }

  renewSession(){
      this.auth0.checkSession({}, (err,authResult) => {
          if(authResult && authResult.accessToken && authResult.idToken){
              this.setSession(authResult);
          }else if(err){
              this.logout();
              console.log(err);
              alert(`Could not get a new token (${err.error} : ${err.error_description}).`);
          }
      });
  }

  logout(){
      //remove tokens and expiry time
      this.accessToken = null;
      this.idToken = null;
      this.expiresAt = 0;

      //remove isLoggedIn flag from localstore
      localStorage.removeItem('isLoggedIn');

      this.auth0.logout({
          returnTo: window.location.origin
      });

      //navigate to the home route
      history.replace('/home');
  }

  isAuthenticated(){
      //check whether the current time is past the
      // access token's  expire time
      let expiresAt = this.expiresAt;
      return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }
}
