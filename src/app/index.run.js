(function() {
  'use strict';

  angular
    .module('porta')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
