// Menü'de kullanacağımız haber başlıkları menuelemanlari isimli dizide, aşağıda.
document.addEventListener("DOMContentLoaded", function() {
let menuElemanlari = [
  "Agenda",
  "World",
  "Economy",
  "Writers",
  "Horoscope Comments",
  "Other"
]


function MenuYapici(array) {
  const div = document.createElement('div');
  div.classList.add('menu');

  const ul = document.createElement('ul');
  div.appendChild(ul);

  array.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });

  document.querySelector('.menu-button').addEventListener('click', (event) => {
    document.querySelector('.menu').classList.toggle('menu--open');
  });

  return div;
}

document.querySelector('div.header').appendChild(MenuYapici(menuElemanlari));

});
