import { useEffect, useState } from "react";
import "./styles/AdminPanel.css";
import apiBase from "../utils/apiBase";

const AdminPanel = ({ title, setTitle, setImage, handleUpload, handleLogout, token }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchGallery = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiBase}/api/gallery`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to load gallery");
      setItems(data);
    } catch (err) {
      setError(err.message || "Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchGallery();
    }
  }, [token]);

  const handleUploadAndRefresh = async () => {
    const result = await handleUpload();
    if (result?.ok) {
      fetchGallery();
    }
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditTitle(item.title || "");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
  };

  const saveEdit = async (id) => {
    if (!editTitle.trim()) return;

    const res = await fetch(`${apiBase}/api/admin/gallery/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title: editTitle })
      }
    );

    if (res.ok) {
      cancelEdit();
      fetchGallery();
    }
  };

  const deleteItem = async (id) => {
    const res = await fetch(`${apiBase}/api/admin/gallery/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (res.ok) {
      fetchGallery();
    }
  };

  const filteredItems = items.filter(item =>
    (item.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-form">
      <div className="admin-row">
        <strong className="admin-section-title">Upload Artwork</strong>
        <button className="admin-button" onClick={handleLogout}>Logout</button>
      </div>
      <label className="admin-label">
        <span>Title</span>
        <input
          className="admin-input"
          placeholder="Artwork Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label className="admin-label">
        <span>Image</span>
        <input
          className="admin-file"
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
      </label>
      <button className="admin-button primary" onClick={handleUploadAndRefresh}>Upload Artwork</button>

      <div className="admin-divider" />

      <div className="admin-row">
        <strong className="admin-section-title">Manage Artwork</strong>
        <button className="admin-button" onClick={fetchGallery}>Refresh</button>
      </div>

      <label className="admin-label admin-search">
        <span>Search</span>
        <input
          className="admin-input"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </label>

      {loading && <p className="admin-hint">Loading artwork...</p>}
      {error && <p className="admin-hint error">{error}</p>}

      {!loading && !error && (
        <div className="admin-list">
          {filteredItems.length === 0 ? (
            <p className="admin-hint">No artwork found yet.</p>
          ) : (
            filteredItems.map(item => (
              <div className="admin-item" key={item.id}>
                <img src={item.imgurl} alt={item.title} />
                <div className="admin-item-content">
                  {editId === item.id ? (
                    <input
                      className="admin-input"
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                    />
                  ) : (
                    <h4>{item.title}</h4>
                  )}
                  <div className="admin-item-actions">
                    {editId === item.id ? (
                      <>
                        <button className="admin-button primary" onClick={() => saveEdit(item.id)}>Save</button>
                        <button className="admin-button" onClick={cancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="admin-button" onClick={() => startEdit(item)}>Edit</button>
                        <button className="admin-button danger" onClick={() => deleteItem(item.id)}>Delete</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
