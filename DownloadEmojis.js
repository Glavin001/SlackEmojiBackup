const fs = require("fs"),
  request = require("request");

const emojis = require("./emojis.json");

function download(uri, filename) {
  return new Promise(resolve => {
    request.head(uri, function(err, res, body) {
      request(uri)
        .pipe(fs.createWriteStream(filename))
        .on("close", resolve);
    });
  });
}

Promise.all(
  emojis.map(({ image, name }) => download(image, `Emojis/${name}.png`))
).then(() => console.log("Done"));
