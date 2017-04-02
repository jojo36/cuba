Router.route('/', {
  name: 'frontIndex',
  layoutTemplate: 'frontLayout'
});

Router.route('/login', {
  name: 'frontLogin',
  layoutTemplate: 'frontLayout'
});

Router.route('/signin', {
  name: 'frontSignIn',
  layoutTemplate: 'frontLayout'
});

Router.route('/app/dashboard', {
  name: 'backDashboard',
  layoutTemplate: 'backLayout'
});

Router.route('/app/search', {
  name: 'backSearch',
  layoutTemplate: 'backLayout'
});

Router.route('/app/project', {
  name: 'backProject',
  layoutTemplate: 'backLayout'
});
