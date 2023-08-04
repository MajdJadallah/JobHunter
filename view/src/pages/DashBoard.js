import { useState } from "react";
import AllAplications from "../components/AllAplications";
import CompanyProfile from "../components/CompanyProfile";
import { useNavigate } from "react-router-dom";
import PostJob from "./PostJob";
import DashboardHome from "./DashboardHome";
const DashBoard = () => {
    const [activeItem , setActiveItem] = useState('item1');
    const navigate=useNavigate();
    function handleItemClicked(item) {
        setActiveItem(item)
    }
    function logOutbtn() {
        window.sessionStorage.clear();
        navigate('/login');
    }
    return (
        <div className='dash-board'>
            <div className='side-nav'>
                <div className="logo">JobHunter</div>
                <ul>
                    <li className={activeItem === 'item1'? 'active':''} onClick={() => handleItemClicked('item1')}>DashBoard</li>
                    {/* <li className={activeItem === 'item3'? 'active':''} onClick={() => handleItemClicked('item3')}>Company Profile</li> */}
                    <li className={activeItem === 'item4'? 'active':''} onClick={() => handleItemClicked('item4')}>Aplications</li>
                    <li className={activeItem === 'item5'? 'active':''} onClick={() => handleItemClicked('item5')}>Jobs</li>
                </ul>
                <button className="sign-out" onClick={logOutbtn}>Log Out</button>
            </div>
            <div className="dash-board-body">
                {activeItem === 'item1' && <DashboardHome />}
                {activeItem === 'item3' && <CompanyProfile/>}
                {activeItem === 'item4' && <AllAplications />}
                {activeItem === 'item5' && <PostJob />}
            </div>
        </div>
    )
}
export default DashBoard