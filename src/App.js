import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';

//import styles
import './App.scss';

//import components
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import {Contact} from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import {Promotions} from './components/Promotions/Promotions';
import Product from './components/ProductComponents/Product/Product';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Log from './components/Log/Log';
import Feedback from './components/Feedback/Feedback';
import Newsletter from './components/Newsletter/Newsletter';
import Register from './components/Register/Register';
import Emmaliunga from './components/Emmaliunga/Emmaliunga';
import { NoMatch } from './components/NoMatch';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0}}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/emmaliunga'} component={Emmaliunga} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/FAQ'} component={FAQ} />
            <Route exact path={'/promotions'} component={Promotions} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/order'} component={Order} />
            <Route exact path={'/log'} component={Log} />
            <Route exact path={'/feedback'} component={Feedback} />
            <Route exact path={'/newsletter'} component={Newsletter} />
            <Route exact path={'/register'} component={Register} />
            <Route component={NoMatch} />
          </AnimatedSwitch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
