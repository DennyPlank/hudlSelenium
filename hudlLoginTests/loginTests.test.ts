import { Hudl } from "../hudlModel";
const hudl = new Hudl()

describe(('Hudl login tests'), ()=>{
    
    hudl.hudlSetupAndTeardown()

    /* NOTICE: These variables must be changed to valid credentials in order to run passing tests! */
    let validEmail = "Change Me"
    let validPassword = "Change Me"
  
    test('A valid user can log in with valid credentials ', async ()=>{
        await hudl.loginAttempt(validEmail, validPassword)
        
        // Assert
        await hudl.assertLoggedIn()
    });

    test('A user cannot log in with invalid credentials', async ()=>{
        await hudl.loginAttempt("Invalid Email Here", "Invalid Password ")

        // Assert
        await hudl.assertLoginFailed()
    })

    test('A user can log out after loging in', async ()=>{
        await hudl.logoutAttempt(validEmail, validPassword)
        
        // Assert
        await hudl.assertLoggedOut()
    })
});