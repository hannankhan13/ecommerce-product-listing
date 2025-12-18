import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/products/productSlice";

export function Pagination({ totalPages }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.products.page);

  if (totalPages <= 1) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={() => dispatch(setPage(page - 1))}
        >
          ← Prev
        </button>

        <span className={styles.pageInfo}>
          Page <strong>{page}</strong> of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => dispatch(setPage(page + 1))}
        >
          Next →
        </button>
      </div>
    </footer>
  );
}
