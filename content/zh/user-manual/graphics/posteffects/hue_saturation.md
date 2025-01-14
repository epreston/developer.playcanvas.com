---
title: 色相-饱和度 特效
layout: usermanual-page.hbs
position: 4
---

色相饱和度调整让你能够对图像被渲染后的整体色相和色彩饱和度进行调整。

这是一张没有经过处理的图片:

![Image without effect][1]

And the same image with the effect applied and changes to hue and saturation:

![Image with effect][2]

The built-in hue-saturation effect has the following attributes:

* **Hue**: The hue of the image. Ranges from -1 to 1 (-1 is 180 degrees in the negative direction, 0 no change, 1 is 180 degrees in the positive direction).
* **Saturation**: The saturation of the image. Ranges from -1 to 1 (-1 is solid gray, 0 no change, 1 maximum saturation).

Find the post-processing effect script on [GitHub][3].

[1]: /images/platform/posteffects/without_effects.png
[2]: /images/platform/posteffects/with_hue_saturation.png
[3]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-huesaturation.js
