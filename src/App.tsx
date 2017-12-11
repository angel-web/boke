import * as React from 'react';
import Main from './components/Main/Main';
import Router from './router/Router';
import { Switch, Route, Redirect } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <Main>
        <Switch>
          {
            Router.map((item, index) => {
              return (
                <Route key={index}  {...item}/>
              );
            })
          }
          <Redirect from="/" to="/home" />
        </Switch>
      </Main>
    );
  }
}

export default App;
