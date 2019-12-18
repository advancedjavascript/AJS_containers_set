import Character from './character';
import Team from './app';

test('TEAM: add one character', () => {
  const input = new Character('Lucky', 'Bowman');
  const command = new Team();

  const expected = { members: new Set([input]) };
  command.add(input);
  expect(command).toEqual(expected);
});

test('TEAM: add two character', () => {
  const input1 = new Character('Lucky', 'Bowman');
  const input2 = new Character('Max', 'Swordsman');
  const command = new Team();

  const expected = { members: new Set([input1, input2]) };
  command.add(input1);
  command.add(input2);
  expect(command).toEqual(expected);
});


test('TEAM: add an existing character', () => {
  const input1 = new Character('Lucky', 'Bowman');
  const input2 = new Character('Max', 'Swordsman');
  const command = new Team();

  command.add(input1);
  command.add(input2);
  const output = () => command.add(input2);
  expect(output).toThrow(Error);
});

test('TEAM: add all characters', () => {
  const input1 = new Character('Lucky', 'Bowman');
  const input2 = new Character('Max', 'Swordsman');
  const input3 = new Character('Sam', 'Magician');
  const input4 = new Character('Frank', 'Undead');
  const command = new Team();

  const expected = { members: new Set([input1, input2, input3, input4]) };
  command.addAll(input1, input2, input3, input4);

  expect(command).toEqual(expected);
});


test('TEAM: add all characters, one repeated', () => {
  const input1 = new Character('Lucky', 'Bowman');
  const input2 = new Character('Max', 'Swordsman');
  const input3 = new Character('Sam', 'Magician');
  const input4 = new Character('Frank', 'Undead');
  const command = new Team();

  const expected = { members: new Set([input1, input2, input3, input4]) };
  command.addAll(input1, input2, input3, input4, input2);

  expect(command).toEqual(expected);
});


test('TEAM: toArray', () => {
  const input1 = new Character('Lucky', 'Bowman');
  const input2 = new Character('Max', 'Swordsman');
  const input3 = new Character('Sam', 'Magician');
  const input4 = new Character('Frank', 'Undead');
  const command = new Team();

  const expected = [{
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lucky',
    type: 'Bowman',
  },
  {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Max',
    type: 'Swordsman',
  },
  {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Sam',
    type: 'Magician',
  },
  {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Frank',
    type: 'Undead',
  },
  ];

  expect(command.toArray([input1, input2, input3, input4])).toEqual(expected);
});


test('CHARACTER: name is OK, type is Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lucky',
    type: 'Bowman',
  };

  const received = new Character('Lucky', 'Bowman');
  expect(received).toEqual(expected);
});
