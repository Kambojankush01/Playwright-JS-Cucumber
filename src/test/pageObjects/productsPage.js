exports.productsPage = class productsPage{
    constructor(page){
        this.page=page;
        this.text =  page.locator("//span[text()='Products']"); 
        this.firstItem= page.locator("button#add-to-cart-sauce-labs-backpack");
        this.secondItem = page.locator("button#add-to-cart-sauce-labs-bike-light");
        this.badgeCount = page.locator("div#shopping_cart_container>a>span");
        this.shoppingCartLink = page.locator("#shopping_cart_container a");
        }
        async welcomeText(){
            welcomeText = await this.text.textContent();
            return this.welcomeText;
        }
        async clickOnFirstItem(){
            await this.page.waitForTimeout(2000);
            await this.firstItem.click();
        }
        async clickOnSecondItem(){
            await this.page.waitForTimeout(2000);
            await this.secondItem.click();
        }
        async badgeCount(){
            badgetext = await this.badgeCount.textContent();
        }
        async clickShoppingCartLink(){
            await this.shoppingCartLink.click();
        }
        
    }
    