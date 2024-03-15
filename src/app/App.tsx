import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComingSoonPage } from 'src/pages/coming-soon-page';
import { CoursesPage } from 'src/pages/courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CoursesPage />}/>
        <Route path='/:id' element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
