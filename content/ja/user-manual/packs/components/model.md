---
title: Model
layout: usermanual-page.hbs
position: 11
---

Modelコンポーネントを使用すると、エンティティにプリミティブシェイプまたはModelアセットをレンダリングすることができます。

Modelコンポーネントは、コンポーネントパネルの右上にあるトグルを使用して有効または無効にできます。有効にすると、モデルがシーンに追加され、レンダリングされます。

![Modelコンポーネント][1]

## プロパティ

| プロパティ              | 説明 |
|-----------------------|-------------|
| Type                  | レンダリングされるモデルの種類。次のものがあります:<ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Cone</li><li>Cylinder</li><li>Plane</li><li>Sphere</li></ul> |
| Asset                 | このModelコンポーネントでレンダリングされるModelアセット。Typeが「asset」の場合にのみ適用されます。Modelコンポーネントごとに1つのモデルしかレンダリングできません。 |
| Cast Shadows          | このコンポーネントでレンダリングされるモデルが、シーン内の他のモデルに影を落とす場合は有効にしてください。 |
| Cast Lightmap Shadows | このコンポーネントでレンダリングされるモデルが、ライトマップに影を投影する場合は有効にしてください。 |
| Receive Shadows       | このコンポーネントでレンダリングされるモデルが、シーン内の他のモデルによってキャストされた影を受け取る場合は有効にしてください。 |
| Static                | モデルが常に動かない場合は、このボックスをオンにしてエンジンに最適化するように指示してください。 |
| Lightmapped           | このモデルがダイナミックライトからのライティングを受け取らず、ライトマップライトによって生成されたライティングを受け取る場合は、有効にしてください。 |
| Batch Group           | このモデルが所属するバッチグループ。バッチングについては[こちら][5]を参照してください。 |

## スクリプトインターフェイス

[Scriptコンポーネント][2]を使用して、Modelコンポーネントのプロパティを制御できます。Modelコンポーネントのスクリプトインターフェイスは[こちら][3]です。

## マテリアルのカスタマイズ

モデルのマテリアルをカスタマイズする方法については、[こちら][4]を参照してください。

[1]: /images/user-manual/scenes/components/component-model.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.ModelComponent.html
[4]: /user-manual/assets/materials/#assigning-materials
[5]: /user-manual/optimization/batching
