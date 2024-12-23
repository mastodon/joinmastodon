const child = require(`child_process`);
const fs = require(`fs`);

if (!fs.existsSync(`artwork`)) {
    console.log(`Cloning fdroid artwork...`);
    child.execSync(`git clone --depth 1 https://gitlab.com/fdroid/artwork artwork`);
}
console.log(`Translating SVGs...`);
child.execSync(`python 1-translate-svg.py`, { cwd: `artwork/badge` });
console.log(`Optimizing SVGs...`);
//child.execSync(`sh 2-optimize-svg.sh`, { cwd: `artwork/badge` });
console.log(`Copying...`);
const locales = fs.readdirSync(`artwork/badge`)
    .filter(x => x.startsWith(`get-it-on`))
    .flatMap(x => x.replace(`get-it-on-`, ``).replace(`.svg`, ``))

locales.forEach(x => {
    let svg = fs.readFileSync(`artwork/badge/get-it-on-${x}.svg`, `utf8`)
    // add black background
    //if (!svg.includes(`<rect style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#000000`))
    //    svg = svg.replace(`transform="translate(-289,-312.36218)">`, `transform="translate(-289,-312.36218)">${blackbox}`);
    // remove white border
    svg = svg.replace(`stroke:#a6a6a6;stroke-width:4;`, `stroke:black;stroke-width:40;`);
    // crop canvas
    svg = svg.replace(`width="646"`, `width="600"`)
        .replace(`height="250"`, `height="204"`)
        .replace("translate(-289,-312.36218)", "translate(-312,-335.36218)")
    // uglify
    svg = svg.replace(/\n|\t|  /g, ``) // idfk why top_and_bottom_rtl.svg uses tabs
    fs.writeFileSync(`f-droid-${x}.svg`, svg);
})

console.log(`done!`);
