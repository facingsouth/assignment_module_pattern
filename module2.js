var NS = NS || {}

  NS.myModule2 = function() {
    obj = {};

    publicVar = "2222"

    obj.setPublicVar = function(val){
      publicVar = val
    }

    obj.getPublicVar = function(){
      return publicVar
    }

    privateVar = "private"

    var _privateFunc = function(){
      console.log("you cant see me")
    }

    return obj
  }()
