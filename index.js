// Initialize constructor functions
function Hero(name, level) { 
//constructors should be Capitalized!
    this.name = name;
    this.level = level;
} 

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);

    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}

//Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
    return`${this.name} says hello.`;
}