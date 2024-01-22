const patientQueryDAO = require("./patientQueryDAO");

function getPatientList() {
  patientQueryDAO.retrievePatientList();
}
function getPatient(id) {
  patientQueryDAO.retrievePatient(id);
  console.log(patientQueryDAO.retrievePatient(id));
}

module.exports = { getPatientList, getPatient };
