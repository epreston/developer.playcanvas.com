---
title: Rigid Body
layout: usermanual-page.hbs
position: 14
---

RigidBodyを使用すると、エンティティがシーンの物理シミュレーションに参加できるようになります。これにより、エンティティの移動を現実的にシミュレートできます。コンポーネントインターフェースは、 'Type'属性に基づいて異なる属性を動的に表示します。

RigidBodyは、コンポーネントパネル右上のトグルを使用して有効または無効にできます。有効になっており、同様にCollisionコンポーネントを持つ場合、RigidBodyは物理シミュレーションに参加します。

#### Static

![Rigid Body component (Static)][1]

#### Dynamic (and Kinematic)

![Rigid Body component (Dynamic)][2]

#### Kinematic

![Rigid Body component (Kinematic)][3]

注意:RigidBodyの形状を定義するには、同じエンティティに[collision component][4]を追加する必要があります。そうでない場合、RigidBodyには効果がなく、物理シミュレーションに参加しません。

## プロパティ

| プロパティ        | 説明 |
|-----------------|-------------|
| Type            | ボディのタイプ:<ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | ボディの質量。シーンのワールドユニットがメートルの場合、質量の単位はキログラムです。 |
| Linear Damping  | ボディが1秒あたり失う線形速度の割合を指定します。 |
| Angular Damping | ボディが1秒あたり失う角速度の割合を指定します。 |
| Linear Factor   | 各ワールド軸でボディの線形移動の乗数。任意の軸の値が0に設定されている場合、この軸での移動は発生しません。- 2D ゲームや 1D/2D ムーブメントの作成に役立ちます。 |
| Angular Factor  | 各ワールド軸周りのボディの角度(回転)運動の乗数。任意の軸に対して0に設定されている場合、この軸の回転は発生しません。 |
| Friction        | 他のボディに接触している場合、体が速度をどれだけ早く失うかを制御します。 |
| Restitution     | 0から1までのボディのバウンス性の測定値。警告:1に設定すると、移動するボディが止まらなくなります(または、1未満の復元力を持つ他のボディと衝突する、または停止がスクリプト化されている場合)。 |

## スクリプトインターフェース

[Scriptコンポーネント][5]を使用して、RigidBodyのプロパティを制御できます。RigidBodyのスクリプトインターフェースは[こちら][6]にあります。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /api/pc.RigidBodyComponent.html
