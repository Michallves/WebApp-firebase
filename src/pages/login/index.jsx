import "./styles.css";
import React, { useState } from "react";
import firebase from "../../config/firebase";

export default function () {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function register() {}

  return (
    <div className="container">
      <h1>Register</h1>
      <input
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Digite seu email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        type="password"
        placeholder="Digite sua senha"
      />
      <button className="button">Cadastrar</button>
    </div>
  );
}
