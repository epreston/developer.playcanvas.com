---
title: 项目 - 项目归类
layout: usermanual-page.hbs
position: 13
---

## Route URL

```none
POST https://playcanvas.com/api/projects/:id/export
```

## Description

This will allow you to download a zip archive of your entire project. You can import that archive from your Projects Dashboard to create a new Project from that archive. More about importing projects [here][3].

The request will start an archive job and the job details will be returned in the response. You can [poll the job by id][2] until its status is either 'complete' or 'error'. When the job is done, its data will contain a URL to download the project archive.

## Example

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"branch_id": "99999999-9999-9999-9999-999999999999"}' "https://playcanvas.com/api/projects/99999999/export"
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">branch_id [optional]</span><p>The id of the branch. If no id is specified the main branch will be used.</p></div>
</div>

## Response Schema

```none
Status: 201 Created
```

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": [ list of strings ],
    "data": {
      "project": {
         'id': int
      },
      "url": string
    }
}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">404</span><p>Owner not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

此路由使用[严格的][1] 速率限制。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get
[3]: /user-manual/profile/projects/#import-project
