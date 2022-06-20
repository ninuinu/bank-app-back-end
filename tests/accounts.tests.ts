import { AccountsService } from "../src/services/accounts.service";
import { expect } from "chai";

describe("getAccount", function () {
  it("getAccount controller function should return account given a userId", () => {
    const userId = 1337;
    const actualOutput = AccountsService.getAccount(userId);
    const expectedOutput = [
      {
        "accountNumber": 1337,
        "accountName": "Buffert",
        "balance": 345,
        "userId": 2451,
        "currency": "EUR"
      }
    ];

    expect(actualOutput).to.deep.equal(expectedOutput);
  });
});

