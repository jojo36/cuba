Router.route('/', {
  name: 'frontIndex',
});

Router.route('/login', {
  name: 'frontLogin',
  layoutTemplate: 'frontLayout'
});

Router.route('/register', {
  name: 'frontRegister',
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

Router.route('/app/settings', {
  name: 'backSettings',
  layoutTemplate: 'backLayout'
});
