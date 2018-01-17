 var speak = function () {
     console.log(this.sound + ", my name is "+ this.name + "!")
 };

 var dog = {
    name: "Pit",
    age: 3,
    isAwesome: true,
    sound: "Bark",
    speak: speak
 };

 var cat = {
    name: "Boris",
     age: 2,
     color: "turtle",
     sound: "Meow",
     speak: speak
 };

cat.speak();
dog.speak();