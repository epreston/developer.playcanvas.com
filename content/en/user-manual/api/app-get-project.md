---
title: Apps - Get project apps
layout: usermanual-page.hbs
position: 3
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:projectId/apps
```

## Description

Lists all the published Apps of a Project.

## Example

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/apps
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project.</p></div>
</div>

## Response Schema

```none
Status: 200
```

```json
{
  "result": [{
    "id": int,
    "project_id": int,
    "owner_id": int,
    "name": string,
    "description": string,
    "version": string,
    "release_notes": string,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "size": int,
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
  }, ... ],
  "pagination": {
     ...
  }
}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
