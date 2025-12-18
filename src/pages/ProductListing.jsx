import styles from "./ProductListing.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productSlice";
import { selectFilteredProducts } from "../features/products/productSelectors";
import { MOCK_PRODUCTS } from "../features/products/mockApi";
import FilterBar from "../components/FilterBar";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";

const PAGE_SIZE = 8;

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const page = useSelector((state) => state.products.page);

  useEffect(() => {
    dispatch(setProducts(MOCK_PRODUCTS));
  }, [dispatch]);

  const categories = ["All", ...new Set(MOCK_PRODUCTS.map((p) => p.category))];
  const totalPages = Math.ceil(products.length / PAGE_SIZE) || 1;
  const visible = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className={styles.page}>
      <FilterBar categories={categories} />
      <div className={styles.grid}>
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
