// Rota Rede Meio Norte
Router.route('/rede-meionorte', function(){

  this.layout('ApplicationLayout');
  this.render('television');
  this.render('headerTelevision', {to: 'header'});
  this.render('navigationTelevision', {to: 'navigation'});

  fastRender: true

}, {
  name: 'television'
});

// Ao Entrar
Template.television.onRendered(function(){

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );

  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity:1,
    in_duration: 300,
    out_duration: 200,
    ready: function() {

    },
    complete: function() {

    }
  });
});

// Ao Sair
Template.television.onDestroyed(function(){

  // $('#modal-about, #modal-edit-profile, #modal-error-report').closeModal();

});