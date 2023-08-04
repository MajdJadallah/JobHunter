import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Findjob from './pages/Findjob';
import Browsecompanies from './pages/Browsecompanies';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';
import Applied from './pages/Applied';
import SignUp from './pages/SignUp';
import SignUpUser from './pages/SignUpUser'
import SignUpCompany from './pages/SignUpCompany'
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import ProfileUser from './pages/ProfileUser'
import CompanyDetails from './pages/CompanyDetails'

function App() {
  window.sessionStorage.setItem("userActive",false)
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/findjob' element={<Findjob />}/>
      <Route path='/applied/:jobid/:companyid/:jobLevel/:typeofEmployment/:title/:name' element={<Applied/>}/>
      <Route path='/findjob/:category' element={<Findjob />}/>
      <Route path='/updateprofile' element={<UpdateProfile />}/>
      <Route path='/jobdetails/:id' element={<JobDetails />}/>
      <Route path='/companydetails/:id' element={<CompanyDetails />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/browsecompanies' element={<Browsecompanies />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/dashboard/postjob' element={<PostJob />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signup/jobseeker/profileuser' element={<ProfileUser/>}/>
      <Route path='/signup/jobseeker' element={<SignUpUser/>}/>
      <Route path='/signup/company' element={<SignUpCompany/>}/>
    </Routes>
  );
}
export default App;
