---
title: 实体拾取
layout: tutorial-page.hbs
tags: raycast,basics,physics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg"
---

Collision Picking - click to select a shape

<iframe loading="lazy" src="https://playcanv.as/b/Ps1tTzWn/" title="Collision Picking"></iframe>

---

Frame Buffer Picking - click to select a grey shape. The red shapes are set to be not pickable.

<iframe loading="lazy" src="https://playcanv.as/b/ZQVQqgGU/" title="Frame Buffer Picking"></iframe>

---

从[教程项目][1]中的编辑器尝试它。

本教程介绍从3D场景中选择实体的方法，例如，单击鼠标。

## Collision Picking

基于碰撞的拣选使用碰撞组件向需要拣选的每个实体添加一个形状。 然后，我们使用刚体系统中的 [raycastFirst()][2]方法将射线从鼠标单击位置触发到屏幕中，看看是否碰到碰撞组件。 如果是，则该实体被“选择”。

```javascript
var PickerRaycast = pc.createScript('pickerRaycast');

// initialize code called once per entity
PickerRaycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);

    this.on('destroy', function() {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);
    }, this);
};

PickerRaycast.prototype.onSelect = function (e) {
    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    if (result) {
        var pickedEntity = result.entity;
        pickedEntity.script.pulse.pulse();
    }
};
```

## Frame Buffer Picking

Frame buffer based picking uses the [pc.Picker][3] class to render the scene to a internal buffer. When the mouse is clicked the color of the buffer at the mouse location is used to determine which mesh instance was selected. This has some advantages and disadvantages over the collision based method.

Advantages include:

* Able to use a rectangle to pick many items in a scene at once
* Doesn't require the physics library to be included which reduces preload time.

The main disadvantage is that this uses the `readPixels` method which stalls the graphics pipeline. This can have serious rendering performance implications particularly on mobile and GPU heavy applications.

You are able modify the size of the buffer to be smaller to improve the performance at the cost of accuracy. In the example script below, the attribute `pickAreaScale` is used to do this where the lower the number, the faster and less accurate the picker becomes.

It's also possible to restrict the layers to pick which the script supports via `layerNames` array. We can add the names of the layers that we want to pick from and also improves performance by rendering only what we need to the internal buffer.

```javascript
var PickerFramebuffer = pc.createScript('pickerFramebuffer');

PickerFramebuffer.attributes.add('pickAreaScale', {
    type: 'number',
    title: 'Pick Area Scale',
    description: '1 is more accurate but worse performance. 0.01 is best performance but least accurate. 0.25 is the default.',
    default: 0.25,
    min: 0.01,
    max: 1
});

PickerFramebuffer.attributes.add('layerNames', {
    type: 'string',
    title: 'Layers Names',
    array: true,
    description: 'Layer names from which objects will be picked from.',
    default: ['World']
});

// initialize code called once per entity
PickerFramebuffer.prototype.initialize = function() {
    // Create a frame buffer picker with a scaled resolution
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    this.picker = new pc.Picker(this.app, canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
    this.layers = [];
    for (var i = 0; i < this.layerNames.length; ++i) {
        var layer = this.app.scene.layers.getLayerByName(this.layerNames[i]);
        if (layer) {
            this.layers.push(layer);
        }
    }

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);

    this.on('destroy', function() {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);
    }, this);
};

PickerFramebuffer.prototype.onSelect = function (event) {
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    var camera = this.entity.camera.camera;
    var scene = this.app.scene;
    var picker = this.picker;

    picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
    picker.prepare(camera, scene, this.layers);

    // Map the mouse coordinates into picker coordinates and
    // query the selection
    var selected = picker.getSelection({
        x: Math.floor(event.x * (picker.width / canvasWidth)),
        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
    });

    if (selected.length > 0) {
        // Get the graph node used by the selected mesh instance
        var entity = selected[0].node;

        // Bubble up the hierarchy until we find an actual Entity
        // that has the script we are looking for
        while (entity !== null && !(entity instanceof pc.Entity) && (entity.script && entity.script.pulse)) {
            entity = entity.getParent();
        }
        if (entity) {
            entity.script.pulse.pulse();
        }
    }
};
```

[1]: https://playcanvas.com/project/405856
[2]: /api/pc.RigidBodyComponentSystem.html#raycastFirst
[3]: /api/pc.Picker.html
