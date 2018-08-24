let { Trainer, Pokemon } = require("../pokemenNtrainers.js");
let { expect } = require("chai");
let { Battle } = require("../battle.js");
require("mocha-sinon");


describe.only("#Battle", () => {
  beforeEach(function() {
    this.sinon.stub(console, "log");
  });
  it("1-Kill opponent", () => {
    const tangela = new Pokemon("Tangela", "Vine Whip", 125, 50, "Vine Whip", "Grass");
    const magikarp = new Pokemon("Magikarp", "Flail", 100, 5, "Splash", "Water");
    const testBattle = new Battle(tangela, magikarp);
    testBattle.fight(tangela, magikarp); 
    testBattle.fight(tangela, magikarp); 
    expect(magikarp.hp).to.equal(-25);
    expect(console.log.calledWith("You have destroyed your opponent!")).to.be.true;  
  });
  it("2-We die when opponent is OP", () => {
    const tangela = new Pokemon("Tangela", "Vine Whip", 125, 50, "Vine Whip", "Grass");
    const magikarp = new Pokemon("Magikarp", "Flail", 100, 500, "Splash", "Water");
    const testBattle = new Battle(tangela, magikarp);
    testBattle.fight(tangela, magikarp);
    expect(console.log.calledWith("You are rubbish, you don't deserve pokemon!")).to.be.true;
  });
  it("3-A super effective test", () => {
    const tangela = new Pokemon("Tangela", "Vine Whip", 125, 50, "Vine Whip", "Water");
    const magikarp = new Pokemon("Magikarp", "Flail", 100, 5, "Splash", "Grass");
    const testBattle = new Battle(tangela, magikarp);
    testBattle.fight(tangela, magikarp);
    testBattle.fight(tangela, magikarp);
    expect(tangela.hp).to.equal(112.50);
  });
  it("4- Test values when pokemon 1 is weaker reducing pokemon1 damage", () => {
    const tangela = new Pokemon("Tangela", "Vine Whip", 125, 50, "Vine Whip", "Water");
    const magikarp = new Pokemon("Magikarp", "Flail", 100, 5, "Splash", "Grass");
    const testBattle = new Battle(tangela, magikarp);
    testBattle.fight(tangela, magikarp);
    testBattle.fight(tangela, magikarp);
    expect(tangela.hp).to.equal(112.5);
  });
});
