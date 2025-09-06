# Dynamic Technology News Portal
## About the Project
This project is a web application that uses JavaScript to create and manage entirely dynamic content for a technology news portal. Instead of static HTML, the page content is populated from JavaScript data objects (e.g., the data array for news and the menuElemanlari array for the menu).

The main purpose of the project is to demonstrate the logic of creating JavaScript Components to write reusable pieces of code. This allows structures like news and menus to update automatically when data changes or new data is added. The project also includes dynamic features that respond to user interaction, such as a button click.
## Project Structure
The project has a more modular structure thanks to the use of JavaScript components. The file structure is as follows:
* index.html: Contains the basic structure of the page and empty containers (like <div> elements) where the content will be placed.
* index.css: Defines the general styles for the page.
* components/: The folder that houses the reusable JavaScript components.
* haber.js: Contains the HaberYapici component, which creates the news articles, and its corresponding CSS file.
* menu.js: Contains the MenuYapici component, which creates the menu, and its corresponding CSS file.
## How to Run
The most practical way to run this dynamic web page is to use Visual Studio Code (VS Code) and the Live Server extension.
1. Open VS Code and ensure that the Live Server extension is installed.
2. Open the project folder in VS Code.
3. Right-click on the index.html file and select "Open with Live Server."
After these steps, your browser will automatically open, and you will see the live version of the page populated with JavaScript. You can test the following interactions on the page:
* Expand News: Click the + button under each news article to read the full story. Click it again to collapse the article.
* Open/Close Menu: Click the "Menü" (Menu) button in the top left corner of the screen to open and close the menu.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You'll learn how to programmatically create and manipulate DOM elements using vanilla JavaScript. The HaberYapici and MenuYapici functions demonstrate how to create div, h2, p, ul, and li elements, set their content and classes, and append them to the existing document.
* You'll understand how to handle user interaction with event listeners. The menu.js file adds a click event listener to the menu button to toggle a CSS class, which shows or hides the menu. Similarly, haberler.js adds a click listener to each article's expand button to toggle its height and content visibility.
* You'll learn how to use JavaScript to dynamically render content from a data source. Both haberler.js and menu.js use the forEach method to iterate over arrays (data and menuElemanlari) and generate HTML for each item, appending it to the webpage.
* You'll learn how to use CSS classes to manage component state and animations. The menu.css and haberler.css files define styles that are toggled by JavaScript. For example, menu--open and article-open classes change the display and height of elements, creating a dynamic user interface without the need for a framework.
* You'll understand how to use CSS layout techniques such as position: absolute, position: fixed, and z-index to control the placement and layering of elements on a page. The menu, for instance, is positioned fixed so it stays in place when the user scrolls.
