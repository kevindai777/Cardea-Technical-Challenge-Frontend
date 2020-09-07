import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { HelloWorldQuery } from "./__generated__/HelloWorldQuery";
import Category from './Category';
import Job from './Job';

const HELLOWORLD_QUERY = gql`
    query HelloWorldQuery {
        categories {
            id
            name
        }
        jobcategories {
            id
            jobID
            categoryID
        }
        jobs {
            id
            title
        }
    }
`

const HelloWorld = () => {
    let [arrayOfCategories, setArray] = useState([]) as any;
    
    const { loading, error, data } = useQuery<HelloWorldQuery>(HELLOWORLD_QUERY, {})

    let set = function(value: string) {
        if (!arrayOfCategories.includes(value)) {   
            setArray([...arrayOfCategories, value])
        }
    }

    let setAgain = function(value: string) {
        setArray(arrayOfCategories.filter((string: any) => string != value))
    }

    let mapTitles = function(datalog: any) {
        let toUse = datalog.categories
    
        return toUse.map((object: any) => 
            <Category 
                name={object.name}
                id={object.id}
                set={set}
                setAgain={setAgain}
            />
        )
    }
    
    let mapJobs = function(datalogs: any) {
        let toUse = datalogs.jobcategories 
    
        return toUse.map((object: any) =>
            <Job
                jobID={object.jobID}
                categoryID={object.categoryID}
                categories={arrayOfCategories}
            />
        )    
    }

    return(
        <>
            {loading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {data ? mapTitles(data) : null}
            <div>
                <h1>Jobs:</h1>
            {data ? mapJobs(data) : null}
            </div>
        </>
    )
}

export default HelloWorld