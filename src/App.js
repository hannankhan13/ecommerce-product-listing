import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductListingPage from "./pages/ProductListing";

export default function App() {
  return (
    <Provider store={store}>
      <ProductListingPage />
    </Provider>
  );
}
