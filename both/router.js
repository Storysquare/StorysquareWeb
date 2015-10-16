/**
 * Created by martynasjankauskas on 30/08/15.
 */

Router.configure({
    layoutTemplate: 'mainTemplate'
});

// one way of determine the route
Router.route('/', {
    template: 'homePage',
    name: 'homePage'
});

Router.route('/payment', {
    template: 'payment'
});

Router.route('/order', {
    template: 'jotform',
    name: 'order'   // this name: attribute is for dynamic linking
});

// the most basic way to determine route. name has to mach template name
Router.route('/testing');