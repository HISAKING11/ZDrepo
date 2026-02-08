import { useState } from "react";
import "./styles/Admin.css";
import AdminPanel from "./AdminPanel";
import apiBase from "../utils/apiBase";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [token, setToken] = useState("");

  // LOGIN
  const handleLogin = async () => {
    const res = await fetch(`${apiBase}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      alert("Admin logged in");
    } else {
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    setToken("");
    setEmail("");
    setPassword("");
    setTitle("");
    setImage(null);
  };

  // UPLOAD ARTWORK
  const handleUpload = async () => {
    if (!image) {
      alert("Select an image");
      return { ok: false };
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const res = await fetch(`${apiBase}/api/admin/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      setTitle("");
      setImage(null);
    }
    return { ok: res.ok, data };
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Admin Panel</h2>

        {!token ? (
          <div className="admin-form">
            <label className="admin-label">
              <span>Email</span>
              <input
                className="admin-input"
                placeholder="Admin Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label className="admin-label">
              <span>Password</span>
              <input
                className="admin-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <button className="admin-button primary" onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <AdminPanel
            title={title}
            setTitle={setTitle}
            setImage={setImage}
            handleUpload={handleUpload}
            handleLogout={handleLogout}
            token={token}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
