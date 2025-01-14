---
title: Основной ввод с клавиатуры
layout: tutorial-page.hbs
tags: input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405804/513097-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/rFZGQWCi/?overlay=false" title="Основной ввод с клавиатуры"></iframe>

*Кликните, чтобы сфокусироваться, затем нажмите `стрелка влево`, `стрелка вправо` и `пробел`, чтобы повернуть куб. Нажмите и отпустите клавишу 'a', чтобы изменить цвет.*

Обработка клавиатуры в движке PlayCanvas предоставляется объектом `pc.Keyboard`. Объект Keyboard предоставляет простой интерфейс
для общих операций с клавиатурой, таких как проверка, нажата ли клавиша или удерживается. Он также устраняет различные проблемы совместимости между браузерами при
обработке кодов клавиш и символов.

Посмотрите на сцену ввода с клавиатуры в [проекте учебников][1]. Вот код для этого учебника:

```javascript
var KeyboardHandler = pc.createScript('keyboardHandler');

KeyboardHandler.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

KeyboardHandler.attributes.add('whiteMaterial', {
    type: 'asset',
    assetType: 'material'
});

// инициализация кода, вызываемого один раз для каждой сущности
KeyboardHandler.prototype.initialize = function() {
    // Используйте on() для прослушивания событий на устройстве клавиатуры.
    // Аргументы:
    // 1) Имя события для прослушивания
    // 2) Функция обратного вызова, которая вызывается при возникновении события
    // 3) (необязательно) Значение, которое будет использоваться для 'this' в функции обратного вызова

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
};

// код обновления, вызываемый каждый кадр
KeyboardHandler.prototype.update = function(dt) {
    /*
     * Обратите внимание, что в демонстрации нажатие и удержание стрелок не
     * заставляет блок вращаться. wasPressed() используется для обнаружения
     * нажатия клавиши, которое произошло с момента последнего кадра и будет вызываться
     * только один раз, даже если клавиша удерживается.
     */
    var angle = 0;
    if (this.app.keyboard.wasPressed(pc.KEY_LEFT)) {
        angle = -5;
    } else if (this.app.keyboard.wasPressed(pc.KEY_RIGHT)) {
        angle = 5;
    }

    /*
     * Обратите внимание, что нажатие и удержание пробела заставляет блок
     * непрерывно вращаться. isPressed() используется для обнаружения, если
     * клавиша нажата прямо сейчас. Таким образом, это будет верно каждый кадр, пока
     * клавиша все еще нажата.
     */
    if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
        angle = 1;
    }

    // Обновление вращающегося куба
    this.entity.rotateLocal(0, angle, 0);
};

/*
* Обработчик событий, вызываемый при нажатии клавиши
*/
KeyboardHandler.prototype.onKeyDown = function (event) {
    // Проверьте event.key, чтобы определить, какая клавиша была нажата
    if (event.key === pc.KEY_A && this.redMaterial) {
        this.entity.render.meshInstances[0].material = this.redMaterial.resource;
    }

    // Когда нажата пробел, это прокручивает окно.
    // Вызов preventDefault() на исходном событии браузера останавливает это.
    event.event.preventDefault();
};

/*
* Обработчик событий, вызываемый при отпускании клавиши
*/
KeyboardHandler.prototype.onKeyUp = function (event) {
    // Проверьте event.key, чтобы определить, какая клавиша была нажата
    if (event.key === pc.KEY_A && this.whiteMaterial) {
        this.entity.render.meshInstances[0].material = this.whiteMaterial.resource;
    }
};
```

Существует два способа обнаружения ввода с клавиатуры. Первый выполняется в методе обновления ваших скриптов. Используйте `isPressed()` и `wasPressed()` и проверьте, нажата ли в данный момент клавиша или только что была нажата. Второй способ использует события для реагирования на нажатие или отпускание клавиши по мере их возникновения.

## `isPressed` vs `wasPressed`

В приведенной выше демонстрации вы можете увидеть разницу в поведении между `isPressed()` и `wasPressed()`.

Когда вы нажимаете и удерживаете клавиши со стрелками влево или вправо, куб будет вращаться на 5°, но он будет вращаться только один раз. Это связано с тем, что `wasPressed()` возвращает значение true только для кадра сразу после нажатия клавиши.

Если вы нажимаете и удерживаете пробел, вы увидите, что куб непрерывно вращается на 1° за кадр. Это связано с тем, что `isPressed()` возвращает значение true для каждого кадра, в котором нажата клавиша.

### `isPressed(key)`

`isPressed(key)` проверяет, нажата ли в данный момент клавиша `key`, и возвращает значение true, если это так. Она будет возвращать значение true для каждого кадра, пока клавиша нажата.

### `wasPressed(key)`

`wasPressed(key)` проверяет, была ли нажата клавиша `key` *с последнего кадра*. `wasPressed()` вернет значение true только один раз для одного нажатия клавиши.

## События

Второй способ обработки нажатий клавиш - это прослушивание событий. На устройстве Keyboard поддерживаются два события клавиатуры:

* `pc.EVENT_KEYDOWN`
* `pc.EVENT_KEYUP`

События клавиатуры [DOM][3] реализованы по-разному в разных браузерах, поэтому движок PlayCanvas предоставляет события на объекте `pc.Keyboard`, чтобы вы могли использовать один и тот же код везде. Когда события клавиатуры срабатывают, обработчику событий передается объект `pc.KeyboardEvent`, который содержит код клавиши, которая была нажата или отпущена.

Обратите внимание, что мы также передаем третий аргумент в on(), который является `this` или самим экземпляром скрипта. Третий аргумент в on() используется в качестве `this` в обратных вызовах событий, поэтому нам нужно передать его сюда, иначе он не будет установлен на правильный объект.

## Коды клавиш

Определение нажатой клавиши выполняется с использованием кодов клавиш. Это числовые значения, которые соответствуют клавише на клавиатуре. Например, pc.KEY_A - это клавиша `A`, pc.KEY_LEFT - это клавиша со стрелкой влево.

Обратите внимание, что вы всегда должны использовать перечисление `pc.KEY_*`, а не числовые значения. Поскольку фактическое значение этих констант может измениться в будущем.

## Попробуйте сами

Попробуйте в полноэкранном режиме [здесь][2] или в верхней части страницы. Сравните нажатие и удержание клавиш со стрелками и нажатие и удержание пробела.

[1]: https://playcanvas.com/project/405804/overview/tutorial-basic-keyboard-input
[2]: https://playcanv.as/p/rFZGQWCi/
[3]: /user-manual/glossary#dom
