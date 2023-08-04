import useFetch from "../customhooks/useFetch";
import ApplicationsTable from "./ApplicationsTable";


const AllAplications = () => {
    let companyData = JSON.parse(localStorage.getItem('companyData'))[0];
    const {data: applications , error , isPending} = useFetch('http://localhost:5000/application');
    return (
        <>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {applications && <ApplicationsTable applications={applications} companyData={companyData}/>}
        </>
    )
}
export default AllAplications

