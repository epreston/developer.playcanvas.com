---
title: Свет
layout: usermanual-page.hbs
position: 10
---

Компонент Light добавляет динамический источник света к Entity. Свойство "Type" определяет тип прикрепленного света и доступные другие свойства.

Компонент Light можно включить или выключить с помощью переключателя в верхнем правом углу панели компонента. Если включено, свет будет освещать сцену.

#### Направленный

![Компонент света (направленный)][1]

#### Омни

![Компонент света (омни)][2]

#### Прожектор

![Компонент света (прожектор)][3]

## Свойства

| Свойство           | Описание |
|--------------------|-------------|
| Type               | Может быть: <ul><li>Directional: свет, идущий в равномерном направлении</li><li>Omni: свет, идущий во всех направлениях вокруг омни</li><li>Spot: свет, идущий от вершины конуса</li></ul> |
| Color              | Цвет излучаемого света. |
| Intensity          | Интенсивность света, действует как скалярное значение для цвета света. Это значение может превышать 1. |
| Range              | Только для Omni и Spot. Расстояние от источника прожектора, при котором его вклад падает до нуля. |
| Falloff Mode       | Только для Omni и Spot. Контролирует скорость затухания света от его положения. |
| Cone Angle         | Только для Spot. Внутренний и внешний углы конуса, измеряемые от направления прожектора, при которых свет падает от максимума до нуля. |
| Bake Lightmap      | Включить запекание карты освещения от этого света. |
| Affect             | Определяет, какие типы объектов освещаются этим светом. Может быть любой комбинацией динамически освещаемых или освещаемых объектов. |
| Cast Shadows       | Если установлено, свет заставит модели, отбрасывающие тени, отбрасывать тени. |
| Shadow Update Mode | Определяет, когда обновляется теневая карта для этого света. Может быть: <ul><li>Once: сгенерировано один раз и никогда больше. Полезно, если отбрасыватели, приемники и свет статичны.</li><li>Realtime: обновляется каждый кадр.</li></ul> |
| Resolution         | Разрешение теневой карты, создаваемой этим источником света. Это свойство используется только при установленном флажке Cast Shadows. Высокое значение приведет к более точной тени, но будет стоить производительности. |
| Distance           | Только для направленных светов. Расстояние тени - это максимальное расстояние от камеры, за которым тени от направленных светов больше не видны. Меньшие значения создают более детализированные тени. Чем ближе предел, тем меньше данных о тени должно быть сопоставлено и представлено любой теневой карте; пиксели теневой карты сопоставляются пространственно, и чем меньше расстояние, которое должна покрыть теневая карта, тем меньше пикселей и, следовательно, больше разрешение любой тени. |
| Shadow Type        | Алгоритм теневого отображения для использования. Выбор повлияет на внешний вид и производительность теней. Может быть: <ul><li>Shadow Map: PCF (Percentage Closer Filtering) теневые карты.</li><li>Variance Shadow Map (8bit): Теневые карты с низкой точностью. VSM обычно мягче, чем тени PCF.</li><li>Variance Shadow Map (16bit): Теневые карты средней точности. Использует вдвое больше видеопамяти, чем 8-битный VSM.</li><li>Variance Shadow Map (32bit): Теневые карты с высокой точностью. Использует вдвое больше видеопамяти, чем 16-битный VSM.</li></ul> |
| Shadow Bias        | Значения смещения позволяют настроить тени для устранения артефактов рендеринга, а именно "акне тени" и "петер-паннинг". Два значения - это смещение тени и смещение нормали. |
| Cookie             | Только для Omni и Spot. Текстурный Asset, который будет проецироваться от света. |
| Cookie Intensity   | Только для Omni и Spot. Определяет силу текстуры Cookie. |
| Cookie Falloff     | Только для Spot. Отключить затухание прожектора. |

## Интерфейс сценариев

Вы можете управлять свойствами компонента Light с помощью [компонента сценария][4]. Интерфейс сценариев компонента Light находится [здесь][5].

[1]: /images/user-manual/scenes/components/component-light-directional.png
[2]: /images/user-manual/scenes/components/component-light-point.png
[3]: /images/user-manual/scenes/components/component-light-spot.png
[4]: /user-manual/packs/components/script
[5]: /api/pc.LightComponent.html
