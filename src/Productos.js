const products = [
    {
      id:  1 ,
      name: "ejemplo1",
      description: "non",
      price: 12.99,
      image: "",
      Category: "electronic",
    },
    {
      idProduct: 2,
      name: "ejemplo2",
      description: "sis",
      price: 8.99,
      image: "",
      Category: "others",
    }
 
  ];
  
  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 3000);
    })
  export default getProducts;