// import React, { useEffect } from 'react'
// import { useState } from 'react';
// function Filters() {
//     const [jobs, setJobs] = useState([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//     const [checkboxValue, setcheckboxValue] = useState("");
//     const [filteredList, setFilteredList] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:5000/jobs")
//           .then((res) => {
//             if (!res.ok) {
//               throw Error("Could not fetch the data for that resource");
//             }
//             return res.json();
//           })
//           .then((data) => {
//             setJobs(data);
//             setIsPending(false);
//             setError(null);
//           })
//           .catch((err) => {
//             setIsPending(false);
//             setError(err.message);
//           });
//       }, []);
//     //   console.log(jobs)
//       const getCheckboxValue=(e)=>{
//        setInputValue(e.target.value) 
//       } 
      
//       let FinalResultArray = jobs

//     useEffect(()=>{
    
//     FinalResultArray = FinalResultArray.filter((job) =>job.typeOfEmployment === inputValue);
   
//     FinalResultArray = FinalResultArray.filter((job) =>job.category === inputValue);

//     FinalResultArray = FinalResultArray.filter((job) =>job.jobLevel === inputValue);

//     },[inputValue]);



//   return (
//     <div>
//      <h6>Type of Employment</h6>
//           <div className="form-check">
//             <input className="form-check-input" type="checkbox" value="Full-time" id="flexCheckDefault" onChange={getCheckboxValue} />
//             <label className="form-check-label" for="flexCheckDefault">
//             Full-time
//             </label>
//           </div>
//           <div className="form-check">
//             <input className="form-check-input" type="checkbox" value="Part-time" id="flexCheckChecked" onChange={getCheckboxValue}/>
//             <label className="form-check-label" for="flexCheckChecked">
//             Part-time
//             </label>
//           </div>
//     </div>
//   )
// }

// export default Filters