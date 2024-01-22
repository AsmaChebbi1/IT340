const Event = require("./event");
const eventStore = require("./eventStore");
const Patient = require("./patient");

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  const id = patient.id;
  const payload = { lastName, firstName };
  eventStore.addEvent("AddedPatient", id, payload, new Date());
}
function restorePatient(id) {
  const patientEvents = eventList.filter((event) => event.patientId === id);
  if (patientEvents.length === 0) {
    console.log("eventlist vide");
    return null;
  }
  patientEvents.forEach((event) => {
    if (event.name == "patientAdded") {
      patient = new Patient(
        event.patientId,
        event.payload.lastName,
        event.payload.firstName,
        event.creationDate
      );
    }
  });

  return patient;
}
function savePatient(id, lastName, firstName) {
  const patients = database.patientList;
  const indexPatient = patients.findIndex((p) => p.id === id);
  patients[indexPatient].lastname = lastName;
  patients[indexPatient].firstname = firstName;
  const patient = restorePatient(id);
  patient.lastname = lastName;
  patient.firstname = firstName;
  eventStore.addEvent("patientSaved", id, patient, new Date());
}

module.exports = { addPatient, restorePatient, savePatient };
