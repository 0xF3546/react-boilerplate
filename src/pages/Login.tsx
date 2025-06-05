import { useState } from "react";
import { useAuthProvider } from "../hooks/useAuthProvider";
import { handleChange } from "../utils/utils";

export default function LoginPage() {
    const [form, setForm] = useState({ user: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuthProvider();

    let handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            e.preventDefault();
            setLoading(true);
            await login(form);
        } catch (err: any) {
            console.error(err);
            if (err.response) {
                setErrorMessage(err.response.data.error);
            } else {
                setErrorMessage(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
{errorMessage && (
            <div className="error-message">
                {errorMessage}
            </div>
        )}
        <form onSubmit={handleLogin}>
            <input
                value={form.user}
                name="user"
                onChange={(e) => handleChange(e, setForm)}
            />
            <input
                value={form.password}
                name="password"
                onChange={(e) => handleChange(e, setForm)}
            />
            <button
                type="submit"
                disabled={loading}
            >
                Submit
            </button>
        </form>
</>
    )
}