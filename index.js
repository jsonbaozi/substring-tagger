const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const AhoCorasick = require('aho-corasick.js');

const createTrie = require('./helpers/createTrie.js');
const createTaggedFile = require('./helpers/createTaggedFile.js');

const trie = createTrie(require('./data/tags.js'));

const getInputs = function(path) {
  return fs.readdirAsync(path);
};
const dataPath = './data';

getInputs(`${dataPath}/inputs`)
  .then(inputFileArray => {
    inputFileArray.forEach(inputFile => {
      createTaggedFile(
        trie,
        `${dataPath}/inputs/${inputFile}`,
        `${dataPath}/outputs/tagged-${inputFile}`
      );
    });
  })
  .catch(err => {
    throw err;
  });
