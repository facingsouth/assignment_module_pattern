var MOLE = MOLE || {};

MOLE.MainModule = function() {

  var init = function() {
    MOLE.BoardModule.initBoard();
    MOLE.MoleModule.initMole();
    _setupClickListener();
  }

  var _setupClickListener = function() {
    $('#board').on('click', '.mole', function(e) {
      var $target = $(e.target);
      var idx = $target.attr('id');
      MOLE.MoleModule.flashMole(idx);
    });
  }

  return {
    init: init,
  }

}();