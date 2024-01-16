const DAO = require("./bankDAO");

function getBalance(accountId) {
  return DAO.retrieveBalance(accountId);
}

module.exports = getBalance;
