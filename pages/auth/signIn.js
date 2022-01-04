const SignIn = () => {
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const [username, password] = event.target.elements;

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
                Password
                <input
                    type={ "password" }
                    minLength={ 7 }
                    maxLength={ 35 }
                    required={ true }
                />
            </label>
            <button>Sign In</button>
        </form>
    );
};

export { SignIn as default };