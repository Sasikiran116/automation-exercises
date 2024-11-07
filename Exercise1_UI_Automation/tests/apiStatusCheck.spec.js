const { test, expect, request } = require('@playwright/test');

test.describe('API Status Code Verification', () => {
  test('should return status code 200', async ({ request }) => {
    // Send a GET request to https://reqres.in/api/users/2
    const response = await request.get('https://reqres.in/api/users/2');

    // Validate that the status code is 200
    expect(response.status()).toBe(200);
  });
});

