import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/products/productSlice";

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.favorites);
  const isFav = favorites.includes(product.id);

  return (
    <div className={`${styles.card} ${isFav ? styles.favorite : ""}`}>
      <img
        alt={product.name}
        className={styles.productImage}
        src={product.image}
        loading="lazy"
      />
      <h3>{product.name}</h3>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.price}>₹{product.price}</p>
      <p className={styles.rating}>⭐ {product.rating}</p>
      <button
        className={`${styles.favoriteBtn} ${isFav ? styles.active : ""}`}
        onClick={() => dispatch(toggleFavorite(product.id))}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <span className={styles.heart}>♥</span>
      </button>
    </div>
  );
}
