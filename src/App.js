import './App.css';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import NewCard from './components/newCard/NewCard';
import Subheader from './components/subheader/Subheader';
import Total from './components/total/Total';

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <main className="main container">
        <NewCard/>
        <Cards/>
      </main>
      <Total/>
      <Footer/>
    </div>
  );
}

export default App;
