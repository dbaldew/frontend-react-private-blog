function Login({loggedIn, onClick}) {


    return (
        <div className="button-container">
            <button type="button"
                    value={loggedIn}
                    onClick={onClick}

            >login
            </button>
        </div>

    );
}

export default Login;