const Event = require("./event");
const { addEvent } = require("./eventStore");
const Patient = require("./patient");

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  const id = patient.id;
  const payload = { lastName, firstName };
  addEvent("AddedPatient", id, payload, new Date());
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
module.exports = { addPatient, restorePatient };
