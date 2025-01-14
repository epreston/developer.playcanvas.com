---
title: Глоссарий
layout: usermanual-page.hbs
position: 26
---

Вот обзор некоторых терминов, которые мы используем для описания движка и инструментов PlayCanvas.

## Приложение

Класс `Application` содержит все полезные вещи движка, необходимые для работы вашего приложения. Он управляет:

* `Scene`, которая включает иерархию сцены и настройки сцены
* `ComponentSystem`ы
* Устройства ввода (клавиатура, мышь, сенсорный экран и геймпад)

Приложение доступно из любой функции скрипта (`initialize`, `update` и так далее) как `this.app`.

## Asset

Asset - это единица данных, которая обычно импортируется в PlayCanvas из приложения для создания контента (например, Blender или 3D Studio Max). Это может быть 3D-модель, анимация, аудио-образец или изображение. Assets могут быть назначены определенным атрибутам [Components][component]. Например, можно назначить модель Asset на атрибут 'model' компонента модели. См. также [Source Assets][source-asset] и [Target Assets][target-asset].

## Asset Pipeline

Asset Pipeline - это процесс, выполняемый на серверах PlayCanvas, который преобразует загруженный [Source Asset][source-asset], например, файл сцены FBX, в один или несколько [Target Assets][target-asset], например, файл модели, материал и некоторые текстуры. Pipeline предназначен для преобразования загруженных файлов в оптимизированные версии, готовые к использованию в вашей игре. Чтобы обработать Asset через Pipeline, просто загрузите его в PlayCanvas с помощью панели инструментов или редактора PlayCanvas.

## Attribute

Атрибут - это свойство [Component][component]. Атрибуты представлены в интерфейсе редактора PlayCanvas с помощью элементов пользовательского интерфейса (выборщики, флажки, ползунки и т. д.). Атрибуты можно настраивать с помощью этих элементов управления, и после запуска вашей игры с помощью кнопки "Запуск" редактора обновления в реальном времени транслируются в подключенную игру.

## Component

Компоненты описывают свойства и функциональность [Entity][entity]. В движке PlayCanvas, вместо определения игровых объектов с помощью длинной цепочки унаследованных классов, игровые объекты определяются как Entity и затем набор компонентов.

Компоненты добавляются к сущностям через меню компонентов в редакторе PlayCanvas, или они могут быть добавлены во время выполнения через соответствующий объект `ComponentSystem`.

## DOM

DOM (Document Object Model) - это способ представления HTML-документа. Веб-браузеры предоставляют интерфейс для запроса и изменения DOM, составляющего HTML-страницу, отображаемую в браузере пользователя.

## Entity

Entity - это один из строительных блоков вашего приложения в [PlayCanvas Engine][playcanvas-engine]. Часто Entity будет представлять собой один объект в вашей игре или приложении, хотя один объект также может состоять из нескольких сущностей.

Все сущности имеют положение, вращение и масштаб. У них есть родительский узел, от которого они наследуют преобразование, и они могут иметь дочерние узлы, которым они предоставляют свое преобразование.

## Framework

Framework - это верхний слой абстракции в движке PlayCanvas. Он состоит из высокоуровневых функций, таких как система Entity-Component и интерфейс с редактором PlayCanvas. См. [API Reference][api-reference] для получения дополнительной информации.

## Gizmo

Gizmo - это элемент управления, который можно перетаскивать мышью для редактирования атрибутов Entity, обычно используется для редактирования матрицы преобразования. Gizmo состоит из трех частей, окрашенных в цвета осей в 3D-пространстве. Красный - это ось X, зеленый - ось Y, а синий - ось Z. Иногда также будут элементы управления для манипулирования более чем одной осью одновременно, например, переводной Gizmo содержит кликабельные значки плоскостей для перевода в двух измерениях одновременно, на плоскостях X и Y, Y и Z, Z и X.

## High Dynamic Range

High Dynamic Range или HDR относится к информации о цвете, которая находится вне обычного диапазона 0-1. В стандартном диапазоне 0 - это черный, а 1 - самый яркий цвет, который может показать устройство отображения. В реальном мире таких ограничений нет, например, солнце может быть во много раз ярче, чем окружающее его небо.

## Материал

