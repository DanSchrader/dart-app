// import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DartHelperPage from './pages/DartHelperPage';
import HistoryPage from './pages/HistoryPage';
import DartCounterPage from './pages/DartCounterPage';
import Navigation from './components/Navigation';

export default function App() {
  const navigate = useNavigate();
  // const [gameType, setGameType] = useState("");

  return (
    <AppContainer className="App">
      <Routes>
        <Route
          path="/"
          element={<DartHelperPage onCreateGame={createGame} />}
        />
        <Route path="/dartcounter" element={<DartCounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Navigation />
    </AppContainer>
  );

  function createGame() {
    navigate('/dartcounter');
  }
}

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  padding: 50px 0;
`;
