exports.customerDetailsPage = class customerDetailsPage{
    constructor(page){
        this.page=page;
        this.firstName =  page.locator("//input[@id='first-name']"); 
        this.lastName =  page.locator("//input[@id='last-name']"); 
        this.postalcode =  page.locator("//input[@id='postal-code']");    
        this.continueButton= page.locator("//input[@id='continue']");
        }
        
        async enterFirstName(first_name){
            await this.firstName.fill(first_name);
        }
        async enterLastName(Last_name){
            await this.lastName.fill(Last_name);
        }
        async enterPostalCode(postal_code){
            await this.postalcode.fill(postal_code);
        }
     
        async clickOnContinueButton(){
            await this.continueButton.click();
        }
     
    }
    