---
title: Окружающая Окклюзия
layout: usermanual-page.hbs
position: 4
---

Окружающая окклюзия - это техника приближения того, сколько света попадает на поверхность, основанная на ее закрытии окружающей средой.

В PlayCanvas окружающее освещение умножается на карту AO, как диффузное, так и зеркальное.

![Сравнение окружающей окклюзии: без/с][4]
*Слева: без AO; Справа: с глобальным AO*

Карта AO может быть разного масштаба. Например, детальная текстура AO, показывающая трещины на поверхности, или мировая карта AO с большим теневым эффектом разных частей модели. Большая карта AO будет иметь больше эффекта, она обычно соответствует картам освещения на UV1 и является более важной.

## Рендеринг глобального AO

Рендеринг AO может быть выполнен с использованием популярных инструментов 3D-моделирования и архитектурной визуализации. Это практически то же самое, что и рендеринг Lightmap, который описан в [разделе Lightmapping][0].

С небольшими различиями, где специальный материал применяется ко всей геометрии, который будет окрашивать его так, чтобы он выглядел как AO, и разные настройки во время рендеринга в текстуру.

В 3D's Max с VRay это делается путем создания материала типа **VRayDirt** и режима **Ambient Occlusion**, где **radius** можно изменить для получения желаемых результатов.

![3D's Max: Материал окружающей окклюзии VRay][1]

Этот материал должен быть применен ко всей статической геометрии, которая должна быть на карте окружающей окклюзии. В 3D's Max это можно сделать либо вручную, применяя его к отдельным объектам, либо с помощью настроек рендеринга VRay, используя свойство **Override mtl**. Таким образом, сохраняются индивидуальные материалы, и это облегчает жизнь.

![3D's Max Настройки рендеринга VRay: Override mtl][2]

Затем нам нужно получить эти данные в текстуру. В 3D's Max это делается с помощью [Render To Texture][3], так же, как и во время рендеринга Lightmapping, за исключением опции **output**, которая должна использовать **VRayCompleteMap**.

Текстура AO не нуждается в хранении очень подробной информации и визуально не страдает от артефактов сжатия текстур. Поэтому JPEG является экономичным и подходящим форматом для этого.

## Загрузка в редактор

Просто загрузите текстуру в редактор и примените ее на слот Ambient Occlusion на материалах.

![Редактор карты окружающей окклюзии][5]

## Пример

Вы можете [изучить пример][6], который использует глобальную окружающую окклюзию, описанную выше, и его [проект][7].

[![PlayCanvas Lightmapping][8]][6]
*Освещение в этой сцене реализовано с использованием текстур Lightmap и AO и Box Projected IBL (отражения)*

[0]: /user-manual/graphics/lighting/lightmapping/
[1]: /images/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png
[2]: /images/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png
[3]: /user-manual/graphics/lighting/lightmapping#render-to-texture
[4]: /images/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg
[5]: /images/user-manual/graphics/lighting/lightmapping/editor-ao-map.png
[6]: https://playcanv.as/p/zdkARz26/
[7]: https://playcanvas.com/project/446587/overview/archviz-example
[8]: /images/user-manual/graphics/lighting/lightmapping/playcanvas-lightmapping-scene.jpg
