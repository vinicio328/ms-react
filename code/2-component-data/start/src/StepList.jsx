import ReactDOM  from "react-dom";
import React from "react";

function StepList(props)
{
    const stepListItems = props.steps.map((step, index) => {
        return (
            <li key={step.step}>{ step.description }</li>
        )
    });

    return (
        <ol>
            { stepListItems }
        </ol>
    );
}

export default StepList;