# Image Pipeline Assignment

This project is an image processing pipeline that allows users to upload images, process them, and retrieve the results. 

## How to Run the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/navneetnavs/image-pipeline-assignment.git
   cd image-pipeline-assignment
2. Install Dependencies:
Make sure you have Node.js installed. Then, install the required libraries by running:
npm install

3. Run the Application:
Start the server with:
npm start   

The application should now be running on http://localhost:3000.


3. Libraries Used
   React: A JavaScript library for building user interfaces.
   Canvas: For rendering images and drawing.


4.  Managing Image Uploads:

Challenge: Handling image uploads and ensuring they are correctly rendered on the canvas.
Solution: Implemented proper image resizing and scaling with the help of Fabric.js to maintain aspect ratios and make the uploads responsive.
Canvas Interactivity:

Challenge: Allowing users to draw on the canvas while also uploading and displaying images.
Solution: Used Fabric.js to manage the drawing and interactions on the canvas, ensuring the image overlays are rendered properly.
Animation Performance:

Challenge: Ensuring smooth animations and transitions while rendering images and applying filters.
Solution: Utilized GSAP for efficient animation handling, which provided better performance compared to traditional CSS animations.   



