import React, { useEffect, useRef } from "react";

const RemoveExtraSpace = ({ src, newWidth, newHeight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      context.drawImage(img, 0, 0, img.width, img.height);

      // Get the image data from the canvas
      let imageData= context.getImageData(0, 0, canvas.width, canvas.height);
      let data = imageData.data;

      let minX = img.width,
        minY = img.height,
        maxX = 0,
        maxY = 0;

      // Loop through all pixels to find the bounding box of the non-transparent part
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          let i = (y * img.width + x) * 4;
          if (data[i + 3] > 0) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      // Create a new canvas of the size of the bounding box
      let newCanvas = document.createElement("canvas");
      newCanvas.width = newWidth;
      newCanvas.height = newHeight;

      // Draw the non-transparent part of the original image onto the new canvas
      newCanvas
        .getContext("2d")
        .drawImage(
          canvas,
          minX,
          minY,
          maxX - minX + 1,
          maxY - minY + 1,
          0,
          0,
          newWidth,
          newHeight
        );

      // Replace the original canvas with the new one
      canvas.parentNode.replaceChild(newCanvas, canvas);
    };

    img.src = src;
  }, [src, newWidth, newHeight]);

  return <canvas ref={canvasRef} />;
};

export default RemoveExtraSpace;
