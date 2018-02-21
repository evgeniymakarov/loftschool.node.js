const path = require('path');

console.log(path.relative('/data/test/aaa', '/data/test/aa/aa/bbb'));
console.log(path.resolve('/data/test/aaa', './baz'));
console.log(path.normalize('/foor//bar///asd/sd///sss/..'));
console.log(path.parse('/foor/bar/asd/sd/sss/user.txt'));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.sep);
