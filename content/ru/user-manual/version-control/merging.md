---
title: Слияние и разрешение конфликтов
layout: usermanual-page.hbs
position: 3
---

Слияние - это процесс объединения работы, выполненной в одной ветке, с работой, выполненной в другой ветке. Слияние является естественной частью рабочего процесса на основе ветвей, описанного в [документации по ветвям][1].

## Слияние двух веток

В PlayCanvas слияние объединяет две контрольные точки из двух разных веток, вычисляет изменения, которые произошли с момента их последней общей предковой контрольной точки, объединяет эти изменения вместе (иногда просит помощи для разрешения конфликтующих изменений) и, наконец, создает новую контрольную точку, содержащую результат слияния двух контрольных точек.

Важно отметить, что когда вы выполняете слияние в PlayCanvas, вы на самом деле не объединяете две ветки. Вы, фактически, объединяете две контрольные точки. Это актуально, потому что у вас могут быть изменения в одной из двух веток, которые более новые, чем последняя контрольная точка. В случае ветки, в которую вы объединяете, PlayCanvas автоматически создаст контрольную точку, чтобы гарантировать, что вы не потеряете никаких изменений.

### Примеры слияний

![Слияние контрольных точек][6]
*Изменения Y и Z не включены в результат слияния C и **теряются**.*

![Слияние контрольных точек][7]
*По умолчанию PlayCanvas создает новую контрольную точку в целевой ветке слияния, поэтому изменения Y включены*

![Слияние контрольных точек][8]
*Если требуются изменения Z, создайте контрольную точку в исходной ветке перед началом слияния.*

## Начало слияния

![Начать слияние][3]

Чтобы начать слияние, переключите текущую ветку на ветку, в которую вы хотите объединить. Затем выберите ветку, из которой вы хотите объединить, и выберите "Слить с текущей веткой" из выпадающего меню ветки.

![Диалог слияния][9]

У вас есть несколько вариантов перед началом слияния.

В ветке "Слияние из" вы можете:

- **Создать контрольную точку сначала** - Отметьте этот параметр, чтобы создать контрольную точку перед слиянием. Это полезно, если в ветке есть изменения, которые еще не были зафиксированы, и вы хотите включить их в слияние.
- **Закрыть ветку после слияния** - Отметьте этот параметр, чтобы закрыть ветку "Слияние из" после завершения слияния. Это часто используется для веток функций, когда функция завершена и чтобы список веток был чистым от устаревших/старых веток.

В ветке "Слияние в" вы можете:

- **Создать контрольную точку сначала** - Этот параметр отмечен по умолчанию. Поскольку слияния основаны на контрольных точках (то есть они объединяют одну контрольную точку с другой), это гарантирует, что любые изменения в ветке "Слияние в", которые не зафиксированы, будут включены в слияние. Снятие этой опции приведет к отбрасыванию любых изменений, которые не зафиксированы. Рекомендуется не снимать эту опцию.

### Автоматическое слияние

При слиянии двух контрольных точек PlayCanvas попытается автоматически объединить любые изменения из двух веток, которые не конфликтуют друг с другом. Во многих случаях две ветки могут быть объединены полностью автоматически. В автоматическом слиянии после завершения слияния редактор перезагрузится с вашими объединенными изменениями в текущей ветке.

### Разрешение конфликтов

Иногда две ветки имеют конфликтующие изменения, которые невозможно автоматически объединить. Пример конфликтующего изменения - если обе ветки изменили положение одной и той же сущности. Системе невозможно сделать выбор между двумя конечными позициями.

Если при слиянии двух веток существует один или несколько конфликтов, редактор покажет менеджер конфликтов, и вы должны разрешить каждый конфликт, прежде чем слияние может быть завершено.

### Менеджер конфликтов

![Менеджер конфликтов][4]

Менеджер конфликтов показывает каждый ресурс, который находится в конфликте, слева, и для каждого выбранного ресурса сравнение между оригинальной версией (База) и версией в каждой ветке. Для каждого конфликтующего свойства вы можете выбрать, какую версию принять. После того, как все свойства для всех ресурсов будут разрешены, нажмите кнопку "Завершить слияние" для завершения слияния и создания новой контрольной точки.

![Разрешенные конфликты][5]

Пока менеджер конфликтов и слияние выполняются, ваша текущая ветка заблокирована для дополнительных изменений от других пользователей. Это предотвращает перезапись изменений вашим слиянием, когда вы закончите разрешать конфликты. Если другой пользователь заблокировал ветку, которая вам нужна для слияния, вы можете принудительно завершить их слияние из редактора.

[1]: /user-manual/version-control/branches
[3]: /images/user-manual/version-control/merging/start-merge.png
[4]: /images/user-manual/version-control/merging/conflict-manager.jpg
[5]: /images/user-manual/version-control/merging/conflicts-resolved.jpg
[6]: /images/user-manual/version-control/merging/merging-checkpoints-1.png
[7]: /images/user-manual/version-control/merging/merging-checkpoints-2.png
[8]: /images/user-manual/version-control/merging/merging-checkpoints-3.png
[9]: /images/user-manual/version-control/merging/merge-dialog.png
