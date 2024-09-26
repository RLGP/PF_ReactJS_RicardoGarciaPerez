const productillos = [
    {
      id:  1 ,
      name: "ejemplo1",
      description: "non",
      price: 1000,
      image: "../public/sentry.png",
      category: "electronic",
      alt: "Torreta de aperture science",
    },
    {
      id: 2,
      name: "ejemplo2",
      description: "sis",
      price: 5000,
      image: "../public/portal_device.png",
      category: "electronic",
      alt: "dispositivo de portales",
    },
    {
      id: 3,
      name: "ejemplo3",
      description: "nell",
      price: 200,
      image: "../public/Potato.png",
      category: "others",
      alt: "papa",
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