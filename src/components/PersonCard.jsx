import React, {Component} from 'react'

class PersonCard extends React.Component{
    render(){
        return (
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <h3>Age: {this.props.age}</h3>
                    <h3>Hair color: {this.props.hair}</h3>
                </div>
        )
    }
}
export default PersonCard;
