function passwordValidator(password, minDigits, minLetters, minSpecialChars) {
  //vérification de longueur
  if (password.length < 8) {
    return false;
  }

  var digitCount = (password.match(/\d/g) || []).length;
  if (digitCount < minDigits) {
    return false;
  }
  // Vérification lettre
  var letterCount = (password.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < minLetters) {
    return false;
  }
  // Vérification nombre
  var specialCharCount = (
    password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g) || []
  ).length;
  if (specialCharCount < minSpecialChars) {
    return false;
  }

  // Si le mot de passe est valide
  return true;
}

module.exports = passwordValidator;
