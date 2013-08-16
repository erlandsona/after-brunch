## after-brunch
Want to run something on the command line everytime [brunch](http://brunch.io) compiles? Easy.

## Usage
Add `"after-brunch": "x.y.z"` to `package.json` of your brunch app.
Or `npm install after-brunch --save`.

Then in your `config.coffee` just add any commands to the afterBrunch array.
For example, you might want to use styledocco to create a live styleguide of your stylesheets.


    exports.config =
      plugins:
        afterBrunch: [
          "styledocco -n "My Project" css"
        ]


***I've added a plugins object to the `config`. If there's a better way to do this, let me know.***
