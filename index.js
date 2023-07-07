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