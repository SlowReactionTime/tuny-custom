import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Embroidery } from './Embroidery';
import { DTG } from './DTG';
import { DigitalPrinting } from './DigitalPrinting';
import { Vinyl } from './Vinyl';
import { ScreenPrinting } from './ScreenPrinting';
import { RIP } from './RIP';
import { Banner } from './Banner';

import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/embroidery" component={Embroidery} />
              <Route path="/dtg" component={DTG} />
              <Route path="/digitalPrinting" component={DigitalPrinting} />
              <Route path="/vinyl" component={Vinyl} />
              <Route path="/screenPrinting" component={ScreenPrinting} />
              <Route path="/rip" component={RIP} />
              <Route path="/banner" component={Banner} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
