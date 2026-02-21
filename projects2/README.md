# 🕵️ Department of Justice – Evidence Detection

## 📌 Overview
This project is a p5.js exercise focused on identifying and highlighting key pieces of evidence in a crime scene image.

The task requires drawing separate ellipses around four specific objects:

- Letter opener  
- Death threat letters  
- Telephone  
- AGOL leaflet  

Each ellipse must accurately cover the entire object while staying as close as possible to its boundaries.

---

## 🎯 Objective
The goal of this exercise is to practice:

- Understanding coordinate systems
- Positioning shapes using center-based coordinates
- Adjusting width and height for precise coverage
- Structuring drawing logic cleanly

---

## 🛠 Technical Concepts Used
- `preload()` for loading external images
- `createCanvas()` for matching canvas size to image dimensions
- `image()` for rendering background scenes
- `ellipse(x, y, width, height)` for object highlighting
- Arrays for storing structured coordinate data
- Looping through data to reduce repetition

---

## 🧠 Learning Outcome
This project reinforces spatial reasoning, visual abstraction, and clean code organization.

Instead of hardcoding multiple drawing statements separately, the solution uses a structured array of evidence coordinates and a loop to render them efficiently.

---

## 💻 Result
Four red ellipses are drawn over the crime scene image, precisely marking each evidence object while maintaining clean and scalable code structure.
