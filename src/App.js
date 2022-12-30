import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ViewNews from './components/ViewNews';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/viewnews" element={<ViewNews />} />

    </Routes> 
     
    </div>
  );
}

export default App;
