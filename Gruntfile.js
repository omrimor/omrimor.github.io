
module.exports = function(grunt) {
	'use strict';

	// Display the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);

	// Load all grunt-* packages from package.json
	require('load-grunt-tasks')(grunt);



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            jekyllBuild: {
                command: 'jekyll build --watch'
            },
            jekyllServe: {
                command: 'jekyll serve --watch'
            }
        },
        connect: {
            server: {
                options: {
                    base: '_site',
                    keepalive: true
                }
            }
        },

        watch: {
        	// Will try to connect to a LiveReload script
        	options: {
        		interrupt: true,
        		atBegin: true,
        		livereload : true
        	},
            files: [
                '_includes/**',
                '_layouts/**',
                '_posts/**',
                '_site/**',
                '*.yml',
                '*.html'
            ],
            tasks: ['shell:jekyllServe']
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Open local server and watch for file changes
    grunt.registerTask('serve', ['connect','watch']);

    grunt.registerTask('default', ['shell:jekyllBuild','watch']);
};

