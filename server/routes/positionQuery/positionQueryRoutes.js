var  positionQueryController = require('./positionQueryController')

module.exports = function (router) {

    //                      VVV request-handler
  router.get('/getStats', positionQueryController.getStatsOnPosition);
  router.get('/getPositions', positionQueryController.getAvailablePositions);
  router.get('/getFilter', positionQueryController.getPositionsForFilter);
  console.log('routes');
};
