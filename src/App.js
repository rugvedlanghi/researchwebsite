import './App.css';
import Home from './pages/Home';
import axios from 'axios';
import React ,{useState,useEffect} from "react";
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
import Login from './pages/Login';
import Competitions_details from './pages/Competitions_details';

const App=()=> {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/dprofile_detail')
    .then(res=>setPosts(res.data))
    .catch(error=>console.log(error));
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Task_assign" element={<Task_assign/>} />
        <Route path="/Report" element={<Report/>} />
        <Route path="/Competitions" element={<Competitions/>} />
        <Route path="/dprofile_detail" element={<Dprofile_detail posts={posts}/>} />
        <Route path="/display_profile" element={<Display_profile/>} />
        <Route path="/edit_profiles" element={<Edit_profile/>} />
        <Route path="/research_paper" element={<Researchpaper/>} />
        <Route path="/stud_about" element={<Stud_about/>} />
        <Route path="/stud_competition" element={<Stud_competition/>} />
        <Route path="/stud_feedback" element={<Stud_feedback/>} />
        <Route path="/stud_journal" element={<Stud_journal/>} />
        <Route path="/" exact element={<Home/>}/>
        <Route path="/test" exact element={<Test/>}/>
        <Route path="/Login" exact element={<Login/>}/>
        <Route path="/competitions_details" exact element={<Competitions_details/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
