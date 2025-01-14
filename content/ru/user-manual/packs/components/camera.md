---
title: Камера
layout: usermanual-page.hbs
position: 5
---

Компонент Camera позволяет объекту отображать сцену с определенной точки зрения.

Компонент Camera можно включить или выключить с помощью переключателя в верхнем правом углу панели компонента. Если включено, камера будет отображать сцену каждый кадр.

![Компонент камеры][1]

## Свойства

| Свойство        | Описание |
|-----------------|-------------|
| Clear Buffers   | Управляет тем, как целевой буфер отрисовки камеры очищается перед отрисовкой каждого кадра. Камера поддерживает два типа буферов: буфер цвета, который хранит видимое изображение, и буфер глубины, который хранит информацию о расстоянии отрисованного пикселя относительно положения камеры. Буферы могут быть очищены независимо: <ul><li>Color: Если выбрано, камера будет явно очищать свой целевой буфер отрисовки до выбранного цвета перед отрисовкой сцены.</li><li>Depth: Если выбрано, камера будет явно очищать буфер глубины своего целевого буфера отрисовки перед отрисовкой сцены.</li></ul> |
| Clear Color     | Цвет, используемый для очистки целевого буфера отрисовки камеры. Это свойство отображается только если выбрано 'Clear Color Buffer'. |
| Projection      | Тип проекции камеры. Варианты: <ul><li>Perspective</li><li>Orthographic</li></ul> |
| Frustum Culling | Если выбрано, камера будет отображать только те экземпляры сетки, ограниченные выровненными по осям ограничивающими рамками, которые пересекаются с видовым объемом камеры. В противном случае вся сцена будет отображаться независимо от видимости. |
| Field of View   | Угол между верхней и нижней плоскостями отсечения перспективной камеры. Это свойство отображается только если 'Projection' установлено на 'Perspective'. |
| Ortho Height    | Расстояние в мировых единицах между верхней и нижней плоскостями отсечения ортографической камеры. Это свойство отображается только если 'Projection' установлено на 'Orthographic'. |
| Near Clip       | Расстояние в пространстве камеры от точки наблюдения камеры до ближней плоскости отсечения. |
| Far Clip        | Расстояние в пространстве камеры от точки наблюдения камеры до дальней плоскости отсечения. |
| Priority        | Число, определяющее порядок, в котором виды камеры отображаются движком. Меньшие числа отображаются первыми. |
| Viewport        | Прямоугольник, который определяет область просмотра на прикрепленный целевой буфер отрисовки камеры. Это позволяет реализовать функции, такие как разделенный экран или картинка-в-картинке. Он определяется нормализованными координатами (от 0 до 1) в следующем формате: <ul><li>x: Нижняя левая координата x</li><li>y: Нижняя левая координата y</li><li>w: Ширина прямоугольника</li><li>h: Высота прямоугольника</li></ul> |

## Интерфейс сценариев

Вы можете управлять свойствами компонента Camera с помощью [компонента сценария][2]. Интерфейс сценариев компонента Camera находится [здесь][3].

[1]: /images/user-manual/scenes/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.CameraComponent.html
