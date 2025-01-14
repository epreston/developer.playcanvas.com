---
title: Модель
layout: usermanual-page.hbs
position: 11
---

Компонент Model позволяет отображать примитивную форму или модель ассетов.

Компонент Model можно включить или отключить с помощью переключателя в верхнем правом углу панели компонентов. Если включено, модель будет добавлена в сцену и отображена.

![Компонент модели][1]

## Свойства

| Свойство              | Описание |
|-----------------------|-------------|
| Тип                   | Тип модели для отображения. Может быть: <ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Cone</li><li>Cylinder</li><li>Plane</li><li>Sphere</li></ul> |
| Asset                 | Модель ассетов, отображаемая этим компонентом модели. Применяется только к моделям типа 'asset'. Только одна модель может быть отображена на одном компоненте модели. |
| Cast Shadows          | Если включено, модель, отображаемая этим компонентом, будет проецировать тени на другие модели в сцене. |
| Cast Lightmap Shadows | Если включено, модель, отображаемая этим компонентом, будет проецировать тени на карты освещения. |
| Receive Shadows       | Если включено, модель, отображаемая этим компонентом, будет получать тени, проецируемые другими моделями в сцене. |
| Static                | Если модель никогда не двигается, установите этот флажок в качестве подсказки для движка для определенных оптимизаций. |
| Lightmapped           | Если включено, эта модель не получает освещение от динамических источников света. Вместо этого она получает освещение, создаваемое источниками света карты освещения. |
| Batch Group           | Группа Batch, к которой принадлежит эта модель. Подробнее о Batching [здесь][5]. |

## Интерфейс сценариев

Вы можете управлять свойствами компонента Model с помощью [компонента сценария][2]. Интерфейс сценариев компонента Model находится [здесь][3].

## Настройка материалов

Вы можете узнать, как настроить материалы вашей модели [здесь][4].

[1]: /images/user-manual/scenes/components/component-model.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.ModelComponent.html
[4]: /user-manual/assets/materials/#assigning-materials
[5]: /user-manual/optimization/batching
