class Wizard {
  constructor (x, y, z) {
    this.health = x;
    this.mana = y;
    this.armor = z;
  }
  
  attack () {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
