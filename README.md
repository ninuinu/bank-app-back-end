# bank-app-back-end

This the repository containing all code necessary to run the back-end of the bank app webb application. The back-end is node.js using Express written in Typescript. 
## Getting Started
Download the project folder, compile it, and navigate to the root of the project directory. Run the following command to download all necessary dependencies:
```
npm install 
```

#### To start the server, run:
```
npm start
```
#### To run the unit tests, run:
```
npm test
```

## Project Structure

* Controllers: Contain controller logic for managing incoming requests
* Database: Local storage containing dummy account, user and transaction data
* Services: Contain helper functions for fetching data
* Tests: Contains one test to date :) ... in tests > services > accounts.service.tests.ts

## Endpoints

1. GET Users (implemented, but not in use)
2. GET Accounts 
3. GET Account (implemented, but not in use)
4. POST AccountName - to update the account name of an existing account 
5. GET Transactions
6. GET Transaction (implemented, but not in use)

# Future Implementations

* Validation of requests in back-end, e.g. by using Joi
* Implement a real database
* Implement authentication
* Additional APIs (delete account, update contact details, etc.)