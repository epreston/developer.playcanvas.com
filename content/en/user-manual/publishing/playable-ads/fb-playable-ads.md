---
title: Facebook Playable Ad
layout: usermanual-page.hbs
position: 1
---

PlayCanvas supports the [Facebook Playable Ad][1] formats and requirements via an [official external tool on GitHub][2].

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/bitmoji-creator.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/cube-jump.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/flappy-bird.gif" style="margin:0px 5px; display:inline;" width="185">

The tool can create both the single 2MB (uncompressed) HTML file and the 5MB (uncompressed) ZIP formats via the configuration options. Full specifications for Facebook Playable Ads can be found on their [help centre][3].

There are some limitations to be aware of with the tool which can be found in the documentation from [GitHub][2].

## Example project

The [Cube Jump project][5] is ready to be exported for the Facebook Playable Ad format and the expected [HTML output can be found here][6].

<iframe loading="lazy" src="https://playcanv.as/e/p/Hywjl9Bh/" title="Cube Jump Playable Ad"></iframe>

## File size tips

As there is a strict file size limit, you will have to plan and budget the usage of assets for the ad.

The minified PlayCanvas Engine code is **\~1.2MB** uncompressed and due to the need to encode the asset files into Base64 strings, it adds **\~30%** to the size of each asset file.

This means that for a single HTML format, this leaves \~500KB for assets before they are encoded into Base64 strings. For the ZIP format, this would be about \~3MB for assets before encoding.

Try to keep images as small as possible in dimensions and use tools like [TinyPNG][4] to reduce file size even further.

## Playable ad checklist:

* Have you added the function call `FbPlayableAd.onCTAClick()` as part of your call to action callback?

## How to export

Follow the [setup steps][7] from the readme in the GitHub repo.

### Single HTML

Set the following options in the `config.json` as shown below. This will produce a single HTML file in the output directory.

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": false
    }
```

### ZIP file

Set the following options in the `config.json` as shown below. This will produce a ZIP file with the asset data and PlayCanvas Engine code as separate files from the `index.html`.

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": true
    }
```

And run the command:

```sh
npm run one-page
```

Full details of options and commands can be found in the readme section for '[Converting a project into a single HTML file][9]'.

### How to test

Follow the steps [here][8] to create a Facebook ad and at the time where the files for the ad are uploaded, there is an opportunity to test within the manager.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-tester.jpg">

Please ignore the warning about the source may contain an `XMLHttpRequest` as the code path has been removed by this tool.

Facebook also allows testing on device via the ad manager but requires you to publish the ad first. This is a strange limitation by Facebook but is required at the moment.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-preview-device.jpg">

[1]: https://www.facebook.com/business/ads/playable-ad-format
[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[3]: https://www.facebook.com/business/help/412951382532338
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb
[6]: /downloads/fb-playable-ad-cube-jump-html.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[8]: https://www.facebook.com/business/help/338940216641734
[9]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
