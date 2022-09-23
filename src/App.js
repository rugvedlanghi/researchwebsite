import './App.css';
import Home from './pages/Home';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Competition from './pages/competitions';
import Display_profile from './pages/display_profile';
import Dprofile_detail from './pages/dprofile_detail';
import Edit_profile from './pages/edit_profile';
import Researchpaper from './pages/Researchpaper';
import Stud_about from './pages/Stud_about';
import Stud_competition from './pages/Stud_competition';
import Stud_journal from './pages/Stud_journal';
import Stud_feedback from './pages/Stud_feedback';
import Test from './pages/Test';

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/competitions"element={<Competition/>} />
        <Route path="/dprofile_details" element={<Dprofile_detail/>} />
        <Route path="/display_profile" element={<Display_profile/>} />
        <Route path="/edit_profiles" element={<Edit_profile/>} />
        <Route path="/research_paper" element={<Researchpaper/>} />
        <Route path="/stud_about" element={<Stud_about/>} />
        <Route path="/stud_competition" element={<Stud_competition/>} />
        <Route path="/stud_feedback" element={<Stud_feedback/>} />
        <Route path="/stud_journal" element={<Stud_journal/>} />
        <Route path="/" exact element={<Home/>}/>
        <Route path="/test" exact element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
