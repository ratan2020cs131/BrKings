export function fetchAllProducts() {
    return new Promise(async (resolve) => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      resolve({ data });
    });
  }

export function fetchProductById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await response.json();
      resolve({ data });
    });
  }