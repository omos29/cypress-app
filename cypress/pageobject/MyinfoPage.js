
class MyInfo{
     
    username ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'
    password ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
    login ='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button' 
    loginassertion='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6'
    myinfo='/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span'
    employeefullname='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[3]/div[1]/div/div[2]/input'
    middlename='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div/div/div[2]/div[2]/div[2]/input'
    lastname='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input'
    employeeId='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input'
    otherid='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/input'
    driverlicensenumber='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input'
    nationality='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div/div[1]'
    maritalstatus='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input'
    dateofbirth='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input'
    militaryservce='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input'
    bloodtype='/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div/div/div[2]/div/div/div[1]'
    sexSel= '/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div'
    

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
        
        Myinfo(){
        cy.xpath(this.myinfo).click({force:true})
     }
    
        EmployeeFullName(employeeFulName){
        cy.xpath(this.employeefullname).type(employeeFulName,{force: true})
    }
       MiddleName(midlename){
        cy.xpath(this.middlename).type(midlename,{force: true})
    }
       LastName(lasname){
        cy.xpath(this.lastname).type(lasname,{force:true})
    }
    
        EmployeeId(employeId){
        cy.xpath(this.employeeId).type(employeId,{force:true})
    }
    
        OtherId(OtherId){
        cy.xpath(this.otherid).type(OtherId,{force:true})
    }
    
        DriverLicenseNumber(driverLicenseNumbe){
        cy.xpath(this.driverlicensenumber).type(driverLicenseNumbe,{force:true})
    }
    
        MaritalStatus(){
            cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div/div[1]').click({force: true} )
        cy.xpath(this.sexSel).each(($el, index, $list) => { 
        
        if($el.text() === 'Married'){

            cy.wrap($el).click()
        }
       })
    
    }
        Nationality(){ 
        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div')
        cy.xpath(this.sexSel).each(($el, index, $list) => { 
        
            if($el.text() === 'Armenia'){
    
                cy.wrap($el).click()
            }
           })
    
       }
      
       DateofBirth(){
      cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/i').click({force: true})
      cy.get(".oxd-date-input-calender")
      .each(($el,index,$list)=>{
        const DateofBirth = $el.text()
        if(DateofBirth == '18')
        {
            cy.wrap($el).click()
        }



      })

      
      }
      
      MilitaryService(militaryservce){
      cy.xpath(this.militaryService).type(militaryservce,{force:true})
    }
    
        BloodType(){
        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form').click
        cy.xpath(this.sexSel).each(($el, index, $list) => { 
        
            if($el.text() === 'A+'){
    
                cy.wrap($el).click()
            }
           })
    
    


        }

    } export default MyInfo
