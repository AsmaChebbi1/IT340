const service = require("./patientService");

service.addPatient("CHEBBI", "Asma");
service.getPatientList();
service.savePatient(1, "ch", "as");
service.getPatient(1);
