import React from "react";

const JsComponent = (props) => <h1>
    Hi, {props.name}! I'm a js react component.
</h1>;

class JsClassComponent extends React.Component {
    render(){
        return <div>
            Hi, {this.props.name}! I'm a Js Class Component.
        </div>
    }
}

JsClassComponent.defaultProps = {
    name: "A default name"    
}

export {JsComponent, JsClassComponent};
