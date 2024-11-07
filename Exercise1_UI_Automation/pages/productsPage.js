class ProductsPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = '.inventory_item:first-child';
      this.productName = '.inventory_item_name';
      this.productPrice = '.inventory_item_price';
      this.addToCartButton = '.btn_inventory';
      this.cartIcon = '.shopping_cart_link';
    }
  
    async getFirstProductDetails() {
      const name = await this.page.textContent(this.productName);
      const price = await this.page.textContent(this.productPrice);
      return { name, price };
    }
  
    async addToCart() {
      await this.page.click(this.addToCartButton);
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  }
  
  module.exports = { ProductsPage };
  
