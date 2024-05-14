import './normalize.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { Notfound } from './pages/NotFound.tsx';
import './utils/i18n.ts';
import { UX_course } from './pages/UX-course.tsx';
import { Graph_design } from './pages/Graph_design.tsx';
import { Courseall } from './pages/Coursesall.tsx';
import { D3_course } from './pages/3d-course.tsx';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="UX-course" element={<UX_course />} />
          <Route path="Graph_design" element={<Graph_design />} />
          <Route path="Courseall" element={<Courseall />} />
          <Route path="3d-course" element={<D3_course />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
