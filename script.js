var NS = NS || {}


NS.myModule1 =  function(module2){

    obj = {}

    var publicVar = "its public"

    var publicMethod = function(){
      return "a public method"
    }

    var _privateVar = "my private variable"

    var _privateFunc = function(){
      console.log("you cant see me")
    }

    obj.setPublicVar = function(val){
      publicVar = val
      _privateFunc()
    }

    obj.getPublicVar = function(){
      return publicVar
    }

    obj.getPublicVars = function(){
      return module2.getPublicVar()
    }

    return obj

  }(NS.myModule2)

