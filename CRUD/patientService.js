const Patient = require("./patient");
const patientDAO = require("./patientDAO");

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  patientDAO.insertPatient(patient);
}
function getPatientList() {
  patientDAO.retrievePatientList();
}
function savePatient(id, lastName, firstName) {
  const patients = patientDAO.retrievePatientList();
  const indexPatient = patients.findIndex((p) => p.id === id);

  patients[indexPatient].lastname = lastName;
  patients[indexPatient].firstname = firstName;
  patientDAO.updatePatient(patients[indexPatient]);
}
function getPatient(id) {
  patientDAO.retrievePatient(id);
  console.log(patientDAO.retrievePatient(id));
}

module.exports = { addPatient, getPatientList, savePatient, getPatient };
