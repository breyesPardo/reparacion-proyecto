import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reparacion-backend.onrender.com/api/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Login exitoso');
    } catch (err) {
      alert('Error de login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={login} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <input className="mb-2 w-full border p-2" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="mb-2 w-full border p-2" placeholder="Contraseña"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Entrar</button>
      </form>
    </div>
  );
}
