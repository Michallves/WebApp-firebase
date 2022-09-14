import React, { useState } from "react";
import "./styles.css";
import firebase from "../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function () {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  function register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getFirestore();
        setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="title">Register</span>
            <div className="wrap-input">
              <input
                className="input"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>
            <div className="wrap-input">
              <input
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu email"
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Digite sua senha"
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-bnt">
              <button className="bnt" onClick={() => register()}>
                Cadastrar
              </button>
            </div>

            <div className="notLogin">
              <span className="txt1">Já tem uma conta ? </span>
              <a href="#" className="txt2">
                Faça Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
