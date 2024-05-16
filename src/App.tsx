import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/header/Header';
import Garage from 'components/garage/Garage';
import Winners from 'components/winners/Winners';
import NotFound from 'components/app/NotFound';
import MainContextProvider from 'components/context/MainContextProvider';
import GarageContextProvider from 'components/context/GarageContextProvider';
import WinnersContextProvider from 'components/context/WinnersContextProvider';
import { MainContainer } from 'components/app/MainContainer.styled';

const App = () => {
  return (
    <Router>
      <MainContextProvider>
        <GarageContextProvider>
          <WinnersContextProvider>
            <Header />
            <MainContainer>
              <Routes>
                <Route path="/" element={<Garage />} />
                <Route path="/winners" element={<Winners />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainContainer>
          </WinnersContextProvider>
        </GarageContextProvider>
      </MainContextProvider>
    </Router>
  );
};

export default App;
