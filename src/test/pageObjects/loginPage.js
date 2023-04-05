exports.loginPage = class loginPage{
    constructor(page){
        this.page=page;
        this.username_textbox= page.locator("//input[@id='user-name']");
        this.password_textbox= page.locator('[data-test="password"]');
        this.login_button= page.locator('[data-test="login-button"]');
        }

        async enterUsername(username){
            await this.username_textbox.fill(username);
        }
        async enterPassword(password){
            await this.password_textbox.fill(password);
        }
        async clickOnLogin(){
            await this.login_button.click();
        }
        
    }
    