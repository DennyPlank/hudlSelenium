import { Hudl } from "./hudlModel";
const hudl = new Hudl()

describe(('this is a test'), ()=>{
  
    test('test', async ()=>{
        await hudl.navigate();
        await hudl.sleep(5000)
    })
});