---
title: 资源
layout: usermanual-page.hbs
position: 10
---

资源可以在游戏工程中被使用。资源可以是多种多样的，譬如3D模型或者音乐文件。它们有着两种不同的表现形式：源和目标。

在上传资源文件后，在上传进程会对该文件进行数据转换与优化处理，最终达到可在游戏中应用的水准。

## Type

PlayCanvas支持多种内容类型数据的导入：

* Models e.g. FBX, COLLADA, obj
* 3D Animations
* Images for textures e.g. jpg, png
* Audio e.g. mp3, ogg

当你上传一个新的文件时，该资源的类型将会根据你已经上传的文件自动设置。譬如：如果你上传的是一个PNG文件，资源类型将会被设置为“texture”（纹理）类型。

## Source Assets and Target Assets

对于资源来说另一个重要的属性就是它是一个**源**资源还是一个**目标**资源。

源资源引用的是您已经上传的原始文件。目标资源建立在通过PlayCanvas转换以及优化后生成的任何文件的输入通道的末端。

打个比方，如果你把一个Photoshop(PSD)文件作为纹理上传，PlayCanvas将会为这个PSD文件创建一个*texture*（纹理）的源资源。然后我们启动上传通道，将PSD转换成JPG文件。在进程的最后，PlayCanvas将会为新的JPG文件创建一个*texture*类型的目标资源。

在编辑器以及游戏中，用户将只会被指引至目标资源。这是因为资源在被进行格式优化并准备用于实际运行。
