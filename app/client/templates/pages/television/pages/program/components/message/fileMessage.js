Template.fileMessage.events({
    'click #btn-cancel-file, focus #btn-cancel-file' : function(){
      document.querySelector('body').classList.remove('show-file-message');
    }
});

Template.fileMessage.helpers({
  img: function() {
    return Session.get('img');
  }
});