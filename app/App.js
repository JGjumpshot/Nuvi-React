import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import ButtonWrapper from './components/ButtonWrapper';
import Users from './components/Users';
import Input from './components/Input';
import Profile from './components/Profile';
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={Home} />
            <Route path="/users" component={Users}/>
            <Route path="/home" component={Home}/>
            <Route path="/users/profile/:id" component={Profile}/>
          </Route>
        </Router>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
