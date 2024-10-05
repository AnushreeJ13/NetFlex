// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import  FindEvents from './components/FindEvents';
import LandingPage from './components/LandingPage';
import CreateEvent from './components/CreateEvent';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {


  return (
    <Router>
      (
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/find-events" element={<FindEvents />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            
          </Routes>
        </>
      )
    </Router>
  );
}

export default App;
