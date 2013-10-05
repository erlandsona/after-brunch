sysPath = require 'path'
{exec}  = require 'child_process'

module.exports = class AfterBrunch
  brunchPlugin: yes

  constructor: (@config) ->
    @commands = @config.plugins.afterBrunch ? []

  onCompile: (generatedFiles) ->
    for command in @commands
      exec command, (error, stdout, stderr) ->
        if error
          console.log error.message
        else
          console.log stdout if stdout
          console.log stderr if stderr

    return
