const passwordValidator = require("./passwordValidator");

describe("Password Validation", () => {
  test("Validation", () => {
    expect(passwordValidator("cdfr!gyts4", 1, 1, 1)).toBe(true);
  });
});
