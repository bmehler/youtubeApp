angular
  .module('video.config',  [
    'video.data',
    'video.fancybox',
    'video.timestamp.filter',
    'ngRoute'
  ])
  .config(config);

function config ($routeProvider) {
  $routeProvider
  .when('/videos', {
    templateUrl: 'module/video/view/video.tpl.html',
    controller: 'YoutubeCtrl',
    controllerAs: 'video'
  })
  .otherwise({
    redirectTo: '/videos'
  });
}
