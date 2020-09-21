"use strict";
// Скрипты с defer не блокируют страницу

// Скрипты с defer всегда выполняются только когда DOM-дерево уже готово, но срабатывают до DOMContentLoaded

// Скрипты с defer загружаются в порядке очереди(последовательно)

// При наличии async страница не ждет асинхронных скриптов (содержимое просто обрабатывается и отображается)

// События DOMContentLoaded и асинхронные скрипты не ждут друг друга

// При использовании async нужно быть уверенным что скрипт независим от других скриптов и DOMContent'a

// Динамически загружаемые скрипты ведут себя как async, если async != false

//

const p = document.querySelectorAll(`p`);
console.log(p);

function loadScript(src) {
    const script = document.createElement(`script`);
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript(`js/test.js`);
loadScript(`js/some.js`);