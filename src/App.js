import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import DartCounterPage from './pages/DartCounterPage';
import ScorekeeperPage from './pages/ScorekeeperPage';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dartcounter" element={<DartCounterPage />} />
        <Route path="/scorekeeper" element={<ScorekeeperPage />} />
      </Routes>
      <Navigation />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: sans-serif;
`;
