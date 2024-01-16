const DAO = require("./bankDAO");
const bankTransfert = require("./bankTransfert");
function getBalance(accountId) {
  return DAO.retrieveBalance(accountId);
}
function transferMoney(accountId, amount) {
  return bankTransfert
    .transfert(accountId, amount)
    .then(() => DAO.debitAccount(accountId, amount))
    .catch(() => {});
}

module.exports = { getBalance, transferMoney };
