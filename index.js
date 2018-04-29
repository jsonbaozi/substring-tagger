const fs = require('fs');
const AhoCorasick = require('aho-corasick.js');

const trie = new AhoCorasick.TrieNode();

const tags = require('./data/tags.js');
const input = require('./data/input.js');

for (const tag in tags) {
  const substrings = tags[tag];
  for (const substring of substrings) {
    trie.add(substring, tag);
  }
}
AhoCorasick.add_suffix_links(trie);

const replaceAll = function(str, map, cb = console.log) {
  const keys = Object.keys(map);
  if (keys.length > 0) {
    const re = new RegExp(keys.join('|'), 'gi');
    cb(str.replace(re, word => `TAG{${map[word]},${word}}`));
  } else {
    cb(str);
  }
};

input.forEach(string => {
  const map = {};
  AhoCorasick.search(string, trie, (found_word, tag) => {
    map[found_word] = tag;
  });
  replaceAll(string, map);
});
