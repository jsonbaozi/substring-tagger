https://github.com/jsonbaozi/substring-tagger

### Research (~30 minutes)

Initially, I thought the way to implement this would be to build a prefix tree with all of the matchable substrings, and I would iterate through the input strings one character at a time, trying to match to the prefix tree.

After looking online, I found that there was an existing algorithm (Aho-Corasick) that does just that, with an added improvement of having pointers between nodes that could continue the search. This removes the need to traverse from the beginning of the tree for each character.  
https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm

I found a few implementations of Aho-Corasick on npm, and after reading through the source code for each, I chose the one that could hold references to the original tag on each substring-ending node.  
https://www.npmjs.com/package/aho-corasick.js

### Base implementation (~30 minutes)

Afterwards, I implemented a very basic solution to the given challenge that fulfills the requirements. I used Node.js for my environment and stored the tags and input in separate files, choosing to simply output to console for the initial implementation.

<!-- ### Very large datasets implementation

Since the original problem suggested that the input would take the form of a "very large body of documents", I thought it might be large enough that I couldn't hold all of it in memory at the same time. Thus, I implemented a solution that creates an input stream from a given input file and outputs a stream to an output file. -->
