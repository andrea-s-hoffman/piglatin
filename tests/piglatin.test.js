const translate = require("../src/piglatin.js");

describe("At least five (5) tests for words starting with different vowels.", () => {
  test(`translate("apple") → "appleway"`, () => {
    const returnValue = translate("apple");
    expect(returnValue).toBe("appleway");
  });
  test(`translate("else") → "elseway"`, () => {
    const returnValue = translate("else");
    expect(returnValue).toBe("elseway");
  });
});

describe("At least two (2) tests for words starting with one consonant.", () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    const returnValue = translate("giraffe");
    expect(returnValue).toBe("iraffegay");
  });
  test(`translate("ginger") → "ingergay"`, () => {
    const returnValue = translate("ginger");
    expect(returnValue).toBe("ingergay");
  });
});

describe("At least one (1) test for words starting with two consonants.", () => {
  test(`translate("phone") → "onephay"`, () => {
    const returnValue = translate("phone");
    expect(returnValue).toBe("onephay");
  });
});
