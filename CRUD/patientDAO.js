const database = require("./database");
function insertPatient(patient) {
  database.patient.push(patient);
  console.log(database.patient);
}
function retrievePatientList() {
  const patientList = database.patient;
  const patientWithoutDate = patientList.map((patient) => {
    const { creationDate, ...patientWithoutDate } = patient;
    return patientWithoutDate;
  });
  console.log("Liste des patients sans date", patientWithoutDate);
  return patientWithoutDate;
}
function updatePatient(patient) {
  const patients = database.patient;
  const indexPatient = patients.findIndex((p) => p.id === patient.id);

  patients[indexPatient] = { ...patients[indexPatient], ...patient };
  console.log("Liste des patients après modification du patient", patients);
  return patients;
}
module.exports = { insertPatient, retrievePatientList, updatePatient };
