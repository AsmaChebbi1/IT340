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
  console.log(patientWithoutDate);
  return patientWithoutDate;
}

module.exports = { insertPatient, retrievePatientList };
