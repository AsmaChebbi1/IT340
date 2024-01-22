const patientDAO = require("./patientCommandDAO");
const patientQueryDAO = require("./patientQueryDAO");
const { patientCache } = require("./cache");

const Patient = require("./patient");
const database = require("./database");

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  const id = patient.id;
  patientCache[id] = { name: patient.name };

  const patientWithoutDate = { id, lastName, firstName };
  database.patientList.push(patientWithoutDate);
  patientDAO.insertPatient(patient);
}
function savePatient(id, lastName, firstName) {
  const patients = database.patientList;
  const indexPatient = patients.findIndex((p) => p.id === id);
  console.log("affichage du contenu de la propriété patientList", patients);
  patients[indexPatient].lastname = lastName;
  patients[indexPatient].firstname = firstName;
  patientDAO.updatePatient(patients[indexPatient]);

  if (patientCache[id]) {
    patientCache[id].name = `${lastName}, ${firstName}`;
  }
}
module.exports = { addPatient, savePatient };
