#  p5.js Mouse Drawing App

A simple interactive drawing application built with **p5.js**.

The sketch allows users to draw freely on the canvas using their mouse.  
The drawing is generated in real-time by tracking `mouseX` and `mouseY` positions.

---

##  Live Demo
(Will be added after enabling GitHub Pages)

---

## Project Structure

```
project-folder/
│
├── index.html
├── sketch.js
└── p5.min.js
```

---

##  How It Works

- `setup()` creates the canvas once.
- `draw()` runs continuously (~60 FPS).
- The app draws small circles (or lines) at the current mouse position.
- The drawing accumulates over time because the background is not cleared inside `draw()`.

---

##  Core Concepts Used

- Frame-based rendering
- Mouse position tracking
- Event-driven programming
- State between frames (`pmouseX`, `pmouseY`)

---

##  Features

- Freehand drawing with mouse movement
- Real-time rendering
- Smooth line connection using:
  ```javascript
  line(pmouseX, pmouseY, mouseX, mouseY);
  ```

---

##  Technologies

- JavaScript
- p5.js library
- HTML5 Canvas

---

##  Future Improvements

- Add Clear Button
- Add Color Picker
- Add Brush Size Control
- Export drawing as PNG
- Touch support for mobile

---

##  Author

Jamal Salem  
Computer Engineer

---

## 📜 License

This project is open-source and free to use for learning purposes.
