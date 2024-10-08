
class Animal {
    constructor(species) {
        this._species = species;
    }


    get species() {
        return this._species;
    }


    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Cat extends Animal {
    
    purr() {
        console.log("purr");
    }
}


class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

