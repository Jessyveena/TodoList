import React from "react";
import Button from "./Button.js";


function User(props) {
    return (
        <div className="todo-item">
            <h3>{props.user.name}</h3>
            <div style={{"marginBottom":"20px"}}>{props.user.age}</div>
            <Button color="green" onClick={() => props.handleDelete(props.user.id)}>
                Done
            </Button>
        </div>
    );
}

export default User;