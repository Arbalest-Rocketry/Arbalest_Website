import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./GalleryLightbox.css";

// Any <img> inside one of these gallery grids opens full size when clicked.
const GALLERY_SELECTOR = ".goose2-gallery, .gallery, .goose4-gallery, .rp-gallery";

export default function GalleryLightbox() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(null);
  const { pathname } = useLocation();

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length]
  );

  // Open on click of any gallery photo
  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest("img");
      const gallery = img?.closest(GALLERY_SELECTOR);
      if (!gallery) return;
      const imgs = [...gallery.querySelectorAll("img")];
      setImages(imgs.map((el) => ({ src: el.currentSrc || el.src, alt: el.alt })));
      setIndex(imgs.indexOf(img));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Keyboard: Esc closes, arrows move
  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  // Close when navigating away
  useEffect(close, [pathname, close]);

  if (index === null || !images[index]) return null;
  const current = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
      <img
        className="lightbox-img"
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
      />

      <button className="lightbox-btn lightbox-close" onClick={close} aria-label="Close">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-btn lightbox-prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="lightbox-btn lightbox-next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="lightbox-count">
            {index + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}
