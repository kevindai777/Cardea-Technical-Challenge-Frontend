import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { HelloWorldQuery } from "./__generated__/HelloWorldQuery";

interface ICategoryProps {
    name?: string[];
    id?: number;
    set(id: any): any;
    setAgain(id: any): any;
}

interface ICategoryState {
    reveal: boolean;
}

class Category extends React.Component<ICategoryProps, ICategoryState> {
    state = {
        reveal: false
    }

    changeReveal = () => {
        this.setState({
            reveal: !this.state.reveal
        })
    }

    createButton = () => {
        return this.state.reveal ? <button onClick={(event) => {this.changeReveal(); this.props.setAgain(this.props.id)}}>Hide</button> : <button onClick={(event) => {this.changeReveal(); this.props.set(this.props.id)}}>Reveal</button>
    }

    determineIfHere = () => {
        return this.state.reveal ? this.props.name : null
    }

    render() {
        return (
            <div>
                {this.props.name && <h1>{this.props.name} {this.props.id ? this.createButton() : null}</h1>}
            </div>
        )
    }
}

export default Category