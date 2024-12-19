console.log('JavaScript загружен!');

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все кнопки с классом 'collapsible'
  var coll = document.querySelectorAll('.collapsible');
  // Получаем все контенты с классом 'content'
  var contents = document.querySelectorAll('.content');

  // Перебираем все кнопки
  coll.forEach(function (button, index) {
    // Добавляем обработчик клика для каждой кнопки
    button.addEventListener("click", function () {
      // Переключаем класс 'active' на кнопке
      this.classList.toggle("active");

      // Получаем соответствующий контент
      var content = contents[index];

      // Если content уже открыт, закрываем его
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // Иначе, открываем content
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
