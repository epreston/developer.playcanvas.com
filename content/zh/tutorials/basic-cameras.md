---
title: 摄影机入门
layout: tutorial-page.hbs
position: 3
tags: camera,basics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"
---

## Camera Entities

要查看由PlayCanvas应用程序创建的场景，就需要使用相机实体将场景呈现到屏幕。

为了从PlayCanvas编辑器运行您的场景，您必须至少添加一个活动的相机实体到您的场景。

## Creating a Camera Entity

要创建新的相机实体，您需要向实体添加一个相机[组件][1]。

* Select the root Entity of your Scene in the Entity Explorer
* Create a new Entity by selecting *New Entity* from the *Entity* menu.
* Add a Component by selecting *New Component* from *Component* menu
* Choose *Camera* when you are prompted to choose which type of Component to create

由于制作相机实体是一项常见任务，因此有一个快捷方式：在*实体*菜单中选择*新实体* - > *新建相机*。
这相当于创建一个新实体并向其中添加一个相机组件。

## Camera Properties

像所有组件一样，相机组件具有一组改变其行为的属性。

### `Enabled`

如果enabled属性为true，则当场景加载时，摄像机将渲染场景到其渲染缓冲区。 可以同时启用多个摄像头。 在需要实现分屏屏幕游戏或迷你地图的情况下，这是非常有用的。 priority属性确定已启用的摄像机的渲染顺序。

### `Clear Color Buffer`

如果选中此属性，则在渲染场景之前，相机将删除相机的帧缓冲区(即先前渲染的帧)中的所有内容，并用清晰的颜色填充。

### `Clear Color`

清除帧缓冲区的颜色，前提是已选中“清除颜色缓冲区”属性。

### `Clear Depth Buffer`

如果选中此属性，则在渲染场景之前，相机将删除之前存储在相机深度缓冲区中的所有内容。 通常，深度缓冲顺序应该被检查，但在某些情况下，你不关心渲染场景的深度顺序，禁用它可以被用作为一个优化。

### `Projection`

投影类型确定使用哪种类型的矩阵投影来将3D场景转换为呈现到页面的2D视图。

**透视**投影是游戏所用的最常见的类型。 或者，您可以使用**正交影**投影，它渲染出的场景没有透视，因此对2D游戏很有用。

### `Field of View`

相机的视场确定相机显示的场景的多少。 它以度(＆deg;)测量，因此默认值为45＆deg; 意味着从相机的位置观察视图的顶部边缘和视图的底部边缘，会形成45°的弧度。

![视野][2]

您可以在此图中看到，因为`fov'值与显示器的宽度无关，所以宽屏幕视图(浅蓝色)在垂直方向上显示相同的量，但在水平方向上比窄屏幕视图(深蓝色)更大。

### `Near Clip`

近距离剪切是指不会绘制任何在距相机的以米为单位的指定距离之内的内容。

### `Far Clip`

远景剪切是指在不会绘制距相机的以米为单位的指定距离之外的任何内容。

### `Priority`

该值是一个数字，如果启用多个摄像机，则该值确定物体渲染摄像机上的顺序。 较小的数字具有较高的优先级，将首先渲染。

### `Viewport`

视口表示相机渲染缓冲区上的一个矩形区域。 有以下格式的4个值：左下X，左下Y，宽度，高度。 这些值是归一化坐标，其中渲染缓冲区，不管维度，被认为在X和Y中映射到0..1。 因此，为了限制摄像机在屏幕的左下象限渲染，将视口设置为0,0,0.5,0.5。

[1]: /user-manual/glossary#component
[2]: /images/platform/field_of_view.png
