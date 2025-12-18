import styles from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setMinRating,
  setSortOrder,
} from "../features/products/productSlice";

export default function FilterBar({ categories }) {
  const dispatch = useDispatch();
  const { category, minRating, sortOrder } = useSelector(
    (state) => state.products
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className={styles.control}>
            <label>Rating</label>
            <select
              value={minRating}
              onChange={(e) => dispatch(setMinRating(Number(e.target.value)))}
            >
              <option value={0}>All</option>
              <option value={4}>4★ & up</option>
              <option value={3}>3★ & up</option>
            </select>
          </div>

          <div className={styles.control}>
            <label>Sort</label>
            <select
              value={sortOrder}
              onChange={(e) => dispatch(setSortOrder(e.target.value))}
            >
              <option value="asc">Price ↑</option>
              <option value="desc">Price ↓</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
