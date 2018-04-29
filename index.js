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

input.forEach(string => {
  let map = {};
  AhoCorasick.search(string, trie, (found_word, tag) => {
    map[found_word] = tag;
  });
  const keys = Object.keys(map);
  if (keys.length > 0) {
    const re = new RegExp(keys.join('|'), 'gi');
    console.log(string.replace(re, word => `TAG{${map[word]},${word}}`));
  } else {
    console.log(string);
  }
});
