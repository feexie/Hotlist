import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission without API call
    if (email && password) {
      setMessage('Login successful!');
      setEmail("");
      setPassword("");
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 w-1/3 shadow-lg">
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
        
        <div>
          <label htmlFor="email" className="text-white mb-2 block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="text-white mb-2 block">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button type="submit" className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">
          Login
        </button>

        {message && (
          <div className="mt-4 text-center">
            <p className="text-white bg-black p-2 rounded">
              {message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
