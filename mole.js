var MOLE = MOLE || {};

MOLE.MoleModule = function() {

  var $moles;

  var initMole = function() {
    $moles = $('.mole');
  }

  var flashMole = function(idx) {
    $mole = $('#'+idx);
    $mole.addClass('active');
    var randomInterval = Math.floor(Math.random()*500+500);
    setTimeout(function(){
      $mole.removeClass('active');
    }, randomInterval)
  }

  return {
    initMole: initMole,
    flashMole: flashMole,

  }

}();