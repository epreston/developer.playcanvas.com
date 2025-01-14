// i18n-out
// Save all msgs that were requested as localized content
import fs from 'fs';

export default function makePlugin() {
    return function (opts) {
        return function (files, metalsmith, done) {
            const msgs = Object.keys(opts.data.msgs);
            const o = {
                msgs: msgs
            };
            fs.writeFileSync("messages.json", JSON.stringify(o));
            done();
        };
    };
}
