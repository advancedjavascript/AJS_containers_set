export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character) === false) {
            this.members.add(character);
        } else {
            throw new Error('This character is in your team already.');
        }
    }

    addAll(...command) {
        command.forEach((part) => {
            if (this.members.has(part) === false) {
                this.members.add(part);
            }
        });
    }

    toArray(members) {
        this.array = Array.from(members);
        return this.array;
    }
}