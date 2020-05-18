import React from 'react';
import GlobalStyles from "./GlobalStyle"

import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      f7params: {
        name: '1000ship.me',
        theme: 'ios',
        routes: routes,
        autoDarkTheme: true,
        serviceWorker: {
          path: '/service-worker.js',
        },
      },

      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        <GlobalStyles/>
        <View main className="safe-areas" url="/"/>
      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password, () => {
      this.$f7.loginScreen.close();
    });
  }
  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}