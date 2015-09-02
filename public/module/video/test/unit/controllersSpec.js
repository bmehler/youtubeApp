describe('Unit testing controllers', function () {
  beforeEach(module('application'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
   $controller = _$controller_;
  }));

  it('should have an YotubeCtrl controller', function () {
    var $scope = {};
    var YoutubeCtrl = $controller('YoutubeCtrl', { $scope: $scope });
    expect(YoutubeCtrl).toBeDefined();
  });

  it('should have a property orderProp snippet.title', function () {
    var $scope = {};
    var YoutubeCtrl = $controller('YoutubeCtrl', { $scope: $scope });
    expect(YoutubeCtrl.orderProp).toBe('snippet.title');
  });
});
