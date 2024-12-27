import { useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa'; // Importing the GitHub icon from react-icons

const App = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5001/api/github/${username}`);
      setData(response.data);
      setError('');
    } catch (err) {
      setError('Could not fetch data. Please check the username or try again later.');
      setData(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="bg-white w-[600px] md:w-[800px] lg:w-[1000px] rounded-lg shadow-md"
        style={{
          backgroundImage: 'url("path-to-your-paper-texture.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          border: 'none',
          borderRadius: '0px',
          fontFamily: 'Courier New, Courier, monospace',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.08)',
          padding: '20px',
        }}
      >
        {/* Using the GitHub icon from react-icons */}
        <div className="flex items-center justify-center border-b pb-2 mb-4">
          <FaGithub className="text-5xl mr-2" /> {/* Adjust size with Tailwind classes or inline styles */}
          <h1 className="text-lg font-bold tracking-wide">ORIGINAL</h1>
        </div>

        <div className="text-center mb-6">
          <p className="font-bold text-gray-700">GitHub Profile Receipt</p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={fetchData}
            className="bg-black text-white px-4 py-2 rounded w-full mt-2 hover:bg-gray-700 shadow-sm"
          >
            Generate Receipt
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {data && (
          <div>
            <div className="border-t pt-4 text-gray-700">
              <p>
                <span className="font-bold">Receipt ID:</span> <span className="font-bold">{Math.floor(Math.random() * 100000000)}</span>
              </p>
              <p>
                <span className="font-bold">Date:</span> <span className="font-bold">{new Date().toLocaleDateString()}</span>
              </p>
              <p>
                <span className="font-bold">Time:</span> <span className="font-bold">{new Date().toLocaleTimeString()}</span>
              </p>
              <p>
                <span className="font-bold">Name:</span> <span className="font-bold">{data.profile.name || 'N/A'}</span>
              </p>
              <p>
                <span className="font-bold">Username:</span> <span className="font-bold">{data.profile.login}</span>
              </p>
              <p>
                <span className="font-bold">Public Repos:</span> <span className="font-bold">{data.profile.public_repos}</span>
              </p>
              <p>
                <span className="font-bold">Followers:</span> <span className="font-bold">{data.profile.followers}</span>
              </p>
              <p>
                <span className="font-bold">Following:</span> <span className="font-bold">{data.profile.following}</span>
              </p>
              <p>
                <span className="font-bold">Top Language:</span> <span className="font-bold">{data.topLanguage || 'N/A'}</span>
              </p>
            </div>

            <div className="border-t pt-4 mt-4 text-gray-700">
              <h2 className="text-center font-bold underline">Public Repositories</h2>
              <ul className="list-disc pl-6">
                {data.repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4 mt-4 text-center">
              <p className="italic">Happy Coding!</p>
              <p className="italic">Open Source is Power</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;