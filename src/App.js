import { BrowserRouter as Router, Switch} from 'react-router-dom';
import HomeTwo from './pages/homes/HomeTwo';
import Contact from './pages/contact/Contact';
import Overview from './pages/overview/Overview';
import AboutUs from './pages/aboutpage/aboutuspage/AboutUs';
import Upcoming from './pages/aboutpage/upcoming/Upcoming';
import GameSingle from './pages/aboutpage/singlegame/GameSingle';
import Error from './pages/error404/Error';
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';






function App() {
  return (
    
    <div className="App">
      
     <Router>
        <Switch>

        <ScrollToTopRoute exact={true} path='/'>
          <HomeTwo/>
        </ScrollToTopRoute>
        
        <ScrollToTopRoute exact={true} path='/games/:gameID'>
        <GameSingle/>
        </ScrollToTopRoute>

        <ScrollToTopRoute exact={true} path='/games'>
        <Upcoming/>
        </ScrollToTopRoute>

        <ScrollToTopRoute exact={true} path='/about-us'>
        <AboutUs/>
        </ScrollToTopRoute>

        <ScrollToTopRoute exact={true} path='/contact'>
        <Contact/>
        </ScrollToTopRoute>

        <ScrollToTopRoute exact={true} path='/team/:teamID'>
        <Overview/>
        </ScrollToTopRoute>

        <ScrollToTopRoute path="*" exact={true}>
        <Error/>
        </ScrollToTopRoute>
        
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
