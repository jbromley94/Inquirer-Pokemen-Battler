let { Trainer, Pokemon } = require("../pokemenNtrainers.js");
const { expect } = require("chai");

describe("Trainer()", () => {
  it("Simple test to check trainer is assigned a name", () => {
    const testFunc = new Trainer("Ash");
    expect(testFunc.name).to.equal("Ash");
    expect(testFunc.pokeballs).to.eql([]);
  });
});

describe("Pokemon()", () => {
  it("Check a pokemon can be created with just a name", () => {
    const testFunc = new Pokemon("Tangela");
    expect(testFunc.name).to.equal("Tangela");
  });
  it("Check a pokemon move is stored", () => {
    const testFunc = new Pokemon("Tangela", "Vine Whip");
    expect(testFunc.move).to.equal("Vine Whip");
  });
  it("Check a pokemon hp is stored as a value", () => {
    const testFunc = new Pokemon("Tangela", "Vine Whip", 125);
    expect(testFunc.hp).to.equal(125);
  });
});
