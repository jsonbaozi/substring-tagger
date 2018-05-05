const index = require('./index.js');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

describe('sample input files should give corresponding output files', () => {
  test('input1 should have corresponding file in output folder', () => {
    fs
      .readFileAsync('./data/outputs/tagged-input1.txt')
      .then(contents => {
        expect(contents).toBe(
          "I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}\
        Lol, no comment about that\
        I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"
        );
      })
      .catch(err => {
        throw err;
      });
  });
  test('input2 should have corresponding file in output folder', () => {
    fs
      .readFileAsync('./data/outputs/tagged-input2.txt')
      .then(contents => {
        expect(contents).toBe(
          "I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}\
          Lol, no comment about that\
          I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2\
          Testing tag with TAG{Destiny,original Destiny game}\
          Testing again with TAG{WorldOfWarcraft,WoW the game}\
          Season 9 rank 1 3's TAG{WorldOfWarcraft,world of warcraft} player here"
        );
      })
      .catch(err => {
        throw err;
      });
  });
});
