---
title: PlayCanvas 服务
layout: usermanual-page.hbs
position: 1
---

最快，最简单以及最方便的方式就是将您的游戏发布在PlayCanvas.com。

在PlayCanvas中发布包含了一下两个步骤：

1. Publish a new **Build**
2. Set the build as the **Primary Build**

为了能顺利发布游戏，用户需要在程序中添加至少一个场景。

## Publishing a new Build

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

![Publish Button][1]

* This will open up the Publishing dialog. Here you can publish a build or download a build for self-hosting.

![Publish][2]

* Click the PUBLISH button next to "Publish on PlayCanvas".

![Publish New Build][3]

* You will then have to fill out some details about your new build. The available fields are:

  * *Image*: Click on the image to upload a different one if you want. This will be used when sharing the build on Social Media.
  * *Title*: The title of your build.
  * *Description*: The description of your build. This will be used when sharing the link of your build on Social Media.
  * *Version*: The version is there to help you distinguish one build from another. Use a value that makes sense to you.
  * *Release Notes*: Enter any new changes you made for this build. Again like the Version, this will only be shown to you so that you keep better track of your builds.
  * *Concatenate Scripts*: Check this to combine all of your PlayCanvas scripts into a single JavaScript file.
  * *Minify Scripts*: Check this to minify your PlayCanvas scripts to reduce the file size.
  * *Generate Source Map*: Include Source Maps with the build. This can be useful for debugging but is generally disabled when publishing a production version of your app.
  * *Optimize Scene Format*: Compresses the scene JSON up to 50%. Read more [here][6].

![Select scenes][4]

* Select the Scenes you want to include in your build from the list. Notice that the Scene with the active banner icon will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

Builds are given permanent link in the form `https://playcanv.as/b/BUILD_ID/`. This link will be valid until you delete the build. If you want to share a link to your game, you should probably use the published project link explained below.

## Selecting a Primary Build

单击相同弹出窗口上的版本。

![版本][5]

在这里，您可以看到现有已发布版本的列表。

You can also set the Primary Build for your project, by clicking on the banner icon on the left of each build. This will be the build that users play when they click on the PLAY button on the project's home page.

保存一个单一的链接用于指向游戏的最新版本是非常有用的。这就不需要去担心当我们删除一个旧项目时我们会破坏链接。这就是为什么每个工程都有一个首要项目链接。这将会存在于`https://playcanv.as/p/PROJECT_ID`

<div class="alert alert-info">
如果用户分享一个链接到游戏中，请使用首要工程链接。这表明当用户知道这个链接不会因为重新发布而改变。
</div>

The first time you publish a build, it will automatically become the Primary Build. For any subsequent build, you can choose when to assign it to be the Primary Build. This means that you can publish builds and test them before finally publishing them to your audience.

[1]: /images/user-manual/publishing/toolbar-publish.png
[2]: /images/user-manual/publishing/dialog-publish.png
[3]: /images/user-manual/publishing/dialog-publish-build.png
[4]: /images/user-manual/publishing/dialog-publish-build-scenes.png
[5]: /images/user-manual/publishing/dialog-builds.png
[6]: /user-manual/optimization/optimizing-scene-format
