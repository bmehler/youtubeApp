describe('Unit testing services', function () {
  var YoutubeDataService, FancyBoxService, httpBackend, http;

  beforeEach(module('application'));

  beforeEach(inject(function (_YoutubeDataService_, _FancyBoxService_, $httpBackend, $http) {
    YoutubeDataService = _YoutubeDataService_;
    FancyBoxService = _FancyBoxService_;
    httpBackend = $httpBackend;
    http = $http;
  }));

  it('should have YoutubeDataService', function () {
    expect(YoutubeDataService).toBeDefined();
  });

  it('should have the function getSearchList', function () {
    expect(YoutubeDataService.getSearchList).toBeDefined();
  });

  it('should have the function getVideoList', function () {
    expect(YoutubeDataService.getVideoList).toBeDefined();
  });

  it('should call getSearchList once', function () {
    spyOn(YoutubeDataService, 'getSearchList').andCallThrough();
    YoutubeDataService.getSearchList();
    expect(YoutubeDataService.getSearchList).toHaveBeenCalled();
    expect(YoutubeDataService.getSearchList.calls.length).toEqual(1);
  });

  it('should call getVideoList once', function () {
    spyOn(YoutubeDataService, 'getVideoList').andCallThrough();
    YoutubeDataService.getVideoList();
    expect(YoutubeDataService.getVideoList).toHaveBeenCalled();
    expect(YoutubeDataService.getVideoList.calls.length).toEqual(1);
  });

  it('should call $http.get in getSearchList', inject(function () {
    spyOn(http, 'get');
    YoutubeDataService.getSearchList();
    expect(http.get).toHaveBeenCalled();
  }));

  it('should call $http.get in getVideoList', inject(function () {
    spyOn(http, 'get');
    YoutubeDataService.getVideoList();
    expect(http.get).toHaveBeenCalled();
  }));

  it('should call getSearchList and return a result', function () {
    spyOn(YoutubeDataService, 'getSearchList').andCallThrough();
    var result = YoutubeDataService.getSearchList();
    expect(result).not.toBe(null);
  });

  it('should call getVideoList and return a result', function () {
    spyOn(YoutubeDataService, 'getVideoList').andCallThrough();
    var result = YoutubeDataService.getVideoList();
    expect(result).not.toBe(null);
  });

  it('should have FancyBoxService', function () {
    expect(FancyBoxService).toBeDefined();
  });

  it('should have the function openBox', function () {
    expect(FancyBoxService.openBox).toBeDefined();
  });

  it('should have the function closeBox', function () {
    expect(FancyBoxService.closeBox).toBeDefined();
  });
});
