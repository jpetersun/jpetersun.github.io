module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 1600,
						suffix: '_large_1x',
						quality: 30
					},{
						width: 1600,
						suffix: '_large_2x',
						quality: 60
					},{
						width: 800,
						suffix: '_medium_1x',
						quality: 30
					},{
						width: 800,
						suffix: '_medium_2x',
						quality: 60
					},{
						width: 400,
						suffix: '_small',
						quality: 40
					}]
				},

				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},

		clean: {
			dev: {
		  	src: ['images'],
		  },
		},

		mkdir: {
		  dev: {
				options: {
					create: ['images']
				},
			},
		},

		watch: {
			scripts: {
				files: ['css/*.css', 'index.html', 'js/*.js'],
				options: {
					livereload: 9090,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};