module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: "\n"
      },
      dist: {
        src: ['js/lib/*.js','js/main.js'],
        dest: 'js/script.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {                                    // Dictionary of files
          'css/style.preprocessed.css': 'css/style.scss'         // 'destination': 'source'
        }
      }
    },
    svgstore: {
      options: {
        //prefix : 'icon-', // This will prefix each ID
        inheritviewbox: true,
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      default : {
        files: {
          'img/svg-sprite.svg': ['img/svg/*.svg'],
        },
      },
    },

    postcss: {
      options: {
        map: {
          inline: false
        },
        processors: [
          require('autoprefixer')({browsers: '> 0.5%'}) // add vendor prefixes
        ]
      },
      dist: {
        src: 'css/style.preprocessed.css',
        dest : 'css/style.css'
      }
    },
    uglify: {
      options: {
        sourceMap : true,
        mangle : false
      },
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.scss','css/*/*.scss'],
        tasks: ['sass','postcss']
      },
      scripts: {
        files: ['js/lib/*.js','js/main.js'],
        tasks: ['concat', 'uglify']
      },
      svg: {
        files:  ['img/svg/*.svg'],
        tasks: ['svgstore']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-svgstore');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
};