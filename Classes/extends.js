//exemple 1
// class Rectangle {
//   constructor(hauteur, largeur) {
//     this.hauteur = hauteur;
//     this.largeur = largeur;
//   }
// }
//end of exemple 1
//start of exemple 2
// class Rectangle {
//   constructor(hauteur, largeur) {
//     this.hauteur = hauteur;
//     this.largeur = largeur;
//   }

//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.largeur * this.hauteur;
//   }
// }

// const carré = new Rectangle(10, 10);

// console.log(carré.area);
//end of exemlpe 2
//start of exemple 3
// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     static distance(a, b) {
//       const dx = a.x - b.x;
//       const dy = a.y - b.y;
//       return Math.hypot(dx, dy);
//     }
//   }
  
//   const p1 = new Point(5, 5);
//   const p2 = new Point(10, 10);
  
//   console.log(Point.distance(p1, p2));
  //end of exmple 3
  //start of exemple 4
  class Chat {
    constructor(nom) {
      this.nom = nom;
    }
  
    parler() {
      console.log(`${this.nom} fait du bruit.`);
    }
  }
  
  class Lion extends Chat {
    parler() {
      super.parler();
      console.log(`${this.nom} rugit.`);
    }
  }
  const chat1 =new Lion("najlae")
  console.log(chat1.parler())
  //end of exemple 4