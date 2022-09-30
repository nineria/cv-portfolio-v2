import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Experiences from './Pages/Experiences';
import HomePage from './Pages/HomePage';
import ProgrammingSkill from './Pages/ProgrammingSkill';
import Showcase from './Pages/Showcase';
import SidebarMain from './Pages/SidebarMain';
import './style.css';

const Div = styled.div`
  font-family: 'Source Code Pro', monospace;
  display: flex;
`;

function App() {
  return (
    <Div>
      <SidebarMain />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/programmingskill' element={<ProgrammingSkill />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/showcase' element={<Showcase />} />
      </Routes>
    </Div>
  );
}

export default App;
