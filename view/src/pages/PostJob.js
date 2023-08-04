import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
    const [title , setTitle] = useState('');
    const [category , setCategory] = useState('Technology');
    const [typeOfEmployment , setTypeOfEmployment] = useState('full-time');
    const [jobLevel , setJobLevel] = useState('Junior');
    const [capacity , setCapacity] = useState(1);
    const [dateOfPost , setDateOfPost] = useState(formatDate().split('-').join('/'));
    const [desc , setDesc] = useState('');
    const [companyId , setCompanyId] = useState(JSON.parse(localStorage.getItem('companyData'))[0].id);
    const navigate = useNavigate();


    return (
        <form className='post-job-form' onSubmit={onSubmit}>
            <h2>Post Job</h2>
            <div className="row">
                <div className="col-md-6 input-box">
                    <p>title</p>
                    <input 
                        type="text" 
                        placeholder='Job Title' 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6 input-box">
                    <p>category</p>
                    <select 
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Business">Business</option>
                        <option value="Meadical">Meadical</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Teaching">Teaching</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>type of employment</p>
                    <select 
                        required 
                        value={typeOfEmployment}
                        onChange={(e) => setTypeOfEmployment(e.target.value)}
                    >
                        <option value="full-time">full-time</option>
                        <option value="part-time">part-time</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>job Level</p>
                    <select 
                        required
                        value={jobLevel}
                        onChange={(e) => setJobLevel(e.target.value)}
                    >
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>capacity</p>
                    <input 
                        type="number" 
                        min={1}
                        required
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </div>
                <div className="col-md-6 input-box">
                    <p>date</p>
                    <input 
                        type="date" 
                        value={formatDate()} 
                        disabled/>
                </div>
                <div className="col-12 input-box">
                    <p>Description</p>
                    <textarea 
                        rows='5' 
                        placeholder='Job Description'
                        value={desc}
                        required
                        onInput={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="col-md input-box d-flex justify-content-end">
                    <button type='submit' className='btn-post'>Post Job</button>
                </div>
            </div>
        </form>
    )
    function onSubmit(e){
        e.preventDefault();
        console.log(category);
        console.log(typeOfEmployment)
        console.log(jobLevel)
        console.log(capacity)
        console.log(dateOfPost)

        const job = {title , desc ,companyId , dateOfPost , category , typeOfEmployment , jobLevel ,capacity , applied: 0}

        fetch('http://localhost:5000/jobs' , {
            method: 'POST',
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify(job)
        })
        .then(() => {
            console.log("new Job added");
        })
        navigate('/dashboard');
    }
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    function formatDate(date = new Date()) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }
}
export default PostJob



