---
title: Физические материалы
layout: usermanual-page.hbs
position: 1
---

Чтобы использовать физически основанный рендеринг в PlayCanvas, вам нужно понять, как настроен физический материал и как изменение различных параметров повлияет на его свойства.

В этом разделе мы поговорим о наиболее полезных свойствах материала, и вы можете увидеть в живых демонстрациях, как изменение их влияет на внешний вид материала.

Сначала заметка о кубических картах и рабочих процессах

## Освещение на основе изображений

[Сначала IBL][6], потому что неизбежно вы окажетесь в редакторе и создадите материалы, и будете интересоваться, почему ваши материалы не выглядят так, как образцы ниже. **Физические материалы с предварительно отфильтрованным HDR CubeMap выглядят замечательно!**

## Металличность и спекулярный рабочий процесс

![Workflows][4]

PBR часто разделяется на два разных метода создания ассетов или рабочих процессов. Эти два рабочих процесса эквивалентны и дают одинаковые результаты. Вам решать, какой из них выбрать. В PlayCanvas мы обычно выбираем рабочий процесс "металличность", так как мы считаем, что карта металличности проще создавать, и так как она имеет только один канал, она обычно более эффективна.

Рабочий процесс **металличность** включает установку значения металличности или создание карты металличности, которая определяет, какие области материала являются металлическими или неметаллическими. Обычно это простой двоичный выбор. 1 для металла, 0 для неметалла. Редко бывает значение между двумя.

Рабочий процесс **спекуляр** включает установку спекулярного значения или создание спекулярной карты, которая определяет цвет и интенсивность отраженного света для вашего материала.

Хорошее объяснение различий можно найти в [блоге Marmoset Toolbag][5].

Переходим к материалам...

# Свойства материалов и карты

## Диффузия

Цвет диффузии - это базовый цвет материала. Это значение цвета RGB. Для чистых чистых (металл, пластик) веществ это может быть постоянным значением, но также может быть предоставлено в виде текстуры карты диффузии. Обратите внимание, что обычно следует избегать включения деталей освещения (теней или светлых участков) на вашей карте диффузии, так как это может быть применено на других картах.

Он также может быть известен как **альбедо** или **базовый цвет**.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?color" title="Physical Materials - Diffuse"></iframe>

Часто можно найти диаграммы записанных значений для диффузных/альбедо значений в интернете.

![Metals][3]

| Материал | RGB                                      |
|----------|------------------------------------------|
| Золото   | (1.000, 0.766, 0.336) или [255, 195, 86]  |
| Серебро  | (0.972, 0.960, 0.915) или [248, 245, 233] |
| Медь     | (0.955, 0.637, 0.538) или [244, 162, 137] |

## Металличность

Значение металличности является частью рабочего процесса **металличность**. Металличность - это одно значение от 0 до 1, которое определяет, является ли материал металлом (1) или неметаллом (0).

<div class="alert-info">
Значение металличности почти всегда должно быть 0 или 1. Редко вам понадобится значение где-то между этими двумя.
</div>

Вы также можете предоставить карту металличности, которая позволяет определить конкретные области вашего материала как металлические или неметаллические.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?metal" title="Physical Materials - Metalness"></iframe>

## Глянцевость

Глянцевость используется в рабочих процессах **металличность** и **спекуляр** и определяет, насколько гладкой является поверхность вашего материала. Глянцевость будет влиять на то, насколько размытыми или четкими будут отражения на материале или насколько широкими или узкими будут спекулярные блики. Глянцевость предоставляется в виде одного значения от 0 до 100 или карты глянцевости.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?gloss" title="Physical Materials - Glossiness"></iframe>

Некоторые системы PBR используют **шероховатость** вместо глянцевости. Шероховатость является обратной глянцевости. Если вам нужно преобразовать карту шероховатости в карту глянцевости, просто инвертируйте ее.

Иногда глянцевость и шероховатость называют значением **микроповерхности**.

## Все вместе

Эти три свойства **диффузия**, **металличность** и **глянцевость** являются основой системы физических материалов. Вы можете попробовать разные комбинации в живой демонстрации ниже.

Существует множество других дополнительных свойств, которые можно изучить и использовать для создания отличных материалов, таких как Ambient Occlusion, Emissive, Opacity, Normal и Height maps.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/" title="Physical Materials - All"></iframe>

[1]: https://store.playcanvas.com
[2]: /user-manual/glossary#high-dynamic-range
[3]: /images/user-manual/graphics/physical-rendering/metals.jpg
[4]: /images/user-manual/graphics/physical-rendering/workflows.jpg
[5]: https://marmoset.co/posts/pbr-texture-conversion/
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
