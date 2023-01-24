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
        // Reset
        await hudl.resetCookies()
    });

    test('A user cannot log in with invalid credentials', async ()=>{
        await hudl.loginAttempt("Invalid Email", "Invalid Password ")

        // Assert
        await hudl.assertLoginFailed()
        // Reset
        await hudl.resetCookies()
    })

    test('A user can log out after loging in', async ()=>{
        await hudl.logoutAttempt(validEmail, validPassword)
        
        // Assert
        await hudl.assertLoggedOut()
        // Reset
        await hudl.resetCookies()
    })

    test('A logged in user will stay logged in if the page is reloaded', async ()=>{
        await hudl.loginAttempt(validEmail, validPassword)
        // This reloads the page and doesn't clear the cache
        await hudl.navigate()
        await hudl.assertLoggedIn()
    })
});