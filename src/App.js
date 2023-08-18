// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
            <Routes>
              <Route element={<Home/>} path={'/'} exact />
              <Route element={<Dashboard/>} path={'/dashboard'} exact />
              
            </Routes>
        </Router>
        
      </div>
  </ChakraProvider>

  );
}

export default App;
