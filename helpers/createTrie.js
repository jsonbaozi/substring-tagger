const AhoCorasick = require('aho-corasick.js');

const createTrie = function(tags) {
  const trie = new AhoCorasick.TrieNode();
  for (const tag in tags) {
    const substrings = tags[tag];
    for (const substring of substrings) {
      trie.add(substring, tag);
    }
  }
  AhoCorasick.add_suffix_links(trie);
  return trie;
};

module.exports = createTrie;
