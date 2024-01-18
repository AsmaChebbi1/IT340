let id = 0;

function generateId() {
  id++;
  return id;
}

class Patient {
  constructor(lastname, firstname) {
    this.id = generateId();
    this.lastname = lastname;
    this.firstname = firstname;
    this.creationDate = new Date();
  }
}

module.exports = Patient;
