import Login from "../PageObject/LoginPage"

describe('login', () => {

it('OrangeHrmlogin', () => {

cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

cy.fixture("example").then((data)=>{
   const In = new Login;
   In.Username(data.Username);
   In.Password(data.password);
   In.loginbtn();
   In.LoginAssertion();
}

)})

})