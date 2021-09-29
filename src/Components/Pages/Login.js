import React from "react";


function Login({onClick}) {

    return (
        <div className="button-container">
            <button type="button"
                    onClick={onClick}
            >Login
            </button>
        </div>

    );
}

export default Login;