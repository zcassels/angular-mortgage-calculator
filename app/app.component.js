(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: 'view.html'
    })
    .Class({
      constructor: function() {
          this.some_value = "Foobar";
      }
    });
})(window.app || (window.app = {}));