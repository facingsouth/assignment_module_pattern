var MOLE = MOLE || {};

MOLE.BoardModule = function() {

  var $board;

  function initBoard() {
    this.$board = $('#board');
  }


  return {
    initBoard: initBoard,
  }


}();