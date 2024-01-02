from PIL import Image

def remove_color(image_path, color_to_remove, output_path):
    # Open the image
    img = Image.open(image_path)

    # Get the image dimensions
    width, height = img.size

    # Create a new image with transparency
    new_img = Image.new("RGBA", (width, height))

    # Iterate over each pixel
    for x in range(width):
        for y in range(height):
            # Get the color of the pixel
            pixel_color = img.getpixel((x, y))

            # Compare the color with the color to remove (RGB values)
            if pixel_color[:3] != color_to_remove:
                # If the colors don't match, set the pixel in the new image
                new_img.putpixel((x, y), pixel_color)

    # Save the new image
    new_img.save(output_path)

# Example usage: Remove color #161616 from glass.png and save as output.png
remove_color("./src/assets/glass.png", (22, 22, 22), "./src/assets/output.png")