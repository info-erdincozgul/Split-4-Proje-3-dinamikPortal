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
## Kazanımlar
Bu proje, aşağıdaki ileri düzey JavaScript ve web geliştirme konularında pratik yapmanızı sağlar:
* JavaScript Bileşenleri (Components): Fonksiyonlar kullanarak tekrar kullanılabilir ve dinamik HTML yapıları oluşturma.
* DOM Manipülasyonu: createElement, appendChild, textContent gibi metotlarla HTML içeriğini tamamen JavaScript üzerinden oluşturma.
* Event Handling (Olay Yönetimi): Kullanıcı etkileşimlerine (click) tepki veren dinamik özellikler ekleme.
* Döngüler: Veri dizisi üzerinde dönerek her bir öğe için DOM elementleri oluşturma.
* Modüler Kod Yapısı: Kodları farklı dosyalarda (örneğin, components klasörü) tutarak daha temiz ve düzenli bir proje yapısı kurma.
* CSS Class Manipülasyonu: classList.toggle metoduyla CSS sınıflarını dinamik olarak ekleyip çıkararak elementlerin görünümünü değiştirme.