---
title: Anim
layout: usermanual-page.hbs
position: 1
---

Компонент anim используется для соединения ресурса animstategraph и всех требуемых анимационных ресурсов с одним объектом.

Ниже вы можете увидеть компонент anim после его добавления в компонент. Он показывает доступный слот для выбора ресурса animstategraph.

![Новый компонент anim][1]

После выбора ресурса animstategraph, компонент anim будет отображать список слотов для анимационных ресурсов. Будет один слот для каждого состояния анимации в каждом слое ресурса графа состояний. Здесь фактические данные анимации связываются с ранее созданным графом состояний. Несколько компонентов anim могут использовать один и тот же ресурс animstategraph, каждый с собственным набором анимационных ресурсов.

![Компонент anim с графом][2]

После заполнения всех слотов состояния анимации, компонент anim становится играбельным. На этом этапе компонент anim может быть воспроизведен через скрипт, вызвав `entity.anim.play()`, или если выбрана опция `Activate`, он будет автоматически воспроизводиться при запуске проекта PlayCanvas.

Компонент anim также предлагает опцию изменения скорости воспроизведения анимации. Эта скорость повлияет на каждую анимацию в графе состояний.

[1]: /images/user-manual/anim/new_anim_component.png
[2]: /images/user-manual/anim/anim_component_with_graph.png
