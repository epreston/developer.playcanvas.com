---
title: Группа компоновки
layout: usermanual-page.hbs
position: 9
---

Компонент LayoutGroup позволяет сущности определять размер и положение дочерних компонентов элементов.

См. раздел [Группы компоновки][0] для получения дополнительной информации.

![Компонент LayoutGroup][1]

## Свойства

| Свойство       | Описание |
|----------------|-------------|
| Ориентация     | Определяет, должна ли компоновка идти горизонтально или вертикально. |
| Обратный Х     | Меняет порядок дочерних элементов вдоль оси x. |
| Обратный Y     | Меняет порядок дочерних элементов вдоль оси y. |
| Выравнивание   | Определяет горизонтальное и вертикальное выравнивание дочерних элементов. Значения варьируются от 0 до 1, где [0, 0] - это нижний левый угол, а [1, 1] - верхний правый угол. |
| Отступ         | Отступ, который должен быть применен внутри контейнера перед позиционированием любых дочерних элементов. Задается как значения слева, снизу, справа и сверху. |
| Расстояние      | Расстояние, которое должно быть применено между каждым дочерним элементом. |
| Подгонка ширины  | Логика подгонки, которая должна быть применена при позиционировании и масштабировании дочерних элементов. |
| Подгонка высоты | Логика подгонки, которая должна быть применена при позиционировании и масштабировании дочерних элементов. |
| Перенос        | Определяет, следует ли переносить дочерние элементы на новую строку/столбец, когда размер контейнера превышен. |

## Интерфейс сценариев

Вы можете управлять свойствами компонента LayoutGroup с помощью [компонента сценария][2]. Интерфейс сценариев компонента LayoutGroup находится [здесь][3].

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html
