---
title: ライトクッキーの設定
layout: tutorial-page.hbs
tags: lighting
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/409793/19BDEF-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/AGtssoOU/" title="Light Cookies"></iframe>

[完成されたプロジェクト][1]をフォークして詳細をご確認ください。

シアターでの視覚効果は、シーン全体に影を落とす形状のマスクを用いることで作り出すことがよくあります。これらのマスクを「クッカリス」または「クッキー」と呼びます。PlayCanvasを使用してWebGL上にライトクッキーを作成するには、Lightコンポーネントにテクスチャまたはキューブマップを適用します。ライトクッキーは、スポットライトおよびオムニライトに適用できます。

![Grid Cookie][2]
**シンプルなグリッドクッキーは窓の印象を与えます**

## クッキーテクスチャ (Cookie Texture)

クッキーテクスチャは、スポットLightコンポーネントのクッキーセクションに適用される通常のテクスチャアセットです。クッキーが適用されると、使用するテクスチャのチャンネルを選択できます。たとえば、シンプルなマスクを実行する場合は、アルファチャンネルだけを使用できます。また、ステンドグラスのような完全なカラーエフェクトが必要な場合は、完全なRGB値を使用できます。

![Light Settings][3]

## クッキーキューブマップ

オムニライトには、クッキーを点光源の周りの6方向に投影できるようにするキューブマップが必要です。

## 使用例

**形状のあるライト (Shaped Lights ) ** - クッキーは、ライトソースの形状をマスキングするために有用です。たとえば、シーンに窓や蛍光灯が含まれる場合、スポットライトを使用すると丸いライトを提供します。ライトの形状を細長くするか、正方形にするために、ライトの形状をマスキングできます。

![Shaped Light][5]

**トーチ** - トーチやヘッドライトは、表面を均等に照らすのではなく、明るさと暗さが「カウスティック」なエリアがあります。ライトクッキーを使用してこの効果を作成できます。

![Torch Light][4]

[1]: https://playcanvas.com/project/409793/overview/example-light-cookies
[2]: /images/tutorials/intermediate/light-cookies/window-cookie.jpg
[3]: /images/tutorials/intermediate/light-cookies/cookie-setting.jpg
[4]: /images/tutorials/intermediate/light-cookies/torch-cookie.jpg
[5]: /images/tutorials/intermediate/light-cookies/square-cookie.jpg
