module.exports = function(grunt) {

var corsMiddleware = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

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

    htmlbuild: {
        dist: {
            src: [
              './html-parts/pages/hello.html', 
              './html-parts/pages/portfolio.html',
              './html-parts/pages/contacts.html',

              './html-parts/project-pages/project-infragistics-posters.html',
              './html-parts/project-pages/project-meta-colours.html'
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
      all: {
        files: ['./*.scss', './*.js', './html-parts/*/*.html'],
        tasks: ['sass', 'autoprefixer', 'htmlbuild'],
        options: {
          livereload: true,
        },
      },
    }

  });

  // Loads
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Here's a grunt server task, just in case. You do need to set it up, though.
  // grunt.loadNpmTasks('grunt-contrib-connect');


  // Default tasks
  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'watch', 'htmlbuild']);

};