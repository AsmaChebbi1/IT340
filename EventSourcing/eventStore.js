let eventList = [];
const Patient = require("./patient");

function addEvent(name, patientId, payload, creationDate) {
  const patientAdded = new Event(name, patientId, payload, creationDate);
  eventList.push(patientAdded);
}

module.exports = {
  addEvent,
};
