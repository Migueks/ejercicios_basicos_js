const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function camisetaIncludes(products) {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.includes("Camiseta")) {
      console.log(product);
    }
  }
}

camisetaIncludes(products);
