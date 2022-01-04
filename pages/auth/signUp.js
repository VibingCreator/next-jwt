import { useRouter } from "next/router";

const SignUp = () => {
    const router = useRouter();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const [username, email, password] = event.target.elements;

        const res = await fetch("/api/auth/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value
            })
        });

        if (res.ok) {
            await router.push("/");
        }
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