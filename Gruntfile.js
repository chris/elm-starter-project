module.exports = function(grunt) {

  grunt.initConfig({
    elm: {
      compile: {
        files: {
          "starter.js": ["Starter.elm"]
        }
      }
    },
    watch: {
      elm: {
        files: ["Starter.elm", "StarterUtils.elm"],
        tasks: ["elm"]
      }
    },
    clean: ["elm-stuff/build-artifacts"]
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['elm']);

};
