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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};