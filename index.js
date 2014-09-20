'use strict';

var fs = require('fs');

function convertToString (filename) {
  return fs.readFileSync(__dirname + '/gutenberg/' + filename).toString();
}

module.exports = {
  'austen-emma': convertToString('austen-emma.txt'),
  'austen-persuasion': convertToString('austen-persuasion.txt'),
  'austen-sense': convertToString('austen-sense.txt'),
  'bible-kjv': convertToString('bible-kjv.txt'),
  'blake-poems': convertToString('blake-poems.txt'),
  'bryant-stories': convertToString('bryant-stories.txt'),
  'burgess-busterbrown': convertToString('burgess-busterbrown.txt'),
  'carroll-alice': convertToString('carroll-alice.txt'),
  'chesterton-ball': convertToString('chesterton-ball.txt'),
  'chesterton-brown': convertToString('chesterton-brown.txt'),
  'chesterton-thursday': convertToString('chesterton-thursday.txt'),
  'edgeworth-parents': convertToString('edgeworth-parents.txt'),
  'melville-moby_dick': convertToString('melville-moby_dick.txt'),
  'milton-paradise': convertToString('milton-paradise.txt'),
  'shakespeare-caesar': convertToString('shakespeare-caesar.txt'),
  'shakespeare-hamlet': convertToString('shakespeare-hamlet.txt'),
  'shakespeare-macbeth': convertToString('shakespeare-macbeth.txt'),
  'whitman-leaves': convertToString('whitman-leaves.txt')
};
