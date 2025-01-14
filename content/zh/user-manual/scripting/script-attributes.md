---
title: 脚本特性
layout: usermanual-page.hbs
position: 5
---

脚本属性是一个非常强大的功能，用户可以在PlayCanvas编辑器中找到它。用户可以只编写一次代码，然后稍稍更改不同实体的实例的值，以给予他们不同的属性。对于艺术家、设计师、其它非程序员团队的成员来说是十分有帮助的，这使得他们不需要进行代码编写就能够调整和修改值。

## Declaring Script Attributes

通过以下的格式在脚本文件顶部对脚本属性进行声明：

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

在这个例子中我们声明了一个叫作“speed”的属性，这个属性为数值型，默认值为80:

If you need an array of attributes set `array: true` like so:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('names', {
    type: 'string',
    array: true
});
```


## Getting Attributes into Editor

<img loading="lazy" src="/images/user-manual/scripting/script-attributes.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;">

Once you've declared your attributes the Editor needs to parse the code in order to expose the script attributes. If attributes have been changed, you need to manually refresh the attributes you can click the parse <img loading="lazy" src="/images/user-manual/scripting/parse-button.jpg" style="display: inline; vertical-align: middle;"> button.

## Accessing attributes in your code

当用户在脚本中对一个属性进行声明，这个属性将会作为变量出现在脚本实例中。比如，对已经说明了的属性“speed”，我们就可以直接使用“this.speed”。

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## Updating attributes

When you modify an attribute in the editor the changes are sent to any copies of the application launched from the editor. This means you can live edit your attributes without reloading your application. If you need to apply special behavior when an attribute changes. Use the `attr` and `attr:[name]` events to respond to changes

```javascript
MyScript.prototype.initialize = function () {
    // fires only for `speed` attribute
    this.on('attr:speed', function (value, prev) {
        // new value for speed
    });

    // fires for all attribute changes
    this.on('attr', function(name, value, prev) {
        // new attribute value
    });
}
```

## Attribute types

当用户声明一个属性时，用户同时声明了一个属性类型。这个允许了编辑器显示了用户所编辑的属性的相关控件。大多数类型为自解释，比如“boolean”，“number”以及“string”。但是有些类型需要一些进一步的解释，如下所示。查看[full attribute reference][1]更多信息。

### Entity attribute

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

实体类型使得用户引用其它在层级中的实体。这是一个很好的方法对两个实体联系在一起。


### Asset attribute

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

The Asset attribute let's you reference a project asset in your script. The asset attribute also supports the `assetType` property which limits the attribute to assets of a particular type, e.g. 'texture', 'material', 'model'.

资源属性的实时运行类型为“pc.Asset”。用户可以在实时运行时引用资源属性的资源：

```javascript
MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});

MyScript.prototype.initialize = function () {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
};

```


### Color attribute

```javascript
MyScript.attributes.add('color', { type: 'rgba' });
```

颜色属性显示了在编辑器中的颜色选择器。这里有两个选择分别为“rgb”和“rgba”，取决于用户是否希望显示alpha频道。

### Curve attribute

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // one curve
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // three curves: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // one curve for red channel
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // four curves for full color including alpha
```

曲线属性用来表示在一个值在一段时间内的变化。所有曲线的值都介于0.0到1.0之间。用户可以定义多个曲线，比如，如果用户可以通过“curves”属性对x，y，z三个值进行设置来得到一个三维位置。同样也有一个使用颜色属性的特殊曲线编辑器来修改颜色。


### Enumeration attribute

The Enumeration attribute allows you to choose one of the available options:

```javascript
MyScript.attributes.add('value', {
    type: 'number',
    enum: [
        { 'valueOne': 1 },
        { 'valueTwo': 2 },
        { 'valueThree': 3 }
    ]
});
```

枚举类型可以为您可能用到的参数定义一个列表。属性是一个数组类型的对象，其中每个对象都是一个以`key`为标题，`value`为属性值的选项。该属性可以被用于各种属性类型，例如`number`数值型，`string`字符串型，`vec3`向量型。


### JSON attribute

The JSON attribute allows you to create nested attributes of the other attribute types. For every JSON attribute you must specify a schema to describe its properties. The schema contains other regular script attribute definitions like above. For example:

```javascript
MyScript.attributes.add('gameConfig', {
    type: 'json',
    schema: [{
        name: 'numEnemies',
        type: 'number',
        default: 10
    }, {
        name: 'enemyModels',
        type: 'asset',
        assetType: 'model',
        array: true
    }, {
        name: 'godMode',
        type: 'boolean',
        default: false
    }]
});
```

You can also declare arrays of JSON attributes so that you can create arrays of editable objects. Just add `array: true` when defining the JSON attribute like you do for other attribute types.

Here's an example of accessing the above attributes in a script:
```javascript
MyScript.prototype.update = function (dt) {
    if (this.gameConfig.godMode) {
        for (var i = 0; i < this.gameConfig.numEnemies; i++) {
            // ...
        }
    }
};
```

*NOTE: We currently do not support defining JSON attributes as children of other JSON attributes. You can only go 1 level deep when defining a JSON attribute.*

[1]: /api/pc.ScriptAttributes.html
