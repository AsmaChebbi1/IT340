const service = require("./patientCommand");
const patientQuery = require("./patientQuery");

service.addPatient("CHEBBI", "Asma");
patientQuery.getPatientList();
service.savePatient(1, "c", "hi");
patientQuery.getPatient(1);
