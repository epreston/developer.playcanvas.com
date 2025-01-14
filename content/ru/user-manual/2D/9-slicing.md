---
title: 9-слайсинг
layout: usermanual-page.hbs
position: 2
---

9-слайсинг (иногда называемый 9-патч) - это техника для 2D-графики, которая разделяет одно изображение на 9 областей, которые масштабируются индивидуально, чтобы предотвратить растягивание при отображении изображения в разных размерах и с разными соотношениями сторон.

![9 Sliced Button][1]

На изображении выше вы можете увидеть 9 областей, которые определены с использованием функций редактирования текстурного атласа [Sprite Editor][2]. При добавлении на сцену с использованием [Sprite Component][3] или [Image Element Component][4] изображение можно изменить с помощью свойств ширины и высоты компонента. Каждая область масштабируется с использованием следующих правил:

* **Center** - растягивать или замостить как горизонтально, так и вертикально
* **Top, Bottom** - растягивать или замостить только горизонтально
* **Left, Right** - растягивать или замостить только вертикально
* **TopLeft, TopRight, BottomLeft, BottomRight** - не растягивать и не замостить

![Button Resize Animation][5]

## Настройка 9-слайсинга

![Setup 9-slicing][6]

Чтобы настроить 9-слайсинг спрайта, создайте рамку вокруг области, на которой вы хотите использовать 9-слайсинг, в Sprite Editor. Затем используйте синие ручки или свойство Border в Frame Inspector, чтобы установить границы, обозначающие центральную часть изображения, которую вы хотите использовать как растягиваемую часть спрайта.

Наконец, нажмите **New Sliced Sprite From Selection** чтобы создать новый спрайт с режимом отображения, установленным на *Sliced*.

## Режимы отображения

Sprite Assets могут иметь один из трех режимов отображения.

### Простые спрайты

![Simple Render Mode][7]

Режим отображения *Simple* не имеет 9-слайсинга. Используйте этот режим для обычных спрайтов.

### Слайсинг спрайты

![Sliced Render Mode][8]

Режим отображения *Sliced* растягивает части изображения. Центр растягивается горизонтально и вертикально; левые и правые секции растягиваются вертикально; верхние и нижние секции растягиваются горизонтально, а углы вообще не растягиваются.

### Замощенные спрайты

![Tiled Render Mode][9]

Режим отображения *Tiled* аналогичен режиму *Sliced*, за исключением того, что вместо растягивания секции повторяются в виде плитки. Центр замощается горизонтально и вертикально; левые и правые замощаются вертикально; верхние и нижние замощаются горизонтально, а углы вообще не замощаются.

[1]: /images/user-manual/2D/9-slicing/9-sliced-labelled.jpg
[2]: /user-manual/2D/sprite-editor
[3]: /user-manual/packs/components/sprite
[4]: /user-manual/packs/components/element
[5]: /images/user-manual/2D/9-slicing/button-resize.gif
[6]: /images/user-manual/2D/9-slicing/9-slice-setup.jpg
[7]: /images/user-manual/2D/9-slicing/simple-resize.gif
[8]: /images/user-manual/2D/9-slicing/sliced-resize.gif
[9]: /images/user-manual/2D/9-slicing/tiled-resize.gif
