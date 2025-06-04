import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";
import { retryPromise } from "./utils/retryPromise";

retryPromise(fetchProductCatalog, 3, 1000)
  .then((products) => {
    console.log("Product Catalog:", products);
    return Promise.all(
      products.map((product) =>
        retryPromise(() => fetchProductReviews(product.id), 3, 1000)
          .then((reviews) => {
            console.log(`Reviews for ${product.name}:`, reviews);
          })
          .catch((err) => console.error(err.message))
      )
    );
  })
  .then(() => {
    return retryPromise(fetchSalesReport, 3, 1000)
      .then((report) => {
        console.log("Sales Report:", report);
      })
      .catch((err) => console.error(err.message));
  })
  .catch((err) => console.error("Initial API error:", err.message))
  .finally(() => console.log("All API calls attempted."));