angular
  .module('video.data', [ ] )
  .service('YoutubeDataService', YoutubeDataService);

YoutubeDataService.$inject = ['$http'];

var urlBaseGetSearchList = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
var urlBaseGetVideoList = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails';
var channelId = '';
var maxResults = '30';
var order = 'rating';
var apiKey = '';

function YoutubeDataService ($http) {
  return {
    getSearchList: getSearchList,
    getVideoList: getVideoList
  };

  function getSearchList () {
    return $http.get(
      urlBaseGetSearchList +
      '&channelId=' + channelId +
      '&maxResults=' + maxResults +
      '&order=' + order +
      '&key=' + apiKey
    );
  }

  function getVideoList (videos) {
    return $http.get(
      urlBaseGetVideoList +
        '&id=' + videos +
        '&key=' + apiKey
      );
  }
}
