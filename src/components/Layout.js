import React from "react";
import "./../App.css";

function Layout(props){
    const styles = {
        background: "#D3D3D3",
        height: "80px",
        borderRadius: '5px',
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
    }
    return (
        <div style={{"width": "80%", "margin":"auto"}}>
            <div style={styles}>
                <h3>My Todo List</h3>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;