import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from "../../api/authApi";

function Register() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ nombre, apellido, correo, clave });
            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="First Name" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Last Name" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input type="correo" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <input type="password" placeholder="Password" value={clave} onChange={(e) => setClave(e.target.value)} />
                <button type="submit">Register</button>
            </form>
            <Link to="/login">Already have an account? Login here</Link>
        </div>
    );
}

export default Register;
