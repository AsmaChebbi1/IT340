const getBalance = require("./bank");
const DAO = require("./bankDAO");

describe("Test de retrieve Balance", () => {
  const accountId = "457854696";
  test("Validation que retrieve balance est bien appelée", () => {
    jest.spyOn(DAO, "retrieveBalance");
    //jest.spyOn(DAO, "retrieveBalance").mockReturnValue(1000);
    const balance = getBalance(accountId);
    expect(DAO.retrieveBalance).toHaveBeenCalledWith(accountId);
  });
  test("Validation que le solde récupéré par retrieveBalance est bien retourné ", () => {
    const solde = getBalance(accountId);
    expect(solde).toBe(2000);
  });
});
