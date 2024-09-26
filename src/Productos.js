const productillos = [
    {
      id:  1 ,
      name: "ejemplo1",
      description: "non",
      price: 12.99,
      image: "./assets/sentry.png",
      category: "electronic",
      alt: "ejemplo1",
    },
    {
      id: 2,
      name: "ejemplo2",
      description: "sis",
      price: 8.99,
      image: "../assets/sentry.png",
      category: "others",
      alt: "ejemplo2",
    }
 
  ];
  
// getProduct
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const product = productillos.find((p) => p.id === parseInt(id));
          if (product) {
              resolve(product);

          } else {

              reject("No existe ningun producto con esa identidicación");
          }
      }, 0);
  });
};

export const getProducts = (category) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          const productsFiltered = category
              ? productillos.filter((product) => product.category === category)
              : productillos;

          resolve(productsFiltered);
      },500);
  });
};