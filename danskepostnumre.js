(function(){

  var postCodes = {},
      dp = window.danskepostnumre = {};

  dp.handleData = function (data) {
    for (var i = 0; i < data.length; i++) {
      postCodes[data[i].nr] = data[i].navn;
    }
  };

  dp.link = function (postCodeField, cityNameField) {
    postCodeField.addEventListener("blur", function (evt) {
      var by = dp.convert(evt.target.value);
      if (by) {
        cityNameField.value = by;
      }
    }, true);
  };

  dp.convert = function (postCode) {
    return postCodes[postCode];
  };

  // Bootstrap
  (function(){
    var script = document.createElement('script');
    script.src = 'http://dawa.aws.dk/replikering/postnumre?callback=danskepostnumre.handleData';
    document.getElementsByTagName('head')[0].appendChild(script);
  }());

}());
