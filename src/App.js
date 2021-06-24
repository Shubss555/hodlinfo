import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import './components/style.css';
import Price from './components/Price';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header/>
    <Price/>
    <Table/>
    <Footer/>
    </div>
  );
}

export default App;
