exports.completePage = class completePage{
    constructor(page){
        this.page=page;
        this.greetingText =  page.locator("//h2[text()='Thank you for your order!']"); 
        this.backHomeButton= page.locator("//button[@id='back-to-products']");

        }
        async readTransactionCompleteText(){
            this.greetingMsg = await this.greetingText.textContent();
            return this.greetingMsg;
        }
        async clickBackHomeButton(){
            await this.backHomeButton.click();
        }
     
    }
    