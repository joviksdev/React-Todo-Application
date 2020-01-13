import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './component/layout/Form';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Todo from './component/todo/Todo';
import About from './component/pages/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className='app-wrapper'>
          <Header />
          <main>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Form />
                  <Todo />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </main>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
