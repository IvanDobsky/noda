var speak = function () {
    console.log(this.sound + ", my name is " + this.name + "!");
};

var cat = {
    name: "Boris",
    sound: "meow",
    speak: speak
};

var dog = {
    name: "Barbos",
    sound: "Bark",
    speak: speak
}

dog.speak();