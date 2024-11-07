const fs = require('fs').promises;

async function writeProductToFile(product) {
  await fs.writeFile('productDetails.txt', `Product Name: ${product.name}\nPrice: ${product.price}`);
}

module.exports = { writeProductToFile };

