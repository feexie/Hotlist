import './App.css';
import './index.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <div className="text-xl font-bold">
          <Link to="/">My App</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/register" className="bg-blue-500 px-3 py-2 rounded-md font-bold">
            Register
          </Link>
          <Link to="/login" className="bg-green-500 px-3 py-2 rounded-md font-bold">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default App;
