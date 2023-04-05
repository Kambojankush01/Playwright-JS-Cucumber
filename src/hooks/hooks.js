const {Before, After, BeforeAll, AfterAll, Status} =require("@cucumber/cucumber");
const {chromium,page} =require("@playwright/test");
const {pageFixture} =require("./pageFixtures");

let browser;
let context;


BeforeAll(async function(){
    browser = await chromium.launch({headless: false}); 
    
    // pageFixture.page = page;
    
});

Before(async function(){
    context = await browser.newContext();
    page = await context.newPage();
    // context = await browser.newContext();
    // const page = await context.newPage();
    // pageFixture.page = page;
    

});

// AfterStep(async function({pickle,result}){
//     const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`,type:"png"});
//     await this.attach(img,"image/png");
// });

After(async function({pickle,result}){
    // console.log(result?.status);
    // //Screenshot
    // if(result?.status == Status.FAILED){
    // const img = await page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`,type:"png"});
    // // const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`,type:"png"});
    // await this.attach(img,"image/png");
    // }
    // // await pageFixture.page.close();
    await page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});