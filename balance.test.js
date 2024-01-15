const getBalance = require("./bank");
const DAO = require("./bankDAO");

describe("Test de retrieve Balance", () => {
  test("Validation", () => {
    jest.spyOn(DAO, "retrieveBalance");
    getBalance();
  });
});
