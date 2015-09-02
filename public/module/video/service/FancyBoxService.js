angular
  .module('video.fancybox', [ ] )
  .service('FancyBoxService', FancyBoxService);

FancyBoxService.$inject = [ ];

function FancyBoxService () {
  return {
    openBox: openBox,
    closeBox: closeBox
  };

  function openBox (selector) {
      $.fancybox.open($(selector).html());
  }

  function closeBox () {
      $.fancybox.close();
  }
}
