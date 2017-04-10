/* ---------------- FRONT ---------- */

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

/* ---------------- APPLICATION ---------- */

Router.route('/app/dashboard', {
  name: 'backDashboard',
  layoutTemplate: 'backLayout',
  data: function(){
    var projects = Projects.find();

    return {
      projects: projects
    };
  },
  waitOn: function(){
    return Meteor.subscribe('getListProjects', Meteor.userId());
  }
});

Router.route('/app/projects', {
  name: 'backProjects',
  layoutTemplate: 'backLayout',
  data: function(){
    var projects = Projects.find();

    return {
      projects: projects
    };
  },
  waitOn: function(){
    return Meteor.subscribe('getListProjects', Meteor.userId());
  }
});

Router.route('/app/customers', {
  name: 'backCustomers',
  layoutTemplate: 'backLayout',
  data: function(){
    var customers = Customers.find();

    return {
      customers: customers
    };
  },
  waitOn: function(){
    return Meteor.subscribe('getListCustomers', Meteor.userId());
  }
});

Router.route('/app/project', {
  name: 'backProject',
  layoutTemplate: 'backLayout'
});

Router.route('/app/settings', {
  name: 'backSettings',
  layoutTemplate: 'backLayout'
});

/* ---------------- FORMS ---------- */

Router.route('/app/add/customer', {
  name: 'backNewCustomer',
  layoutTemplate: 'backLayout'
});

Router.route('/app/add/project', {
  name: 'backNewProject',
  layoutTemplate: 'backLayout',
  data: function(){
    var customers = Customers.find();

    return {
      customers: customers
    };
  },
  waitOn: function(){
    return Meteor.subscribe('getListCustomers', Meteor.userId());
  }
});
