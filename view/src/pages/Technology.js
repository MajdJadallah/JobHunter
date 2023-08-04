import React from 'react'
import useFetch from '../customhooks/useFetch';

const Technology = ({Category}) => {
    const {data : j } = useFetch('http://localhost:8000/jobs');

    let joblist = j.filter((job) => {
        return job.Category === Category
    })

    // console.log(joblist)

  return (
    <div>Technology</div>

  )
}

export default Technology