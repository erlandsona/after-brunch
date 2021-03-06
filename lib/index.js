// Generated by CoffeeScript 1.7.1
var AfterBrunch, spawn;

spawn = require('child_process').spawn;

module.exports = AfterBrunch = (function() {
  AfterBrunch.prototype.brunchPlugin = true;

  function AfterBrunch(config) {
    var _ref;
    this.config = config;
    this.commands = (_ref = this.config.plugins.afterBrunch) != null ? _ref : [];
  }

  var spwndChildren = [];

  var intersecting = function (haystack, arr) {
    return arr.some(function (v) {
      return haystack.indexOf(v) >= 0;
    });
  };

  AfterBrunch.prototype.onCompile = function(generatedFiles) {
    var options = { stdio: 'inherit' }
    var cmds = this.commands;
    spwndChildren = spwndChildren.filter(function (child) {
      return child._closesGot === 0
    });
    var spwndCmds = spwndChildren.map(function(child){return child.spawnargs[2];});
    if (!intersecting(cmds, spwndCmds)) {
      cmds.map(function(command) {
        var spwndChild = spawn('bash', ['-c', command], options);
        spwndChildren.push(spwndChild);
      });
    }
  };

  return AfterBrunch;

})();
