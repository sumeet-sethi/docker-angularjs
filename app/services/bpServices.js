var moduleName = 'bpui.services';
export class BpService {
    constructor($resource) {
        this.$resource = $resource;
        this.bpUrl = 'http://192.168.0.14:8080/SampleAPI/service';
    }

    getBpService() {
        return this.$resource('./app/data/Response.json');  // Note: Call local JSON files with GET
        //return this.$resource(this.bpUrl);
    }

    static bpFactory($resource) {
        return new BpService($resource);
    }
}

BpService.bpFactory.$inject = ['$resource'];
angular.module(moduleName, []).factory('bpService', BpService.bpFactory);
export default moduleName;