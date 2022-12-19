
import ReactDOM from "react-dom/client";

import Login from './components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <Router>
  
      <Routes>
    
        <Route exact path="/" element={<Login/>}/>
       
      </Routes>
 
  </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

              
