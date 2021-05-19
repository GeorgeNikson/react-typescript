import React, { useState, useRef } from "react"
import ContainerStyle from "./Container.module.scss";

interface ToDoFormProps {
    onAdd(title: string): void
}

const Container: React.FC<ToDoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    const ref = useRef<HTMLInputElement>(null)

    // function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    //     setTitle(event.target.value)
    // }

    function keyPressHandler(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className={ContainerStyle.container}>
            <div className={ContainerStyle.input_field}>
                <label htmlFor="title" className={ContainerStyle.active}>
                    Enter a task to be done
                </label>
                <input
                    onKeyPress={keyPressHandler}
                    ref={ref}
                    // onChange={changeHandler} 
                    // value={title}
                    type="text" id="title"
                    placeholder="enter a task to be done" />
            </div>
        </div>
    );
}

export default Container;