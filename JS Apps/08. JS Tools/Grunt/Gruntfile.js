module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            build: {
                src: ['js/app.js', 'js/module.js'],
                dest: 'build/bundle.js',
            },
        },
        uglify: {
            build: {
                src: ['build/bundle.js'],
                dest: 'build/bundle.min.js'
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc.json',
            },
            target: ['main.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['eslint', 'concat', 'uglify']);
};
