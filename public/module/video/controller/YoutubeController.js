angular
  .module('video', [
    'video.config',
  ])
  .controller('YoutubeCtrl', YoutubeCtrl);

YoutubeCtrl.$inject = ['$scope', '$filter', 'YoutubeDataService', 'FancyBoxService'];

function YoutubeCtrl ($scope, $filter, YoutubeDataService, FancyBoxService) {
  var video = this;
  video.videos = [ ];
  video.orderProp = 'snippet.title';

  $scope.titles = [
    { id: 1, label: 'Ascending Order (A-Z)' },
    { id : 2, label: 'Descending Order (Z-A)' }
  ];

  $scope.durations = [
    { id: 0, label: 'Please select' },
    { id: 1, label: 'Shortest video first' },
    { id : 2, label: 'Longest video first' }
  ];

  $scope.orderDuration = function() {
    if ($scope.duration.id === 1) {
      video.orderProp = 'videoDuration';
    } else if ($scope.duration.id === 2) {
      video.orderProp ='-videoDuration';
    } else {
      video.orderProp = 'snippet.title';
    }
  };

  $scope.orderTitle = function() {
    if ($scope.title.id === 1) {
      video.orderProp = 'snippet.title';
    } else {
      video.orderProp ='-snippet.title';
    }
  };

  $scope.title = $scope.titles[0];
  $scope.duration = $scope.durations[0];

  getVideos();

  function getVideos () {
    YoutubeDataService.getSearchList()
      .success(function (data) {
        var vid = '';
        for (var i = 0; i< data.items.length; i++) {
          vid += data.items[i].id.videoId + ',';
        }
        var vidnew = vid.substr(0, vid.length-1);

        YoutubeDataService.getVideoList(vidnew)
        .success(function (data) {
          video.videos = data;
          for (var j = 0; j < video.videos.items.length; j++) {
            video.videos.items[j].videoDuration = moment.duration(
            video.videos.items[j].contentDetails.duration)
            .asMilliseconds();
          }
          return video.videos;
        })
        .error(function (error) {
          console.log(error);
        });
      })
      .error(function (error) {
        console.log(error);
      });
  };

  $scope.showDialog = function(video) {
    FancyBoxService.openBox('div.wrapper' + video);
  };
}
