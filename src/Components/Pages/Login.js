import React from "react";


function Login({logIn}) {

    return (
        <div className="button-container">
            <button type="button"
                    onClick={logIn}
            >Login
            </button>
        </div>

    );
}

export default Login;