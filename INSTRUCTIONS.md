# File Structure

Let's start with where things are located. To edit and create project pages, you will be working in the **data/_projects** folder. Each project is defined by a `.json` file. The name of the json file will be the URL of the project page. For example, if I made a new project called `leather-couch.json`, the URL of the page would be elliotnoyes.com/leather-couch.

This is why all the json files are named with lowercase and dashes. Do not use spaces in the file names.

To add photos for a project, you will be working in the **public/images/projects** folders. These are organized by category.

# Preparing Images

This process requires an app from the app store. Click [this link](https://apps.apple.com/us/app/webp-converter/id1522368690?mt=12) and download WebP Converter. Then follow these steps:

1. Create a new folder for your project images inside the desired category. For my leather couch example, I would make the folder *leather_couch* inside the *furniture* folder. Put all your project images in this folder.
2. If you have any images that are not JPEGs (they may be .HEIC) follow these steps to convert them. Select all non-JPEG images (shift + click to select multiple) and right-click. In the menu,
    - Quick Actions $\rightarrow$ Convert Image
    - Format: JPEG, Image Size: Actual Size $\rightarrow$ click Convert to JPEG.

    [TUTORIAL VIDEO](https://youtu.be/ZgHYEIy5PMo)

3. Once you have done the conversion, delete any non-JPEGs. Then open the WebP Converter app.
    - Press `+` and select the folder of project images
    - Output: Save in Original Image Folder $\rightarrow$ click `Start`
    
    Once the conversion is complete, delete the JPEGs

    [TUTORIAL VIDEO](https://youtu.be/KRExL6DhiKU)


# Creating a Project Page

Let's continue with the leather couch example and go through the process of creating its json file.

1. In VSCode, navigate to the **data/_projects** folder and look for `TEMPLATE.json`. Create a copy of this file by selecting it and then copying and pasting (command+c, command+v). Give the copied file an appropriate project name. For this example I will go with `leather-couch.json` (remember no spaces).

    [TUTORIAL VIDEO](https://youtu.be/UbuqHa1fnTY)

2. Now that we have our json file, let's go through the fields one-by-one:

    - `date`: The approximate date of the project in year-month-day format. This determines the order in which the projects will appear within their category. For example, a project dated `2024-05-01` will appear before a project dated `2024-04-01`. If there is a specific order that you want the projects to appear in on the category page, just modify the dates accordingly.

    - `category`: The category for the project. Choose one from the following list:
        - Furniture
        - Built-ins
        - Cabinetry
        - Construction
        - Small Projects
        - Millwork
        - Restorations
        - In Progress
    
    - `title`: The title of the project. This will appear in large text at the top of the project page.

    - `description`: A short description of the project. This will appear in small text below the title on the project page.

    - `coverImage`: The path to the cover image for the project on the category page. This can be any of the images in the project image folder. For example, if I want to set it as `wide1.webp`, the full path would be `/images/projects/furniture/leather-couch/wide1.webp`.

    - `grid`: An array representation of the grid of images. Each number here represents a row of images. The number 1 equates to 1 image taking up the whole row. Acceptable numbers are 1, 2, 3, and 4.

    - `imageList`: A list of images to be placed in the grid. **The total number of images must match the total number of grid spaces.** For example, if my grid was `[4, 4, 1, 2]`, I must specify exactly 11 images in the list. Each image is represented by an **object**, like the one shown below

    ```
    {
      "id": 1,
      "name": "alt",
      "image": "/images/projects/furniture/leather-couch/wide1.webp",
      "AR_src": 1.33,
      "w_disp": 1,
      "h_disp": 0.75
    },
    ```
    `name` is the alt text for accessibility purposes
    
    `AR_src`, `w_disp`, and `h_disp` are used to match the grid boxes to the image size

# Editing a Project Page

Once you have your json set up, it's time to add some images to the page.

1. First, I suggest sifting through all the images and deciding what the grid should look like and where each image should appear in the grid. This will determine how you rename all the images. These names can be changed at any time, but doing this initially will save time. 

    Say I want my page to have two rows, each with 4 images per row. This corresponds to a grid array of `[4, 4]`. For the first row, I will choose 4 images of the same dimensions. Since they are landscape, I'll rename these images wide1.webp, wide2.webp, wide3.webp, and wide4.webp. The second row will be 4 portrait images, so I'll rename them tall1.webp, tall2.webp, tall3.webp, and tall4.webp. Notice that the numbering on wide images is separate from the numbering on tall images.

    **Each row should contain images of the same dimensions or else it will look stupid**

2. Once you have decided on a grid and renamed all your images, it's time to add them to the json file. The template contains a copyable image object for wide and tall images. To populate the imageList, copy and paste these objects so they match the desired order of images. Replace the `image` field with the path to each image. Make sure the `id` field starts at 1 and increases for each object. **Note that the `id` should always count from 1 to the number of images, it does not have separate numbering for different dimension images.**

    Continuing with the leather couch example, I will populate the two rows of images. First, I will fill out the copyable wide object to match wide1.webp. Then, I will duplicate this 3 times and change the `id` and `image` fields to match wide2.webp, wide3.webp, and wide4.webp. I will repeat this process for the tall images.

    [TUTORIAL VIDEO](https://youtu.be/_T5j9T6X8EM)


# Local Website Preview

1. Open a terminal in the **new-website** folder

2. Type the command `yarn dev` and press enter. This will locally host the website at the URL [http://localhost:3000](http://localhost:3000)

3. Open a browser and enter `localhost:3000` or click the link above

    **Make sure to reload the browser after making changes to a page**

    Use `control + C` to quit the command

    [TUTORIAL VIDEO](https://youtu.be/T7tdelaNp9A)