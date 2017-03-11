class SecondScreenConfig {

    static initRoute($stateProvider) {
        $stateProvider.state('bp.secondScreen', {
            url: "/secondScreen",
            views: {
                'content@': {
                    templateUrl: require("./secondScreen.html"),
                    controller: "SecondScreenController as secondScreenCtrl"
                }
            }
        });
    }

}

SecondScreenConfig.initRoute.$inject = ['$stateProvider'];
export default SecondScreenConfig.initRoute;