import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { HelloWorldQuery } from "./__generated__/HelloWorldQuery";
import Job from './Job';

const HELLOWORLD_QUERY = gql`
    query HelloWorldQuery {
        jobs {
            id
            title
        }
    }
`

interface categories {
    id?: string;
    jobID?: any;
    categoryID?: any;
    __typename?: any;
}
  
interface Props {
    categories: categories[];
    arrayOfCategories: string[];
}

const Jobs = (props: any) => {
    const { loading, error, data } = useQuery<HelloWorldQuery>(HELLOWORLD_QUERY, {})

    let determineWhichJobsShow = (categories: any, data: any, arrayOfCategories: any) => {
        let jobsToShow = categories.filter((object: any) => arrayOfCategories.includes(object.categoryID.toString())).map((object: any) => object.jobID)
        console.log(data, jobsToShow)
        let jobNames = data.jobs.filter((object: any) => jobsToShow.includes(parseInt(object.id))).map((object: any) => object.title)
        
        return jobNames.map((name: any) => 
            <Job
                name={name}
            />
        )
    }

    return (
        <div>
            {determineWhichJobsShow(props.categories, data, props.arrayOfCategories)}
        </div>
    )
}

export default Jobs