var writeGood = require('../write-good');
var cmd=require('node-cmd');


describe('command line interface', function () {
  xit('asks for files if there are no arguments.', function () {
    console.log(cmd.run('write-good'));
  });
});
