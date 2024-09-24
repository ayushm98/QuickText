import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"
import LoadingSpinner from "../../components/loading/LoadingSpinner"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center">Sign up</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center py-2">
              <span>Full name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full h-10 py-1 px-4 border-2 rounded-md"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center py-2">
              <span>Username</span>
            </label>
            <input type="text" placeholder="JDoe" className="w-full h-10 py-1 px-4 border-2 rounded-md"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center py-2">
              <span >Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full h-10 py-1 px-4 border-2 rounded-md"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center py-2">
              <span>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="w-full h-10 py-1 px-4 border-2 rounded-md"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-[#fec887] inline-block py-2">
            Already have an account?
          </Link>

          <div>
            <button
              className="bg-[#fec887] hover:bg-[#dfab6c] w-full rounded-md py-2 "
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Sign up"}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp