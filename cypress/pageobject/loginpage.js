

class Login{
    
    username ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'
    password ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
    login ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button' 
    loginassertion='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6'
    Myinfo1='/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a'
    Personaldetails='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input'
    middleName = "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input"
    LastName="/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input"
    Nickname1 ='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[2]/div/div/div[2]/input'
    EmployeeIds='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input'
    OtherId1='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/input'
    DriverLicenseNumber1='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input'
    MaritalStatus='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input'
    DateofBirth='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input'
    MilitaryService='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input'
    Smoker='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[2]/div/div[2]/div/label'
    aSAWDSFGH='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]'
    BloodType='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div/div/div[2]/div/div/div[1]'
    

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


     MyInfo(){
        cy.xpath(this.Myinfo1).click({force:true})
     }
    
    
        PersonalDetails(EmployeeFullName){
        cy.xpath(this.Personaldetails).type(EmployeeFullName,{force:true})
    }

    MiddleName(){
        cy.xpath(this.middleName).type(data.Middlename, {force: true})
    }

    LastName(){
        cy.xpath(this.LastName).type(data.LastName, {force: true})
    }
    

        Nickname(Nickname){
        cy.xpath(this.Nickname1).type(Nickname,{force:true})
    }

        EmployeeId(EmployeeId){
        cy.xpath(this.EmployeeIds).type(EmployeeId,{force:true})
    }

        OtherId(OtherId){
        cy.xpath(this.OtherId1).type(OtherId,{force:true})
    }

        DriverLicenseNumber(DriverLicenseNumber){
        cy.xpath(this.DriverLicenseNumber1).type(DriverLicenseNumber,{force:true})
    }

        MaritalStatus(){
        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div')
       .click().select(1).invoke("show").should("eq", "Married")

    }
    // Nationalityassertion
    //  cy.xpath('/html/body/div/div[1]/div[1]')
    // .should('select'Nationalityassertion= Armenia)

    // cy.xpath('/html/body/div/div[1]').click(){
    // cy.xpath('//*[@id="app"]')
    //   .each((sel,index,slist)=>{
    //     var date = sel.text
    //   })   
    // }

    // MilitaryService(MilitaryService){
    //     cy.xpath(this.).type(MilitaryService,{force:true})
    // }

    // Smoker(Smoker){
    //     cy.xpath(this.).type(Smoker,{force:true})
    // }

    // Blood Type(Bloodtype){
    //     cy.xpath('/html/body/div/div[1]')
    //     .should('select',A+)
    // }

}
























 export default Login