import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from "../../api/authApi";

function Login() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Reset loading state when component unmounts
        return () => setLoading(false);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginUser({ correo, clave });
            toast.success('Login successful!');
            navigate('/home');
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Invalid correo or clave';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="correo" placeholder="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                <input type="clave" placeholder="clave" value={clave} onChange={(e) => setClave(e.target.value)} required />
                <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
            </form>
            <Link to="/register">Don't have an account? Register here</Link>
        </div>
    );
}

export default Login;
