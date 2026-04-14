import "./index.css";
import Mirim from "./assets/Mirim.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signUp } from "./api/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await signUp(email, password, name, birth);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("회원가입 성공! 이메일을 확인하세요.");
    setEmail("");
    setPassword("");
    setName("");
    setBirth("");
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

              <div className="signup-field">
                <label htmlFor="name-input">이름</label>
                <input
                  id="name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div className="signup-field">
                <label htmlFor="birth-input">생년월일</label>
                <input
                  id="birth-input"
                  type="text"
                  required
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  placeholder="생년월일 8자리"
                />
              </div>

              <button type="submit" className="signup-submit">
                회원가입
              </button>

              <nav className="signup-nav">
                <a href="/login">로그인</a>
                <span> | </span>
                <a hre  f="/login" className="signup-nav-link">
                  이미 회원이신가요?
                </a>
              </nav>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
