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
		vm.dialogText = 'COMPONENT ( $onInit ) - Enter Team A and Team B users';
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
		this.dialogText = 'COMPONENT ( $onChanges ) - Form was cleared. Re-enter users to submit';
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
				this.dialogText = 'COMPONENT ( $onChanges ) - Users were successfully submitted!!!';
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent("API Success: " + result.message)
						.theme("success-notification")
						.position('bottom left')
						.hideDelay(5000));
			}, (error) => {
				this.dialogText = 'COMPONENT ( $onChanges ) - Users submission failed!!!';
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