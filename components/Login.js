import axios from 'axios';
import styles from '../styles/Login.module.css';
import { useState } from 'react';

function Login() {
  // const [isCodeSelected, setIsCodeSelected] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [code, setCode] = useState('');

  // const handleRadioChange = () => {
  //   setIsCodeSelected(!isCodeSelected);
  // };

  function login() {
    try {
      axios
        .post(`${process.env.BASE_URL}/user/login`, {
          username,
          password,
        })
        .then(async function (response) {
          const { data } = response;
          const { user } = data;
          localStorage.setItem('username', user.username);
          localStorage.setItem('type', user.type);
          localStorage.setItem('id', user._id);
          // console.log("aaadaf",user)
  
          window.location.href = '/explore';
        })
        .catch(function (error) {
          console.log("Error during login:", error);
        });
    } catch (error) {
      console.log("Error caught:", error);
    }
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.heading}>
          <h1>Login</h1>
        </div>
        <div className={styles.input}>
          <div className={styles.username}>Username</div>
          <div className={styles.text}>
            <input
              id="username"
              type="text"
              placeholder="Type your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.password}>Password</div>
          <div className={styles.text}>
            <input
              id="password"
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* <div className={styles.codeOption}>
          <input
            className={styles.radioButton}
            type="radio"
            id="content"
            name="option"
            checked={isCodeSelected}
            onChange={handleRadioChange}
          />
          <label className={styles.code} htmlFor="code">
            Code
          </label>
        </div> */}

        {/* {isCodeSelected && (
          <div className={styles.text}>
            <input
              id="code"
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        )} */}

        <div className={styles.login_button}>
          <button onClick={login} id="signup-button" type="button">
            LOG IN
          </button>
        </div>
        <div className={styles.link}>
          Don't have an account?{' '}
          <a className={styles.login_link} href="signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;


