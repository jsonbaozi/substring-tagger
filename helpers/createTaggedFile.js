const fs = require('fs');
const AhoCorasick = require('aho-corasick.js');
const readline = require('readline');

const createTaggedFile = function(tagsTrie, inputPath, outputPath) {
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  const rl = readline.createInterface({
    input: readStream,
  });

  console.log(`Reading ${inputPath}`);
  rl.on('line', input => {
    const taggedLine = createTaggedLine(tagsTrie, input);
    writeStream.write(taggedLine + '\n');
  });

  rl.on('close', () => {
    console.log(`Finished reading ${inputPath}, closing file`);
  });
};

const replaceAll = function(str, map) {
  const keys = Object.keys(map);
  if (keys.length > 0) {
    const re = new RegExp(keys.join('|'), 'gi');
    return str.replace(re, word => `TAG{${map[word]},${word}}`);
  } else {
    return str;
  }
};

const createTaggedLine = function(tagsTrie, line) {
  const map = {};
  AhoCorasick.search(line, tagsTrie, (found_word, tag) => {
    map[found_word] = tag;
  });
  return replaceAll(line, map);
};

module.exports = createTaggedFile;
