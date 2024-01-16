const transf = require("./bank");
const bankTransfert = require("./bankTransfert");
const DAO = require("./bankDAO");
describe("Test de transfert d'argent sur un autre compte", () => {
  const accountId = "457854696";
  const amount = 200;

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Validation de l'appel de la fonction transfert dans la fonction transferMoney", async () => {
    jest.spyOn(bankTransfert, "transfert").mockResolvedValue();
    await transf.transferMoney(accountId, amount);
    expect(bankTransfert.transfert).toHaveBeenCalledWith(accountId, amount);
  });
  test("Validation de l'appel de la fonction debitAccount dans la fonction transferMoney : cas de promesse résolue", async () => {
    jest.spyOn(DAO, "debitAccount");
    jest.spyOn(bankTransfert, "transfert").mockResolvedValue();
    await transf.transferMoney(accountId, amount);
    expect(DAO.debitAccount).toHaveBeenCalledWith(accountId, amount);
  });
  test("Validation de l'appel de la fonction debitAccount dans la fonction transferMoney : cas de promesse non résolue", async () => {
    jest.spyOn(DAO, "debitAccount");
    jest.spyOn(bankTransfert, "transfert").mockRejectedValue();
    await transf.transferMoney(accountId, amount);
    expect(DAO.debitAccount).not.toHaveBeenCalled();
  });
});
