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

    return {
      customers: customers
    };
  }
});

// PROJECT

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

Router.route('/app/pr/edit/:_id', {
  name: 'backEditProject',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    Meteor.subscribe('getProject', this.params._id);
    Meteor.subscribe('getListCustomers', Meteor.userId());
  },
  data: function(){
    var customers = Customers.find();
    var project = Projects.findOne();
    return {
      project: project,
      customers: customers
    };
  }
});

// QUOTATIONS

Router.route('/app/pr/:_id/quotations', {
  name: 'backListQuotations',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getProject', this.params._id),
      Meteor.subscribe('getProjectCustomer', this.params._id),
      Meteor.subscribe('getListQuotations', this.params._id)
    ];
  }
});

Router.route('/app/pr/:_id/quotations/add', {
  name: 'backNewQuotation',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getProject', this.params._id),
      Meteor.subscribe('getProjectCustomer', this.params._id)
    ];
  }
});

Router.route('/app/pr/quot/:_id', {
  name: 'backQuotation',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    Meteor.subscribe('getDocument', this.params._id);
  },
  data: function(){
    var documents = Documents.findOne();
    return {
      documents: documents
    };
  }
})

// INVOICES

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
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getListCustomers', Meteor.userId())
    ];
  }
});

Router.route('/app/edit/customer/:_id', {
  name: 'backEditCustomer',
  layoutTemplate: 'backLayout',
  waitOn: function(){
    return [
      Meteor.subscribe('getCustomer', this.params._id)
    ];
  }
});
