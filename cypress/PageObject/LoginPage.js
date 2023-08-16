

class Login{
    
    username ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'
    password ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
    login ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button' 
    loginassertion='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6'
    
    
    Username(Username){
    cy.xpath(this.username).type(Username,{force:true})
    }
    Password(password){
    cy.xpath(this.password).type(password,{force:true})
    
    } 
    
    loginbtn(){
     cy.xpath(this.login).click({force:true}) 
    }
    
    LoginAssertion(){
       
        cy.xpath('/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('contains.text', 'Dashboard');
    }



    } export default Login