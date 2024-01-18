const Patient = require("./patient");
const patientDAO = require("./patientDAO");

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  patientDAO.insertPatient(patient);
}
function getPatientList() {
  patientDAO.retrievePatientList();
}

module.exports = { addPatient, getPatientList };
