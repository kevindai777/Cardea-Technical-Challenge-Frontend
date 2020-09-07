import React from "react"

interface Props {
    name?: string;
}

const Job = (props: any) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default Job;