import { useEffect, useState } from "react";
import "./SignupPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    try {
      e.preventDefault();
      const newUser = {
        username,
        email,
        password,
      };
      console.log(newUser);
      const res = await axios.post("http://localhost:3000/userSignUp", newUser);
      setMessage(res.data.msg);
    } catch (e) {
      setMessage(e.response.data.msg);
    }
  };

  const handleLoginSubmit = async (e) => {
  try {
    e.preventDefault();
    const newUser = {
      email: loginEmail,
      password: loginPassword,
    };
    const res = await axios.post("http://localhost:3000/userLogin", newUser);
    console.log(res.data);
    setLoginMessage(res.data.msg);
    navigate("/");
  } catch (e) {
    setLoginMessage(e.response.data.msg);
  }
};


  useEffect(() => {
    setUserName("");
    setEmail("");
    setPassword("");
    setLoginEmail("");
    setLoginPassword("");
  }, [message, loginMessage]);

  setTimeout(() => {
    setMessage("");
    setLoginMessage("");
  }, 10000);

  return (
    <div>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignupSubmit}>
            <label className="label" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="User name"
              required=""
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" type="submit">
              Sign up
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>



        <div className="login">
          <form onSubmit={handleLoginSubmit}>
            <label className="label" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="btn">Login</button>
          </form>
          {loginMessage && <p>{loginMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
