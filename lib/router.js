/**
 * Created by martynasjankauskas on 30/08/15.
 */

Router.route('/', function () {
    this.render('fullscreen');
});

Router.route('/payment', function () {
    this.render('payment');
});

Router.route('/theme', function () {
    this.render('theme');
});