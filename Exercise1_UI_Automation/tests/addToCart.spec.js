const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { writeProductToFile } = require('../utils/fileUtil');

test.describe('Add to Cart Functionality', () => {
  let loginPage, productsPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
  });

  test('should add a product to the cart and verify it', async ({ page }) => {
    // Login
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);

    // Get first product details
    const product = await productsPage.getFirstProductDetails();
    await writeProductToFile(product);

    // Add product to cart and verify
    await productsPage.addToCart();
    await productsPage.goToCart();
    const isProductInCart = await cartPage.verifyProductInCart(product.name);
    expect(isProductInCart).toBe(true);

    // Logout
    await cartPage.logout();
    await expect(page).toHaveURL(/saucedemo/);
  });

  test.afterEach(async ({ page }) => {
    if (page.context().browser()) await page.close();
  });
});

