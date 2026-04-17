import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="flex justify-center items-start h-screen">
    <Routes>
      <Route path="/" element={<Navigate to="/SignIn" />} />  {/* 루트 접속 시 /SignIn으로 리다이렉트 */}
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default App