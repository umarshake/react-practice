import {Container,Grid} from '@material-ui/core';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import './App.css';

function App() {
  return (
    <Container className={"top_60"}>
        <Grid container spacing={7}>
          <Grid 
            item 
            xs={12}
            md={4}
            lg={3}
            sm={12}>
                <Profile class="container-shadow"/>
          </Grid>
          <Grid 
            item xs 
            >
                <Router>
                    <Header />

                    <div className="main_content">
                      <Switch>
                        
                        <Route path='/portfolio'>
                            <Portfolio />
                        </Route>

                        <Route path='/'>
                            <Resume />
                        </Route>
                        
                      </Switch>

                    </div>
                </Router>
                <Footer />
          </Grid>
        </Grid>
    </Container>
  );
}

export default App;
