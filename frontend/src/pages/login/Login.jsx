import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center py-2">
              <span >Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full h-10 py-1 px-4 border-2  rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center py-2">
              <span >Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full h-10 py-1 px-4 border-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/signup" className="text-sm hover:underline hover:text-[#fec887] inline-block py-4">
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="bg-[#fec887] hover:bg-[#dfab6c] w-full rounded-md py-2 "
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Login"}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login