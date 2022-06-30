import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Todos from "./Todos";
import authService from "./auth.service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/todos"
          element={
            <RequireAuth>
              <Todos />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export function RequireAuth({ children }) {
  if (!authService().isLoggedIn()) {
    return <Navigate replace to="/login" />;
  }

  return <>{children}</>;
}

export default App;
