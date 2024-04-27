import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Courses } from './pages/Courses.tsx';
import { Notfound } from './pages/NotFound.tsx';
import { SinglePage } from './pages/SinglePage.tsx';
import { UX_course } from './pages/UX-course.tsx';
import './utils/i18n.ts';
import {AccordionExpandDefault}  from './components/Accordion.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="UX-course" element={<UX_course />} />
          <Route path="courses/:id" element={<SinglePage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
      <AccordionExpandDefault />
    </>
  )
}

export default App
