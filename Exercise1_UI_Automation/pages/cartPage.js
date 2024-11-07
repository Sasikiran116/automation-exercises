class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItemName = '.inventory_item_name';
    }
  
    async verifyProductInCart(expectedName) {
      const actualName = await this.page.textContent(this.cartItemName);
      return actualName === expectedName;
    }
  
    async logout() {
      await this.page.click('#react-burger-menu-btn');
      await this.page.click('#logout_sidebar_link');
    }
  }
  
  module.exports = { CartPage };
  
