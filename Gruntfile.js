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

    sass: {                              
      dist: {                         
        options: {                       
          style: 'compressed'
        },
        files: {                         
          'css/main.css': 'css/main.scss',       
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },

      // prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },

    watch: {
      css: {
        files: ['**/*.scss', '**/*.php', '**/*.js'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
    }

  });

  // Loads
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Here's a grunt server task, just in case. You do need to set it up, though.
  // grunt.loadNpmTasks('grunt-contrib-connect');


  // Default tasks
  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'watch']);

};