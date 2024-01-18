const database = require("./database");
function insertPatient(patient) {
  database.patient.push(patient);
  console.log(database.patient);
}

module.exports = { insertPatient };
