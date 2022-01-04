const SignUp = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const [username, email, password] = event.target.elements;

        event.target.reset();
    };

    return (
        <form onSubmit={ onSubmitHandler }>
            <label>
                Username
                <input
                    type={ "text" }
                    minLength={ 3 }
                    maxLength={ 25 }
                    required={ true }
                />
            </label>
            <label>
                Email
                <input
                    type={ "email" }
                    minLength={ 4 }
                    maxLength={ 35 }
                    required={ true }
                />
            </label>
            <label>
                Password
                <input
                    type={ "password" }
                    minLength={ 7 }
                    maxLength={ 35 }
                    required={ true }
                />
            </label>
            <button>Sign Up</button>
        </form>
    );
};

export { SignUp as default };