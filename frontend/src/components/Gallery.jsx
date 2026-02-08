import { useEffect, useState } from "react";
import "./styles/Gallery.css";
import apiBase from "../utils/apiBase";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${apiBase}/api/gallery`)

        if (!res.ok) {
          throw new Error("Failed to fetch gallery");
        }

        const data = await res.json();
        setGallery(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      {loading && <p>Loading gallery...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="gallery-grid">
          {gallery.map(item => (
            <button
              key={item.id ?? item._id ?? item.imgurl}
              type="button"
              className="gallery-card"
              onClick={() => setActiveImage(item)}
            >
              <img src={item.imgurl} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
            </button>
          ))}
        </div>
      )}
      {activeImage && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title || "Gallery image"}
          onClick={() => setActiveImage(null)}
        >
          <div className="gallery-modal-content" onClick={event => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              aria-label="Close image"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
            <img src={activeImage.imgurl} alt={activeImage.title} />
            {activeImage.title && <p>{activeImage.title}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
