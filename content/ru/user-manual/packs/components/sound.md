---
title: Звук
layout: usermanual-page.hbs
position: 19
---

Компонент Sound управляет воспроизведением аудиофрагментов.

![Компонент звука][1]

Каждый компонент Sound содержит "Слоты", которые отвечают за воспроизведение звуков. Каждому слоту можно назначить разный аудио Asset, и они могут воспроизводиться независимо друг от друга.

Вы можете добавить новый слот, нажав на кнопку "ADD SLOT". Вы можете удалить слот, нажав на значок корзины в заголовке каждого слота.

Компонент Sound можно включить или отключить с помощью переключателя в верхнем правом углу панели компонента. Если компонент включен, он будет воспроизводить слоты, отмеченные как Auto Play. Остальные слоты могут быть воспроизведены с помощью скриптов.


## Свойства компонента

| Свойство        | Описание |
|-----------------|-------------|
| Positional      | Если установлен флажок, компонент будет воспроизводить аудио-ассеты так, как если бы они воспроизводились с местоположения сущности в 3D-пространстве. |
| Volume          | Громкость, которая будет умножаться на громкость каждого слота при воспроизведении аудио-ассета. |
| Pitch           | Высота тона, которая будет умножаться на высоту тона каждого слота при воспроизведении аудио-ассета. Значение 1 означает, что аудио воспроизводится на исходной высоте тона. |
| Ref Distance    | Ссылочное расстояние для уменьшения громкости по мере удаления источника звука от слушателя. |
| Max Distance    | Максимальное расстояние от слушателя, на котором прекращается падение аудио. Обратите внимание, что громкость аудио не обязательно равна 0 после этого расстояния, но просто больше не падает. |
| Distance Model  | Определяет, какой алгоритм использовать для уменьшения громкости звука при его удалении от слушателя. Может быть одним из Linear, Inverse или Exponential. |
| Roll-off Factor | Скорость, с которой происходит падение громкости. |

## Свойства слота

| Свойство        | Описание |
|-----------------|-------------|
| Name            | Имя слота. Это имя, которое вы будете использовать для обращения к этому слоту в коде. |
| Asset           | Аудио-ассет для воспроизведения. |
| Range Start     | Начальная точка звука в аудио-ассете, в секундах. Вы можете использовать это, если не хотите воспроизводить весь аудио-ассет, а только его часть. |
| Range Duration  | Продолжительность звука для воспроизведения, начиная с Range Start, в секундах. Например, у вас может быть аудио-ассет с несколькими звуками. Чтобы этот слот воспроизводил такой звук, вы можете определить его время начала и продолжительность. |
| Auto Play       | Если установлен флажок, слот будет воспроизводиться при загрузке. В противном случае, слот должен быть воспроизведен с использованием скрипта. |
| Overlap         | Если установлен флажок, этот слот будет воспроизводить свой звук без предварительной остановки. Overlap следует использовать для одноразовых звуков, которые нужно воспроизводить повторно. Перекрывающиеся звуки не останавливаются при уничтожении сущности, а только когда они заканчиваются или когда вы вручную останавливаете их в скрипте. |
| Loop            | Если установлен флажок, слот будет зацикливаться непрерывно. В противном случае, он будет воспроизведен один раз до завершения. |
| Volume          | Громкость аудио-ассета, воспроизводимого слотом. |
| Pitch           | Высота тона, на которой воспроизводится аудио. Значение 1 означает, что аудио воспроизводится на исходной высоте тона. |

## Интерфейс сценариев

Вы можете управлять свойствами компонента Sound с помощью [компонента сценария][2]. Интерфейс сценариев для компонента Sound находится [здесь][3].

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.SoundComponent.html
