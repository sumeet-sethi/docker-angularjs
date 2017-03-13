class HomeController {

	constructor($scope, $state, $mdToast, $mdDialog, bpService) {
		var vm = this;
		this.$scope = $scope;
		this.$state = $state;
		this.$mdToast = $mdToast;
		this.$mdDialog = $mdDialog;
		this.bpService = bpService;
		vm.verifyUser = {
			aTeam: {
				user: ''
			},
			bTeam: {
				user: ''
			}
		}
	}

	clearForm() {
		this.verifyUser = {
			aTeam: {
				user: ''
			},
			bTeam: {
				user: ''
			}
		};
	}

	bpAPI(isSubmitRequest) {
		let requestObject = {
			"requestProduct": "SampleAPI",
			"aTeam": [
				{
					"user": this.verifyUser.aTeam.user
				}
			],
			"bTeam": [
				{
					"user": this.verifyUser.bTeam.user
				}
			]
		};

		this.bpService.getBpService().get(requestObject).$promise.then
			((result) => {
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent("API Success: " + result.message)
						.theme("success-notification")
						.position('bottom left')
						.hideDelay(5000));
			}, (error) => {
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent("API Failed: " + error)
						.theme("error-notification")
						.position('bottom left')
						.hideDelay(5000));
			});
	}

}

HomeController.$inject = ['$scope', '$state', '$mdToast', '$mdDialog', 'bpService'];
export default HomeController;