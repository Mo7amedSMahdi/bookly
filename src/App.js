import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Tabs from './components/ui/tabs/Tabs';

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <div className="side-nav" id="item-1">
        &nbsp;
      </div>
      <main id="item-2">&nbsp;</main>
    </>
  );
}

export default App;