Материал - это тип Asset, который определяет свойства поверхности на 3D-модели. Материал состоит из групп свойств, таких как диффузный цвет и зеркальный цвет, а также ссылок на текстурные ассеты, такие как диффузная карта и зеркальная карта. В редакторе PlayCanvas материалы можно редактировать, выбрав модель и затем щелкнув по материалу на модели в 3D-виде.

## Редактор PlayCanvas

Редактор PlayCanvas - это визуальный инструмент редактирования, который могут использовать члены вашей команды разработчиков для редактирования [Сцен][scene]. Редактор PlayCanvas используется для управления [Entity][entity].

## Движок PlayCanvas

Движок PlayCanvas - это библиотека JavaScript, которая предоставляет все функции, необходимые для создания интерактивного 3D-приложения или игры.

Программы, созданные с использованием движка PlayCanvas, будут работать непосредственно в современном веб-браузере без необходимости сторонних плагинов.

## Проект

Проект - это коллекция [Сцен][scene] и [Assets][asset], принадлежащих одному пользователю. Обычно один проект будет содержать ресурсы только для одного приложения, хотя вы можете экспортировать несколько приложений из одного проекта.

## Сцена

Сцена - это набор данных Entity, данных искусства и кодовых данных, которые могут быть загружены как единое целое. Сцена может представлять вашу всю игру или только один уровень или часть вашей игры.

## Скрипт

Скрипт - это [Asset][asset]. Он назначается на компонент Script [Component][component] на [Entity][entity]. Скрипты написаны на JavaScript. У них есть несколько предопределенных функций, которые могут быть переопределены:

* `initialize` - вызывается один раз при создании экземпляра
* `postInitialize` - вызывается один раз после вызова всех функций `initialize` скрипта
* `update` - вызывается каждый кадр
* `postUpdate` - вызывается каждый кадр после вызова всех функций `update` скрипта
* `swap` - вызывается при "горячей перезагрузке" скрипта (из-за события сохранения в редакторе кода)

## Исходный Asset

Исходный Asset - это оригинальный файл, который был загружен в PlayCanvas. Исходные Asset являются входными данными для конвейера ассетов PlayCanvas, который создает [Целевые ассеты][target-asset].

## Целевой Asset

Целевой Asset - это файл, который может быть загружен в вашу игру во время выполнения. Он будет в формате, готовом к использованию в движке. Целевые ассеты обычно являются продуктом загрузки и импорта [Исходного ассета][source-asset] через конвейер ассетов.

## Шаблон

Шаблон - это [Asset][asset], который содержит часть иерархии [Entity][entity]. У него есть корневая сущность и может иметь любое количество дочерних элементов. Шаблон - это повторно используемая сущность, которую можно динамически создавать во время выполнения или размещать несколько экземпляров в вашей [Сцене][scene]. Когда вы изменяете Asset шаблона, все экземпляры шаблона также изменятся.

## Текстура

Текстура - это [Asset][asset]. Обычно он содержит данные изображения, которые могут быть сопоставлены с 2D или 3D-геометрией. Текстуры также могут использоваться для хранения других типов обобщенных числовых данных для обработки на GPU. PlayCanvas может загружать текстуры из стандартных веб-форматов изображений (JPG, PNG и GIF). Движок также может читать сверхсжатые текстуры Basis, которые могут быть транскодированы в поддерживаемые форматы GPU при загрузке.

## Матрица преобразования

Матрица преобразования - это математическая матрица, которая представляет набор линейных преобразований. В частности: перевод, вращение и масштабирование. Это означает, что матрица преобразования может быть использована для представления положения, ориентации и размера объекта в 3D-пространстве. В движке PlayCanvas каждая [Entity][entity] имеет матрицу преобразования, доступную через метод `getLocalTransform()`.

[api-reference]: /api/
[application]: #application
[asset]: #asset
[asset-pipeline]: #asset-pipeline
[attribute]: #attribute
[component]: #component
[dom]: #dom
[entity]: #entity
[framework]: #framework
[gizmo]: #gizmo
[high-dynamic-range]: #high-dynamic-range
[material]: #material
[playcanvas-editor]: #playcanvas-editor
[playcanvas-engine]: #playcanvas-engine
[project]: #project
[scene]: #scene
[script]: #script
[source-asset]: #source-asset
[target-asset]: #target-asset
[template]: #template
[texture]: #texture
[transformation-matrix]: #transformation-matrix
