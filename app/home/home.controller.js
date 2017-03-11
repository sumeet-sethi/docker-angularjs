class HomeController {

	constructor($scope, $state, $mdToast, $mdDialog, bpService) {
		var vm = this;
		this.$scope = $scope;
		this.$state = $state;
		this.$mdToast = $mdToast;
		this.$mdDialog = $mdDialog;
		this.bpService = bpService;
		vm.bpUserType = null;
		vm.isRequestVerified = false;
		vm.verifyUser = {
			aTeam: {
				user: ''
			},
			bTeam: {
				user: ''
			}
		}
		vm.teamPreview = {
			aTeam: {
				user: ''
			},
			bTeam: {
				user: ''
			}
		}
		vm.bpSubmitUserResponseObject = {};
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
		this.teamPreview = {
			aTeam: {
				user: ''
			},
			bTeam: {
				user: ''
			}
		};
		this.isRequestVerified = false;
	}

	bpAPI(isSubmitRequest) {
		let requestAction = '';
		let successMessage = '';
		let errorMessage = '';
		if (isSubmitRequest) {
			requestAction = 'TeamSubmit';
			successMessage = 'Success (Submit): User Info received';
			errorMessage = 'Error (Submit): ';
		} else {
			requestAction = 'VerifyTeam';
			successMessage = 'Success (Verify): Both Team A and Team B users are valid';
			errorMessage = 'Error (Verify): ';
		}

		let requestObject = {
			"requestProduct": "SampleAPI",
			"requestAction": requestAction,
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

		this.bpService.getBpService().save(requestObject).$promise.then
			((result) => {
				if (isSubmitRequest) {
					this.bpSubmitUserResponseObject = result;
				} else {
					this.isRequestVerified = true;
					this.mapTeamPreview(result);
				}
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent(successMessage)
						.theme("success-notification")
						.position('bottom left')
						.hideDelay(5000));
			}, (error) => {
				this.isRequestVerified = false;
				this.bpSubmitUserResponseObject = {};
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent(errorMessage + error)
						.theme("error-notification")
						.position('bottom left')
						.hideDelay(5000));
			});
	}

	mapTeamPreview(responseObject) {
		this.teamPreview = {
			aTeam: {
				user: responseObject.aTeam.user
			},
			bTeam: {
				user: responseObject.bTeam.user
			}
		}
	}

}

HomeController.$inject = ['$scope', '$state', '$mdToast', '$mdDialog', 'bpService'];
export default HomeController;