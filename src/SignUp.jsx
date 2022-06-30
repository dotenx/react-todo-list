import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "./auth.service";

function SignUp() {
  const navigate = useNavigate();

  // Add the SignUp form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService().register(form.fullname, form.email, form.password);
      alert("Successfully signed up");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Create an account</h3>
        <form onSubmit={handleSubmit}>
          <div class="mt-4">
            <div>
              <label class="block" for="fullname">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="fullname"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></input>
            </div>
          </div>
          <div class="mt-4">
            <div>
              <label class="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></input>
            </div>
            <div class="flex items-baseline justify-between">
              <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;