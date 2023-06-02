import React, { Component } from "react";

class ClassProps extends Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    console.log(this.props.name);
    console.log(this.props.age);
    console.log(this.props.array);
    console.log(this.props.object);
    console.log(this.props.boolean); // Corrected prop name

    return (
      <div>
        <h1>Made a Class props and added five properties string, number, array, object and Boolean in the component.</h1>
      </div>
    );
  }
}

export default ClassProps;
