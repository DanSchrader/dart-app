import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import DartHelperPage from './pages/DartHelperPage';
import HistoryPage from './pages/HistoryPage';
import DartCounterPage from './pages/DartCounterPage';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<DartHelperPage />} />
        <Route path="/dartcounter" element={<DartCounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Navigation />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  padding: 50px 0;
`;
