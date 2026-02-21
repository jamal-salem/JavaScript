# 🎨 De Stijl Artwork – p5.js

## 📌 Overview
This project recreates a minimalist geometric artwork inspired by the **De Stijl** art movement using p5.js.

The design uses structured rectangles, bold black lines, and primary colors.

---

## 🛠 Technologies Used
- JavaScript
- p5.js
- HTML5 Canvas

---

## 🧠 Concepts Practiced
- Canvas creation
- Coordinate positioning
- Stroke and fill styling
- Geometric composition
- Structured layout logic

---

## 🖼 Artwork Logic

The sketch:

- Creates an 800x800 canvas
- Uses thick black stroke lines
- Draws structured white areas
- Adds primary color blocks (Red, Blue, Green)

---

## 💻 Core Code

```javascript
function setup() {
    createCanvas(800, 800);
    background(255);
    noLoop();
}

function draw() {
    stroke(0);
    strokeWeight(12);

    // white areas
    fill(255);
    rect(0,100,100,350);
    rect(0,350,100,300);
    rect(100,0,600,50);
    rect(100,650,600,150);
    rect(700,0,100,650);

    // red
    fill(255,0,0);
    rect(100,50,600,600);

    // blue
    fill(0,0,150);
    rect(0,650,100,150);

    // green
    fill(0,255,0);
    rect(700,650,100,150);
}
