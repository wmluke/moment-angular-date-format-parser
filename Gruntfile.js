/*jshint camelcase: false */
/*global module:false */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
     Runs all .html files found in the test/ directory through PhantomJS.
     Prints the report in your terminal.
     */
    qunit: {
      files: ['test/**/*.html']
    },

    jshint: {
      all: ['Gruntfile.js', '*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['test/**/*.js', 'test/**/*.html', '*.js'],
      tasks: ['qunit']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('lint_tasks', ['jshint']);
  grunt.registerTask('lint', 'JavaScript Code Linting', function () {
    grunt.task.run('lint_tasks');
  });

  grunt.registerTask('default', ['qunit']);

};