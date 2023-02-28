import React, { useState } from "react";
import { StyledButton, StyledInput } from "../styled/styledcomponents";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, passwd)
      .then((userCredential) => {
        navigate('/')
        // const user = userCredential.user;
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, passwd)
      .then((userCredential) => {
        navigate('/')
        // const user = userCredential.user;
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="signout">
      <h3>Inicio sesión</h3>
      <form className="formSignIn">
        <label>Dirección de correo electrónico</label>
        <StyledInput
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="email"
        />
         <label>Contraseña</label>
        <StyledInput
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
          type="password"
          placeholder="Contraseña"
          className="passwd"
        />
        <StyledButton onClick={signIn} type="submit" wide="medium" radius>
          Login
        </StyledButton>
        <h6>
          ¿Eres usuario nuevo?{""}
          <span onClick={register} className="signupLink">
            {" "}
            Regístrate ahora.{""}
          </span>
        </h6>
      </form>
    </div>
  );
};

export default SignUp;
