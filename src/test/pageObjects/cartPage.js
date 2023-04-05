exports.cartPage = class cartPage{
    constructor(page){
        this.page=page;
        this.yourCartTitle =  page.locator("//span[text()='Your Cart']"); 
        this.checkout= page.locator("//button[@id='checkout']");
        }
        async welcomeText(){
            this.yourCartText = await this.yourCartTitle.textContent();
            return this.yourCartText;
        }
        async clickOnCheckout(){
            await this.checkout.click();
        }
     
    }
    