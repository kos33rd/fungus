# Fungus - веб-клиент на базе Angular

---

## Установка
Для начала работы нам потребуется следующее ПО:
     
* [Node.JS версии 4.x.x](https://nodejs.org/en/download/)
* [npm версии 3.x.x](https://docs.npmjs.com/getting-started/installing-node)


После того, как всё устанвлено, убедитесь, что из вашей рабочей командной строки доступны следующие команды: 

```bash
    node -v && npm -v 
```

После того, как npm установлен и готов, мы можем установить все необходимые нашему приложению пакеты. 
Делается это из директории приложения командой 

```
npm install 
```


Теперь можно открыть директорию с проектом в IDE (рекомендую WebStorm либо PhpStorm, но и PyCharm тоже ок) 
и найти и открыть появившуюся вкладку npm в левой панели. Выбираем команду `start` и ждем сборки проекта. 
По завершению сборки будет запущен локальный веб-сервер для разработки, а также запущен браузер с открытым приложением.

Альтернативный способ запуска сервера разработки - выполнить команду `npm start` в консоли из директории проекта.

Если всё прошло успешно - в консоли не должно быть никаких ошибок, а в браузере должна открыться страница с приложением. 


## Разработка

Приложение собрано по стандартным рекомендациям от Google, испольуется система сборки SystemJS. 

* Про npm и package.json [можно почитать тут](https://docs.npmjs.com/files/package.json)
* Описание файлов проекта и их предназначение [можно почитать тут](https://angular.io/docs/ts/latest/guide/setup-systemjs-anatomy.html)
* Про загрузчик модулей SystemJS [можно почитать тут](https://github.com/systemjs/systemjs/blob/master/docs/es6-modules-overview.md)
* Ну и у самого Angular есть хорошая документация:
    * [Гайды и инструкции](https://angular.io/docs/ts/latest/guide/)
    * [Пошаговый tutorial, в котором с нуля шаг за шагом пишется приложение](https://angular.io/docs/ts/latest/tutorial/)
    * [API reference](https://angular.io/docs/ts/latest/api/)


## Используемые библиотеки и компоненты

На текущий момент в качестве эксперимента в приложение включены следующие компоненты:

* Инструменты сборки [node-sass](https://github.com/sass/node-sass), компилирующие sass в css 
* Библиотека UI-компонент [Angular Material](https://material.angularjs.org/latest/) со стилизацией темы под корпоративные цвета 
* Демо-страничка с компонентами Angular Material app/pages/demo
* Библиотека [Twitter Bootstrap 3](http://getbootstrap.com/getting-started/) 
* Байндинги Bootstrap для Angular [ng2-bootstrap](http://valor-software.com/ng2-bootstrap/#/)
* Библиотека глифовых иконок [Font Awesome](http://fontawesome.io/icons/) 
