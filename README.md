This is a test framework build using Selenium, Jest, ChromeDriver and TypeScript. 

NOTE: At the time of writing this, ChromeDriver is updated to v104 and should support Google Chrome v109. Occasionally, chromedriver and Chrome don't play well together, and if you get an error related to either it might be necessary to downgrade Chrome or upgrade Chromedriver to match. 

The file structure is as follows:
1) The root file for this project is the basePage.ts file, which includes a constructor along with some generic Selenium driver methods. 
2) A file called hudlModel.ts contains a constructor, a class instance, a few variables, a few methods, and a few assertions used to create tests.
3) The test file is inside a hudlLoginTests folder. To run the tests, run ```npx jest``` in your terminal from the seleniumStarter file.

  
