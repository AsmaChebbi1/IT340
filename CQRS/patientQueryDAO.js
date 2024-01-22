const database = require("./database");
const { patientCache } = require("./cache");

function retrievePatientList() {
  const patientList = database.patient;
  const patientWithoutDate = patientList.map((patient) => {
    const { creationDate, ...patientWithoutDate } = patient;
    return patientWithoutDate;
  });
  console.log("Liste des patients sans date", patientWithoutDate);
  return database.patientList;
}
function retrievePatient(id) {
  const patients = database.patient;
  //const patientfound = patients.find((p) => p.id === id);
  const patientfound = patientCache[id];

  return patientfound
    ? {
        ...patientfound,
        name: patientfound.lastname + " " + patientfound.firstname,
      }
    : null;
}
module.exports = {
  retrievePatientList,
  retrievePatient,
};
