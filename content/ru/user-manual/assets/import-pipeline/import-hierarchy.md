---
title: Импорт иерархии
layout: usermanual-page.hbs
position: 1
---

PlayCanvas поддерживает импорт моделей с их сетками в виде иерархии сущностей в сцене. Это позволяет редактировать различные сетки непосредственно в редакторе. Можно добавлять компоненты, присоединять другие сущности, перемещать/вращать/масштабировать сущности в иерархии и т.д.

![Редактирование иерархии модели в редакторе][edit_hierarchy_gif]

## Как включить

<div class="alert alert-info">
    Теперь это включено по умолчанию для новых проектов.
</div>

Откройте "Настройки проекта"

<img loading="lazy" src="/images/user-manual/assets/import-pipeline/import-hierarchy/project-settings.png" width="480">

Прокрутите вниз до "Asset Tasks" и включите "Import Hierarchy":

<img loading="lazy" src="/images/user-manual/assets/import-pipeline/import-hierarchy/asset-tasks.png" width="360">

## Импорт моделей

Полное руководство по импорту вашей первой модели и анимации можно найти [здесь][first_model_animation_import].

В качестве обзора, когда вы перетаскиваете файл модели в "Assets Panel":

![Перетаскивание модели в панель Assets][import_model_gif]

При импорте будут созданы следующие ассеты:

![Созданные ассеты][created_assets_img]

| Тип ассета | Описание |
|------------|-------------|
| **[Materials][material_asset]** | Материалы, используемые импортированной моделью, сопоставлены с экземпляром сетки. |
| **[Textures][texture_asset]** | Встроенные текстуры в файле модели (если есть). Они автоматически будут сопоставлены с соответствующими материалами. |
| **[Template][template_asset]** | Шаблон хранит иерархию сцены модели. Создайте экземпляр шаблона, чтобы добавить модель в сцену. |
| **Container** | GLB, который хранит все сетки модели. |
| **Render** | Render ассеты ссылаются на сетку в активе контейнера и используются [Render Component][render_component] для отображения сетки в сцене. Они также могут быть использованы с [Collision Component][collision_component] в качестве сетки для физики. |

## Обновление моделей

Поскольку иерархия создается в виде шаблона, при обновлении модели это может повлиять на экземпляры шаблона в сценах.

Добавленные компоненты к сущностям в шаблоне будут сохранены во время обновления, если только экземпляр сетки, который представляет сущность, больше не существует в обновленной модели.

Исключение составляют случаи, когда к сущности в шаблоне добавляется компонент скрипта, и экземпляр сетки, который он представляет, больше не является частью обновленной модели, он будет перемещен под корневую сущность в шаблоне, чтобы не было потери данных. Все сущности, которые были под ним до обновления, также будут сохранены.

Редактор определяет, что является новым или удаленным экземпляром сетки, следующим образом:

- Если при обновлении имя экземпляра сетки и имя его родительского экземпляра сетки совпадают с существующим экземпляром сетки и его родителем, они считаются одним и тем же экземпляром сетки в иерархии и обновляются.
- Если при обновлении имя экземпляра сетки отсутствует, считается, что это новый экземпляр сетки, и в шаблон добавляется новая сущность.
- Если при обновлении существующая сущность шаблона не имеет соответствующего экземпляра сетки с учетом приведенных выше правил, считается, что этот экземпляр сетки был удален, и сущность будет удалена из шаблона. За исключением упомянутого выше случая, если к нему был добавлен компонент скрипта в шаблоне, такие сущности сохраняются на корневом уровне. Если компоненты скрипта не были добавлены, они удаляются из шаблона.

[edit_hierarchy_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/edit-hierarchy.gif
[import_model_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/import-model.gif
[created_assets_img]: /images/user-manual/assets/import-pipeline/import-hierarchy/created-assets.png
[material_asset]: /user-manual/assets/materials/physical-material/
[texture_asset]: /user-manual/assets/textures/
[template_asset]: /user-manual/templates/
[render_component]: /api/pc.RenderComponent.html
[collision_component]: /api/pc.CollisionComponent.html
[first_model_animation_import]: /tutorials/importing-first-model-and-animation/
