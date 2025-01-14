---
title: ライティング
layout: usermanual-page.hbs
position: 2
---

シーンの照明は、表面のマテリアル特性と適用された光源に基づいて、画面にレンダリングされるピクセルの色やシェーディングを計算するプロセスです。

PlayCanvasでは、照明は大きく「ダイナミックライト」と「ライトマップ」の2つに分けることができます。

## ダイナミックライト (Dynamic Lights)

実行時に計算される照明の計算は、「ダイナミック」として分類されます。毎フレーム、エンジンはライトエンティティの種類、位置、プロパティから表面に落ちる光の量を計算し、マテリアルに色を付けます。

## ライトマップ (Lightmaps)

移動しないライトやジオメトリに対しては、照明情報を事前に決定することが望ましい場合があります。この情報はライトマップテクスチャに保存され、表面のマテリアルに適用されます。この方法は、静的なライトを持ち、前計算時間を掛ける代償としてランタイムコストが非常に低いです。

ライトマップを作成する方法は2つあります。

### 外部ライトマップの生成

多くの3D制作ツールには、3DS Max、Maya、Blenderなどのライトマップ生成が含まれているか、アドオンとして提供されています。これらのツールは一般的にライトマップテクスチャを生成し、通常のアセットとしてアップロードし、標準の物理マテリアルのLightmapスロットに追加できます。

### PlayCanvas実行時ライトマップの生成

PlayCanvasエンジンには、ライトマップを生成する組み込みの機能があります。これにより、ゲームを実行する直前に自動的にライトマップを生成することができます。この方法では、標準のLightコンポーネントを使用してシーンを変更し、直接エディターでシーンをプレビューできます。
