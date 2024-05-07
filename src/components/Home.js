import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión en el backend
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to Home</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
