---
title: 制作轻量游戏 - Part 1
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="Making a Simple Game - Part 1"></iframe>

*你可以在 [这里][3]找到完整的工程*

在本系列教程中，我们将向您展示如何使用PlayCanvas完成一个完整的游戏。 我们做了一个简单的“保持住”的游戏，其玩法是点击或选择足球以使它保持在空中。

我们将介绍以下内容:

1. **The Scene and Hierarchy**
1. Material Setup
1. The Game Script
1. Ball Physics and Input
1. Audio & Effects
1. User Interface

这并不是一个手把手的引导，但是我们会详细讲解脚本的所有部分并尝试向你解释每一块脚本是如何工作的。我们建议你将游戏工程复刻到你自己的账号下并跟随我们的讲解。

## Part 1: The Scene and Hierarchy

在PlayCanvas中您的场景由实体的层次结构描述。 每个实体在你的应用程序中是一个“东西”，它总是包含一个ID，一个名称和一个变换。 变换定义了实体在3D空间中的位置、旋转和缩放的矩阵。 要构建场景，您可以创建实体并将其排列在树结构中，该树结构显示在编辑器的左面板上。 树结构允许父实体影响他们的子物体，例如，所有的子实体继承他们的父节点的位置，旋转和缩放。 此外，如果禁用父实体，所有子实体也将被禁用。

在我们的Keepy Up游戏场景中，我们在层次结构中设置了7个顶级的实体。

![层级树][1]

### Camera Entity

相机是一个你在应用程序运行时从其中查看场景的位置的部件。 在这个游戏中，我们只有一个摄像头，它是静止的。

### Directional Light Entity

灯光用于照亮场景中的3D模型。 您一次激活的灯光越多，渲染场景所需的时间就越长，这会影响游戏的帧速率。 你应该设置为同一时间只有几个灯处于激活状态。 在这个游戏中，我们有一个单一的固定方向灯。

### Football Entity

足球是场景中的主要动态实体。 足球实体上包含3个组件。 您可以通过选择足球并查看编辑器右侧的属性面板来查看组件。 这3个组件是：

#### Sound Component

声音组件允许您播放声音文件。 每个声音组件有多个插槽，每个插槽对应一个声音文件。 您可以进行播放设置，例如声音是否会循环，音量或音高。 足球上只有一个音槽，播放的是当球弹起时产生的声音。

#### Model Component

模型组件用于将3D模型资源附加到实体。 当您在实体上启用模型组件时，3D模型将在实体的3D空间位置上呈现。 在本案例中，我们为实体附上了足球模型。

#### Script Component

脚本组件允许您将JavaScript文件附加到实体。 每个实体将在javascript文件内创建一个脚本实例，以便您可以自定义实体的行为。 我们将在第3部分详细介绍足球上的脚本。

### Background

背景实体有另一个模型组件。 这一次是形成游戏背景的背板。 使用应用于内置平面实体类型的素材资源中的体育场的纹理来创建背景。 我们在材料上使用了自发光选项，以确保背景是明亮的，不会被其它光和足球遮蔽。 这种效果有点像在老电影中使用的哑光绘画。

### Impact Effect Entity

碰撞特效实体是当球被点击弹跳时起作用的粒子效果。 我们将在第4部分中更详细地介绍它。

### 音频

音频实体中关联了更多的音频组件。这是一个用于播放背景音乐和游戏结束声效的实体。

### UI (User Interface)

UI实体是其他几个屏幕实体的父级，每个屏幕均用于游戏的用户界面。 我们将在第5部分介绍UI实体。

[第2部分][2]涵盖主要游戏脚本。

[1]: /images/tutorials/beginner/keepyup-part-one/hierarchy.jpg
[2]: /tutorials/keepyup-part-two/
[3]: https://playcanvas.com/project/406050
