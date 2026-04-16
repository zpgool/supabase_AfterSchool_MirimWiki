import "./index.css";
import Mirim from "./assets/Mirim.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "./api/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await signIn(email, password);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("로그인 성공!");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="signup-back-top" />
      <div className="signup-back-bottom" />

      <div className="signup-page">
        <div className="signup-main">
          <div className="signup-logo">
            <img src={Mirim} alt="미림마이스터고 로고" />
            <div className="signup-logo-text">
              <span className="signup-head-title">MirimWiki</span>
              <span className="signup-logo-subtitle">
                NEWMEDIA CONTENTS <span>MIRIM MEISTER SCHOOL</span>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-card">
              <div className="signup-field">
                <label htmlFor="email-input">이메일</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력하세요"
                  autoComplete="off"
                />
              </div>

              <div className="signup-field">
                <label htmlFor="password-input">비밀번호</label>
                <input
                  id="password-input"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  autoComplete="off"
                />
              </div>

              <button type="submit" className="signup-submit">
                로그인
              </button>

              <nav className="signup-nav">
                <span>아직 회원이 아니신가요?</span>
                <span className="signup-nav-separator"> | </span>
                <a  href="/SignUp.jsx" className="signup-nav-link">
                  회원가입
                </a>
              </nav>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
