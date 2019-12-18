export default function Character(name, type) {
  this.name = name;
  this.type = type;
  const types = {
    Bowman: { att: 25, def: 25 },
    Swordsman: { att: 40, def: 10 },
    Magician: { att: 10, def: 40 },
    Undead: { att: 25, def: 25 },
    Zombie: { att: 40, def: 10 },
    Daemon: { att: 10, def: 40 },
  };
  this.attack = types[type].att;
  this.defence = types[type].def;
  this.health = 100;
  this.level = 1;
}
