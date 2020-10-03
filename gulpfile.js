// to start the gulp in your own project
var gulp     = require("gulp");
// to put all css prefix
var prefixer = require("gulp-autoprefixer");
// to contact files
var concat   = require("gulp-concat");
// to conver pug file to html file
var pug      = require("gulp-pug");
// to conver cass file to css file
var sass     = require("gulp-sass");

// html task
gulp.task("html", function() {
  return gulp.src("stage/html/register.pug")
              .pipe(pug({pretty: true}))
              .pipe(gulp.dest("dist"))
})

// css task
gulp.task("css", function() {
  return gulp.src("stage/css/style.scss")
              .pipe(sass())
              .pipe(prefixer())
              .pipe(gulp.dest("dist/css"))
})

// js task
gulp.task("js", function() {
  return gulp.src("stage/js/*.js")
              .pipe(gulp.dest("dist/js"))
})

// watch task
gulp.task("watch", function() {
  gulp.watch("stage/html/register.pug", gulp.series("html"));
  gulp.watch("stage/html/pug/*.pug", gulp.series("html"));
  gulp.watch("stage/css/style.scss", gulp.series("css"));
  gulp.watch("stage/css/scss/*.scss", gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
})
