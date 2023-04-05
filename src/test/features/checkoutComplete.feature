Feature: Add the  customer details test
    Background:
        Given User navigates to the application
        And User enter the username as "standard_user"
        And User enter the password as "secret_sauce"
        And User click on the login button
        
    Scenario Outline: Add Product details        
        And User add product to cart
        When User click shopping cart link
        Then User should redirect to Your cart page
        And User click the Checkout Button
        Then User enter First_name as "<firstname>"
        And User enter Last_name as "<lastname>"
        And User enter postal_code as "<postalcode>"
        And User click continue button
        Then User is redirected to Payment and Shipping information page
        And User click Finish
        And User check the message "Thank you for your order!"
        And User click back home button to add another product
        And User add another product to cart
        When User click shopping cart link
        Then User should redirect to Your cart page
        And User click the Checkout Button
        Then User enter First_name as "<firstname>"
        And User enter Last_name as "<lastname>"
        And User enter postal_code as "<postalcode>"
        And User click continue button
        Then User is redirected to Payment and Shipping information page
        And User click Finish
        And User check the message "Thank you for your order!"
        Then Close the browser

        Examples: 
        | firstname | lastname | postalcode |
        | virat | kohli | MSMSMSMS |
        | sachin | tendulkar | M43MDS | 
    
       

       

        
