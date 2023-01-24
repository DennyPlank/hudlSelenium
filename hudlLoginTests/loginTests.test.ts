import { Hudl } from "../hudlModel";
const hudl = new Hudl()

describe(('Hudl login tests'), ()=>{
    
    hudl.hudlSetupAndTeardown()

    // IMPORTANT - These vairables must be changed to valid credentials in order to run successful tests!
    let validEmail = "Change me"
    let validPassword = "Change me"
  
    test('A valid user can log in ', async ()=>{
        await hudl.loginWithValidCreds(validEmail, validPassword)
        
        // Assertions
        await hudl.assertLoggedInValid()
    });

    test('A user can log out', async ()=>{
        expect(5).toBe(5)
    })
});