 import Login from "../pageobject/loginpage";

describe('login', () => {

before('OrangeHrmlogin', () => {

cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

cy.fixture("example").then((data)=>{
   const In = new Login;
   In.Username(data.Username);
   In.Password(data.password);
   In.loginbtn()
   cy.wait(500)
}

)})


it('OrangeHrmmyinfo', () => {
      cy.fixture("example").then((data)=>{
         cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")

       const My = new Login;
       My.MyInfo();
       My.PersonalDetails(data.EmployeeFullName);
       My.Nickname(data.Nickname);
       My.MaritalStatus(data.MaritalStatus);
       My.DateofBirth(data.DateofBirth);
      }  
    
    )})






})