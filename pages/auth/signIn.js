const SignIn = () => {
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const [username, password] = event.target.elements;

        const res = await fetch("/api/auth/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

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