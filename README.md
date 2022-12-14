# Testing-with-Cypress
## Installing Cypress
Before we can begin writing Cypress tests, we first need to install it. Within your terminal type the following:

1. Install any IDE, eg: VS Code
2. Support for JavaScript and TypeScript added to VS Code
3. Install Node JS & verify: 
                                                      node -v 
                                                      npm -v

Project setup step by step: 
1. Create an empty folder for a new Project
2. Open the project folder in VS Code
3. Run commands: 
               
               npm init -y
                  
               npm install cypress  or npm install cypress --save-dev
               
               npm install typescript
                 
4. Initialize a new tsconfig.json file using command: 

npx tsc --init --types cypress --lib dom,es6

Note:this ensure that types for cypress are accessible by typescript. These types depend on dom & es6, so we pass them as lib option to typescript.

5. Open TestRunner using command: npx cypress open


### Find and fix problems in your JavaScript code
ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

npm init @eslint/config

https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#What-you-ll-learn
![image](https://user-images.githubusercontent.com/45335405/196083603-a0747e7c-eed6-4bb9-889f-bc5eadbfdf79.png)

https://docs.cypress.io/guides/references/configuration#Configuration-File
![image](https://user-images.githubusercontent.com/45335405/196083984-13f6a12e-196a-4f84-a409-6257cbcb0f23.png)

![image](https://user-images.githubusercontent.com/45335405/196083769-9c20d5da-c53f-4e0a-80b1-2060f9bec09a.png)

![image](https://user-images.githubusercontent.com/45335405/196086389-428a7359-ac8f-412f-bfd5-e651a5c88fd7.png)

https://docs.cypress.io/api/commands/type#Usage
![image](https://user-images.githubusercontent.com/45335405/196089979-585a60ab-d030-4caa-b44c-776840484258.png)

![image](https://user-images.githubusercontent.com/45335405/196090266-28743a32-9573-46f6-9267-ee15861c88b5.png)

### Generate massive amounts of fake (but realistic) data for testing and development.
https://www.npmjs.com/package/@faker-js/faker

npm install --save-dev @faker-js/faker

![image](https://user-images.githubusercontent.com/45335405/197322941-9ce89e06-b634-424a-abf2-3d331347cc66.png)

![image](https://user-images.githubusercontent.com/45335405/197322986-0fa0f999-ac4f-456e-92fb-b64d2ec1d257.png)

![image](https://user-images.githubusercontent.com/45335405/197323298-c0f788b9-32b4-4920-b51c-5906fcc3b50f.png)

![image](https://user-images.githubusercontent.com/45335405/197323317-38c2ee65-6602-41a2-a5b7-e619e3a95d6c.png)


