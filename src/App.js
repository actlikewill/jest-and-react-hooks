import React from 'react';
import Header from './Header'
import Clicker from './Clickers'
import Fetch from './Fetch'
import './App.css';

const loadFbLoginApi = () => {
  window.fbAsyncInit = function() {
      window.FB.init({
          appId      : process.env.REACT_APP_FACEBOOK_APP_ID,
          cookie     : true,  
          xfbml      : true, 
          version    : 'v2.5'
      });
  };
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}



function App() {
  loadFbLoginApi()
  return (
    <div className="App">
      <Header text='Hello World' />
      <Clicker />
      <Fetch url="https://jsonplaceholder.typicode.com/todos/1" />
    </div>
  );
}

export default App;
