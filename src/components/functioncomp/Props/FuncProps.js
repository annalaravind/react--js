/* import React from "react";
                                        //using string
const FuncProps=(props)=>{
    return <h1>I'm {props.name} and age is {props.age}</h1>
}; 

export default FuncProps;  */



import React from "react";

const FuncProps=(props)=>{
    console.log(props.name);
    console.log(props.age);
    console.log(props.array);
    console.log(props.object);
    console.log(props.Boolean);
    return <h1>Made a function props and added five properties string, number, array, object and boolean in the component.</h1>
}


export default FuncProps;