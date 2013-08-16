sysPath = require 'path'
{exec} = require 'child_process'

module.exports = class AfterBrunch
  brunchPlugin: yes

  constructor: (@config) ->
    for command in @config.plugins.afterBrunch
      process = command.split(" ")[0]
      exec "#{process} --version", (error, stdout, stderr) =>
        if error isnt null
          console.log "exec error: #{error}"
          console.log "Check to see whether #{process} is installed."


  onCompile: (generatedFiles) ->
    for command in @config.plugins.afterBrunch
      exec command, (error, stdout, stderr) ->
        console.log "exec error: " + error if error isnt null
