import React from "react"
import ContainerStyle from "./Container.module.scss";

function Container() {
    return(
        <div className={ContainerStyle.container}>
            <div className={ContainerStyle.input_field}>
            <input type="text" id="title" />
            <label htmlFor="title" className={ContainerStyle.active}>
                Enter a task to be done
            </label>
        </div>
        </div>
    );
}

export default Container;