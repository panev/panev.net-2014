module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    php: {
        test: {
            options: {
                keepalive: true,
                open: true
            }
        }
    }

  });



  // Loads
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-php');

  // Default tasks
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['php', 'mocha']);

};