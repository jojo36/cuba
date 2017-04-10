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
  layoutTemplate: 'backLayout'
});

Router.route('/app/search', {
  name: 'backSearch',
  layoutTemplate: 'backLayout'
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
    return Meteor.subscribe('allCustomers');
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

Router.route('/app/add/customer', {
  name: 'backNewCustomer',
  layoutTemplate: 'backLayout'
});
