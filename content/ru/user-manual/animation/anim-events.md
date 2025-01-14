---
title: Анимационные события
layout: usermanual-page.hbs
position: 5
---

Анимационные события могут использоваться для вызова слушателей событий во время воспроизведения анимации. Каждое событие связано с определенным кадром анимационного ассета, к которому оно прикреплено. Когда воспроизведение анимации достигает этого кадра, событие срабатывает, и вызывается соответствующий слушатель событий.

### Создание событий

Чтобы создать новое событие, выберите анимационный ассет в панели ассетов, для которого вы хотите создать событие. Затем вы должны увидеть кнопку `+ EVENT` в инспекторе ассетов, как показано ниже:

![Анимационный ассет с событием][1]

У каждого события есть следующие изменяемые свойства:

| Переменная | Описание |
|------------|-------------|
| time       | Определяет конкретное время воспроизведения анимации, когда должно сработать событие. Задается в секундах. |
| name       | Имя события используется для идентификации события при присоединении слушателя событий к анимационному компоненту. |
| number     | Дополнительное свойство, которое может быть установлено на любое число. Используется для передачи дополнительных сведений слушателю событий. |
| string     | Дополнительное свойство, которое может быть установлено на любую строку. Используется для передачи дополнительных сведений слушателю событий. |

### Слушатели событий

После создания события для анимационного ассета событие будет вызываться при воспроизведении этого ассета анимационным компонентом. Таким образом, вы можете присоединить слушателей к анимационному компоненту для обработки события. В следующем примере показано, как присоединить слушателей событий к анимационному компоненту:

```javascript
var AnimationEvents = pc.createScript('animationEvents');

// инициализация кода, вызываемая один раз для каждой сущности
AnimationEvents.prototype.initialize = function() {
    this.entity.anim.on('plant_foot', function (event) {
        // получаем кость ноги из строкового свойства события, либо right_foot, либо left_foot
        const footBone = this.entity.findByName(event.string);
        createDustCloudAtLocation(footBone.getPosition());
    }, this);
};
```

В один анимационный ассет (animation asset) можно прикрепить любое количество анимационных событий, которые могут использоваться любым количеством компонентов anim. Использование дополнительных свойств `number` и `string` события позволяет различать события, передаваемые одному и тому же слушателю событий.

[1]: /images/user-manual/anim/animation_asset_with_events.png
