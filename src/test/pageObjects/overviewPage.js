exports.overviewPage = class overviewPage{
    constructor(page){
        this.page=page;
        this.overviewTitle =  page.locator("//span[text()='Checkout: Overview']"); 
        this.finish= page.locator("//button[@id='finish']");
        }
        async overviewText(){
            this.Text = await this.overviewTitle.textContent();
            return this.Text;
        }
        async clickOnFinish(){
            await this.finish.click();
        }
     
    }
    