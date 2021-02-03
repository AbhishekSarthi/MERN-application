import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Wishlist from './routes/Wishlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className="product-grid jumbotron">
                    <Switch>
                        <Route path="/" exact component={Product} />
                        <Route path="/wishlist" exact component={Wishlist} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
