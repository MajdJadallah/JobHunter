import React from 'react' 
import useFetch from "../customhooks/useFetch";
import CompanyData from './CompanyData';
const CompanyProfile = () => {
let companyData = JSON.parse(localStorage.getItem('companyData'))[0];
const {data: company , error , isPending} = useFetch('http://localhost:5000/company/'+companyData.id);
return (
<>
{isPending && <div>Loading ...</div>}
{error && <div>{error}</div>}
{company && <CompanyData  company={company}  />}
</>
)
}
export default CompanyProfile
