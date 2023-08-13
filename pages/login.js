import React, { useState } from "react";
import './style.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Giriş bilgilerini kontrol et.
    if (username === "admin" && password === "password") {
      // Giriş başarılı.
      window.location.href = "/";
    } else {
      // Giriş başarısız.
      alert("Kullanıcı adı veya şifre yanlış.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Giriş" />
    </form>
  );
};

export default Login;