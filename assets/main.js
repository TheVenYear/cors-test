var getApp = () => document.querySelector("#root");

getApp().innerHTML =
  '<h1>Проверка на CSRF атаки</h1><button id="fetchButton">Запуск</button';

document.querySelector("#fetchButton").addEventListener("click", () => {
  fetch("https://messenger-exam.herokuapp.com/api/me");
});
