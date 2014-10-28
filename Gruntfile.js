module.exports = function(grunt) {

var corsMiddleware = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

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

    htmlbuild: {
        dist: {
            src: [
              './html-parts/pages/hello.html', 
              './html-parts/pages/portfolio.html',
              './html-parts/pages/contacts.html',

              './html-parts/pages/404.html',

              './html-parts/project-pages/omniamp.html',
              './html-parts/project-pages/jquery-sofia.html',
              './html-parts/project-pages/infragistics-posters.html',
              './html-parts/project-pages/gigs-bg.html'
            ],
            dest: './',
            options: {
                beautify: false,
                relative: true,
 
                sections: {
                    layout: {
                        header: './html-parts/includes/header.html',
                        footer: './html-parts/includes/footer.html'
                    },
                    script: {
                        head: './html-parts/includes/head.html',
                    }
                },
                data: {
                    // Data to pass to templates
                    version: "0.1.0",
                    title: "test",
                },
            }
        }
    },

    watch: { 

      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },

      js: {
        files: ['js/*.js'],
        // tasks: ['htmlbuild'],
        options: {
          livereload: true,
        },
      },

      html: {
        files: ['html-parts/*/*.html'],
        tasks: ['htmlbuild'],
        options: {
          livereload: true,
        },
      },

    },

    open: {
      index: {
        path: './hello.html',
        app: 'chrome'
      }
    },

    imagemin: {                            // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 3,
          use: [mozjpeg()]
        }
      },
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'images/'                  // Destination path prefix
        }]
      }
    }

  });


  // Loads
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Here's a grunt server task, just in case. You do need to set it up, though.
  // grunt.loadNpmTasks('grunt-contrib-connect');


  // Default tasks
  grunt.registerTask('smash', ['sass', 'autoprefixer', 'htmlbuild', 'imagemin']);
  grunt.registerTask('jedi', ['open', 'watch']);
};