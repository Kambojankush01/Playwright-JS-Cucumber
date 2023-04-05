const { Given,When, Then, setDefaultTimeout } = require ("@cucumber/cucumber");
const{ loginPage } = require("../pageObjects/loginPage");
const{ productsPage } = require("../pageObjects/productsPage");
const{ cartPage } = require("../pageObjects/cartPage");
const{ customerDetailsPage } = require("../pageObjects/customerDetailsPage");
const{ overviewPage } = require("../pageObjects/overviewPage");
const{ completePage } = require("../pageObjects/completePage");
const { expect} = require ("@playwright/test");
const {chromium} =require("@playwright/test");


setDefaultTimeout(20*1000);
let login;
let product;
let page;
let cart;
let details;
let overview;
let complete;
let browser;
let context;

Given('User navigates to the application', async function () { 

  browser = await chromium.launch({headless: false}); 
  context = await browser.newContext();
  page = await context.newPage();      
  await page.goto("https://www.saucedemo.com/");

 

  login = new loginPage(page);
  product = new productsPage(page);
  cart = new cartPage(page);
  details = new customerDetailsPage(page);
  overview = new overviewPage(page);
  complete = new completePage(page);

  
});

 Given('User enter the username as {string}', async function (username) {
  await login.enterUsername(username);
 });


 Given('User enter the password as {string}', async function (password) {
  await login.enterPassword(password);
 });


When('User click on the login button', async function () {
  await login.clickOnLogin(); 
});


Then('Login should be success', async function () {
  
  const msg = await product.welcomeText();
  console.log("Login is Successful"+msg);
     
});

When('User add product to cart', async function () {
  await product.clickOnFirstItem();
  await page.waitForTimeout(500);           
});

 
Then('Cart badge should get updated', async function () {
  await product.badgeCount().badgetext;        
  expect(Number(badgetext)).toBeGreaterThan(0);
});


When('User click shopping cart link', async function () {
  await product.clickShoppingCartLink();
});
  
Then('User should redirect to Your cart page', async function () {
  await page.waitForTimeout(500);
  const pageDetail = await cart.welcomeText();
  console.log("User is on "+pageDetail);
  expect(pageDetail).toEqual('Your Cart');
});

  
Then('User click the Checkout Button', async function () {
  await cart.clickOnCheckout();
  await page.waitForTimeout(500);
          
});


Then('User enter First_name as {string}', async function (firstname) {  

  await details.enterFirstName(firstname);
  
});


Then('User enter Last_name as {string}', async function (lastname) {
  await details.enterLastName(lastname);
});

 
Then('User enter postal_code as {string}', async function (postalcode) {
   await details.enterPostalCode(postalcode);   
});


Then('User click continue button', async function () {
  await page.waitForTimeout(500);
  await details.clickOnContinueButton();     
});


Then('User is redirected to Payment and Shipping information page', async function () {
  await page.waitForTimeout(500);
  const text = await overview.overviewText();
  expect(text).toEqual('Checkout: Overview');
});

Then('User click Finish', async function () {
  await page.waitForTimeout(500);
  await overview.clickOnFinish();
});

Then('User check the message {string}', async function (msg) {
  const message = await complete.readTransactionCompleteText();
  expect(message).toEqual(msg);
});


Then('User click back home button to add another product', async function () {
  await page.waitForTimeout(500);
  await complete.clickBackHomeButton();
  await page.waitForTimeout(500);
  
      
});

Then('User add another product to cart', async function () {
  await product.clickOnSecondItem();
  await page.waitForTimeout(500); 
});

Then('Close the browser', async function () {
  await page.close();
  await context.close();
  await browser.close();
});

    
