if (Meteor.isClient) {
  // counter starts at 1337
  Session.setDefault('counter', 1337);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click #button1': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      console.log('HEY, STOP THAT!')
    },
    
    'click #button2': function () {
      // decrement the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
      console.log('OUCH!')
    },

    'click .something': function() {
      Session.set('cats', 'yay');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
