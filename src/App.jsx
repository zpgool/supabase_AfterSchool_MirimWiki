
function App() {
  return (
    <div className="flex justify-center items-start h-screen">
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />  {/* 루트 접속 시 /login으로 리다이렉트 */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default App