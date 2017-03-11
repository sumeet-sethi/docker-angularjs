class HomeConfig {

    static initRoute($stateProvider, $urlRouterProvider) {
        $stateProvider.state('bp.home', {
            url: "/home",
            views: {
                'content@': {
                    templateUrl: require("./home.html"),
                    controller: "HomeController as homeCtrl"
                }
            }
        });
        $urlRouterProvider.otherwise("/bp/home");
    }
}
HomeConfig.initRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
export default HomeConfig.initRoute;