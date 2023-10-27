import MyInfo from "../pageobject/MyinfoPage";

describe('OrangeHrmmyinfo', () =>{

it('OrangeHrmmyinfo', () => {

   cy.login('Admin', 'Admin123');
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7"),
    cy.fixture("example").then ((data)=>{
      const My = new  MyInfo;
     My.Myinfo(data.Myinfo);
     My.EmployeeFullName(data.employeeFulName);
     My.MiddleName(data.midlename);
     My.LastName(data.lasname)
     My.EmployeeId(data.employeId);
     My.OtherId(data.OtherId);
     My.DriverLicenseNumber(data.driverLicenseNumbe);
     My.MaritalStatus(data.MaritalStatus);
     My.Nationality(data.Nationality);
     My.DateofBirth();
     My.MilitaryService(data.MilitaryServce);
     My.BloodType(data.BloodType);
     My.MaritalStatus()
   }
)})

}
)






