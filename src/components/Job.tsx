import React from "react"
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { HelloWorldQuery } from "./__generated__/HelloWorldQuery";

const HELLOWORLD_QUERY = gql`
    query HelloWorldQuery {
        jobs {
            id
            title
        }
    }
`

interface Props {
    jobID?: number;
    categoryID?: number;
    categories?: string[];
}

let determineIfShowJob = (categories: any, jobid: any, categoryid: any, data: any) => {
    let jobName = data.jobs.filter((job: any) => job.id == jobid)[0].title
    if (!categories.includes(categoryid.toString())) {
        return null
    } else {
        return "Job Name: " + jobName
    }
}

const Job = (props: any) => {
    const { loading, error, data } = useQuery<HelloWorldQuery>(HELLOWORLD_QUERY, {})
    return (
        <div>
            {determineIfShowJob(props.categories, props.jobID, props.categoryID, data)}
        </div>
    )
}

export default Job;