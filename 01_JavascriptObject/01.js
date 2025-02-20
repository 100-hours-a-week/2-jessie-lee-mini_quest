class myPet {
  #name;
  #type;

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  printName() {
    console.log(this.name);
  }

  printType() {
    console.log(this.type);
  }
}

myPet = new myPet("Momo", "Cat");
myPet.printName(); // Momo
myPet.printType(); // Cat
