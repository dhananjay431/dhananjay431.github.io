const {series, dest, src} = require('gulp');
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

function css(cb) {
  src([
    'assets/vendor/bootstrap/css/bootstrap.min.css',
    'assets/vendor/bootstrap-icons/bootstrap-icons.css',
    'assets/vendor/aos/aos.css',
    'assets/vendor/glightbox/css/glightbox.min.css',
    'assets/vendor/swiper/swiper-bundle.min.css',
    'assets/css/main.css',
  ])
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist'));
  cb();
}

function scripts(cb) {
  src(
    [
      'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'assets/vendor/php-email-form/validate.js',
      'assets/vendor/aos/aos.js',
      'assets/vendor/typed.js/typed.umd.js',
      'assets/vendor/waypoints/noframework.waypoints.js',
      'assets/vendor/purecounter/purecounter_vanilla.js',
      'assets/vendor/glightbox/js/glightbox.min.js',
      'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      'assets/vendor/isotope-layout/isotope.pkgd.min.js',
      'assets/vendor/swiper/swiper-bundle.min.js',
      'assets/js/main.js',
    ],
    {sourcemaps: true},
  )
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(dest('dist'));
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(css, scripts, build);
