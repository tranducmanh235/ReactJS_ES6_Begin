import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
    const addTodo = props.addTodoFunc;

    const [title, setTitle] = useState("");

    const addTodoFormStyle = {
        display: "flex",
    };

    const addTodoInputStyle = {
        flex: "10",
        padding: "5px",
        outline: "none",
    };

    const addTodoSubmitStyle = {
        flex: "1",
        display: "inline-block",
        border: "none",
        background: "#555",
        color: "#fff",
        padding: "7px 20px",
        cursor: "pointer",
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const addSingleTodo = (event) => {
        event.preventDefault();

        if (title !== "") {
            addTodo(title);
            setTitle("");
        }
    };

    return (
        <Fragment>
            <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter your work..."
                    style={addTodoInputStyle}
                    value={title}
                    onChange={handleChangeTitle}
                />
                <input type="submit" value="Add" style={addTodoSubmitStyle} />
            </form>
        </Fragment>
    );
};

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
