import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Garage from 'components/Garage';
import Winners from 'components/Winners';
import NotFound from 'components/NotFound';
import MainContextProvider from 'components/context/MainContextProvider';
import GarageContextProvider from 'components/context/GarageContextProvider';
import WinnersContextProvider from 'components/context/WinnersContextProvider';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainContextProvider>
        <GarageContextProvider>
          <WinnersContextProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Garage />} />
                <Route path="/winners" element={<Winners />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </WinnersContextProvider>
        </GarageContextProvider>
      </MainContextProvider>
    </Router>
  );
};

export default App;
