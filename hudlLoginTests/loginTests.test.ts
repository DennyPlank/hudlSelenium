import { Hudl } from "../hudlModel";
const hudl = new Hudl()

describe(('this is a test'), ()=>{
    
    hudl.hudlSetupAndTeardown()
  
    test('test', async ()=>{
        await hudl.loginWithValidCreds("test", "test")
    })
});