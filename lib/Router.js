Router.onBeforeAction(function () {

    $('.transition').addClass('active');
    setTimeout(function(){
      $('.transition').removeClass('active');
    }, 2500);

    if  (!Meteor.userId() && !Meteor.loggingIn()) {
        this.redirect('frontLogin');
        this.stop();
    } else {
        this.next();
    }
},{except: ['frontLogin', 'frontIndex', 'frontRegister'] });

// FRONT

Router.route('/', {
  name: 'frontIndex',
});

Router.route('/login', {
  name: 'frontLogin',
  layoutTemplate: 'frontLayout',
  onBeforeAction: function(){
    if(!Meteor.userId()){
      this.next();
    }else {
      this.redirect('backDashboard');
    }
  }
});

Router.route('/register', {
  name: 'frontRegister',
  layoutTemplate: 'frontLayout'
});

// APP

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
  waitOn: function(){
    return Meteor.subscribe('getListProjects', Meteor.userId());
  },
  data: function(){
    var projects = Projects.find();

    return {
      projects: projects
    };
  }
});

Router.route('/app/customers', {
  name: 'backCustomers',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    Meteor.subscribe('getListCustomers', Meteor.userId());
  },
  data: function(){
    var customers = Customers.find();

    console.log(customers);

    return {
      customers: customers
    };
  }
});

Router.route('/app/pr/:_id', {
  name: 'backProject',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getProject', this.params._id),
      Meteor.subscribe('getProjectCustomer', this.params._id)
    ];
  }
});

Router.route('/app/pr/:_id/invoices', {
  name: 'backListInvoices',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getProject', this.params._id),
      Meteor.subscribe('getProjectCustomer', this.params._id)
    ];
  }
});

Router.route('/app/pr/:_id/invoices/add', {
  name: 'backNewInvoice',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getProject', this.params._id),
      Meteor.subscribe('getProjectCustomer', this.params._id)
    ];
  }
});

Router.route('/app/settings', {
  name: 'backSettings',
  layoutTemplate: 'backLayout'
});

Router.route('/app/add/customer', {
  name: 'backNewCustomer',
  layoutTemplate: 'backLayout'
});

Router.route('/app/add/project', {
  name: 'backNewProject',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    Meteor.subscribe('getListCustomers', Meteor.userId());
  },
  data: function(){
    var customers = Customers.find();

    return {
      customers: customers
    };
  }
});
