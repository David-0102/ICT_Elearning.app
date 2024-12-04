import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/api/login' : '/api/register';
        const payload = isLogin ? { email, password } : { name, email, password };
        await axios.post(url, payload);
        // Handle response and redirect accordingly
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
            </button>
        </form>
    );
};

export default Auth;
