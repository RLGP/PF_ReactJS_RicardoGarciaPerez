const productillos = [
    {
      id:  1 ,
      name: "Torreta",
      description: "Presentando la versión para el consumidor de nuestro productos más popular de grado militar: LA TORRETA. Contiene la misma tecnología que hemos estado usando en nuestros robots por decadas, haciendolas perfectas para cualquier aplicación que le pueda encontrar.",
      price: 1000,
      image: "../sentry.png",
      category: "electronic",
      alt: "Torreta de aperture science",
    },
    {
      id: 2,
      name: "Dispositivo de Portales",
      description: "Quien no querría poseer un dispositivo prototipo de generación de agujeros negros internos que puede o no causar la destrucción del universo conocido? Sea el orgulloso dueño de un dispositivo de portales hoy.",
      price: 5000,
      image: "../portal_device.png",
      category: "electronic",
      alt: "dispositivo de portales",
    },
    {
      id: 3,
      name: "Papa",
      description: "Qué sucede si colocas el núcleo de inteligencia artificial de una supercomputadora en una papa? Honestamente, no sabemos, pero podrías averiguarlo con solamente comprarla. (Aperture science no se hace responsable por ningun tipo de daño que pueda llegar a causar la Papa)",
      price: 200,
      image: "../Potato.png",
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