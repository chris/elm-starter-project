# Elm Starter Project template

Much of this was taken from [The Pragmatic Studio's](https://pragmaticstudio.com/) great [Elm class](https://pragmaticstudio.com/elm).

## Project Structure

All of the Elm code lives in `Starter.elm` and `StarterUtils.elm`.

This project is designed for version 0.16 of the Elm Platform and relies on the [elm-html](http://package.elm-lang.org/packages/evancz/elm-html/4.0.2/) and [start-app](http://package.elm-lang.org/packages/evancz/start-app/2.0.2/) packages.

The `index.html` file embeds the program as a fullscreen app and includes
the necessary JavaScript (`points_tracker.js`) and CSS stylesheet (`style.css`).

## Usage

* Copy it recursively to a dir/name of your choice.
* Fix the GitHub link in `elm-package.json`.
* Adjust the source file names (`Starter.elm`, `StarterUtils.elm`).
* Update file names in `Gruntfile.js`.
* Update file names in `index.html`.
* Update `.gitignore`.

## Build Instructions

Run the following command from the root of this project:

```
elm make Starter.elm --output starter.js
```

Then open `index.html` in your browser!

## Auto-recompile with Grunt

This is from [Prag Studio Elm class](https://online.pragmaticstudio.com/courses/elm/steps/16)

Setup Grunt CLI:

```
npm install -g grunt-cli --save-dev
npm install grunt --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-elm --save-dev
```

Now you can compile with:

```
grunt elm
```

or do a watch with:

```
grunt watch
```

