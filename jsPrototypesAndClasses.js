class Character {
  static numberOfCharacters = 0;
  static showNumberOfCharacters = () => console.log(this.numberOfCharacters);

  constructor() {
    if (new.target === Character) {
      throw new Error('Cannot create instance of abstract class')
    }
    this.x = Math.ceil(Math.random() * 10 - 1);
    this.y = Math.ceil(Math.random() * 10 - 1);
    Character.numberOfCharacters++;
  }

  showPosition() {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }

  setCoordinates(x, y) {
    if (x >= 10 || y >= 10 || x < 0 || y < 0) {
      throw new Error('Coordinates out of boundaries')
    }
    this.x = x;
    this.y = y;
  }
}

class PlayerCharacter extends Character {
  constructor() {
    super()
  }
}

class NonPlayerCharacter extends Character {
  constructor() {
    super()
  }
}

const char1 = new PlayerCharacter();
char1.setCoordinates(5, 6);
const char2 = new NonPlayerCharacter();
char1.showPosition();
char2.showPosition();
Character.showNumberOfCharacters();


// Prototypes

const Character2 = function () {
  if (new.target === Character) {
    throw new Error('Cannot create instance of abstract class')
  }
}

Character2.numberOfCharacters = 0;
Character2.showNumberOfCharacters = function () {
  console.log(this.numberOfCharacters)
}

Character2.prototype = {
  x: Math.ceil(Math.random() * 10 - 1),
  y: Math.ceil(Math.random() * 10 - 1),
  showPosition: function () {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  },
  setCoordinates: function (x, y) {
    if (x >= 10 || y >= 10 || x < 0 || y < 0) {
      throw new Error('Coordinates out of boundaries')
    }
    this.x = x;
    this.y = y;
  }
}

const PlayerCharacter2 = function () {
  Character2.numberOfCharacters++
}
PlayerCharacter2.prototype = Character2.prototype

const NonPlayerCharacter2 = function () {
  Character2.numberOfCharacters++
}
NonPlayerCharacter2.prototype = Character2.prototype;

const char3 = new PlayerCharacter2();
char3.setCoordinates(5, 6);
const char4 = new NonPlayerCharacter2();
char3.showPosition();
char4.showPosition();
Character2.showNumberOfCharacters();