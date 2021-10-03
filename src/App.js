import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotAvailable from './components/NotAvailable/NotAvailable';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/blog'>
            <Blog></Blog>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotAvailable></NotAvailable>
          </Route>

        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
