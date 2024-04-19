import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Garage from 'components/Garage';
import Winners from 'components/Winners';
import NotFound from 'components/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
