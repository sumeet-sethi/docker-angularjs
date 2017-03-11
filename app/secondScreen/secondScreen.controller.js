class SecondScreenController {

	constructor($scope, $mdToast, bpService) {
		var vm = this;
		this.$scope = $scope;
		this.$mdToast = $mdToast;
		this.bpService = bpService;
		vm.secondScreenInfo = {
			userName: '',
			password: '',
			confirmPassword: '',
			passwordMatch: false
		};
	}

	clearForm() {
		this.secondScreenInfo = {
			userName: '',
			password: '',
			confirmPassword: '',
			passwordMatch: false
		};
		this.$scope.secondScreenForm.$setPristine(true);
		this.$scope.secondScreenForm.$setUntouched(true);
	}

	submit() {
		if (this.secondScreenInfo.password !== this.secondScreenInfo.confirmPassword) {
			this.$mdToast.show(
				this.$mdToast.simple()
					.textContent('Error: Password Mismatch!')
					.theme("error-notification")
					.position('bottom left')
					.hideDelay(3000));
			return;
		}

		let requestObject = {
			"requestProduct": "SampleAPI",
			"requestAction": 'SubmitUser',
			"requestObject": {
				"user": this.secondScreenInfo.userName,
				"password": this.secondScreenInfo.password
			}
		};
		
		let successMessage = "Success (Submit): User submitted successfully"
		let errorMessage = "Error (Submit): "

		this.bpService.getBpService().save(requestObject).$promise.then
			((result) => {
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent(successMessage)
						.theme("success-notification")
						.position('bottom left')
						.hideDelay(5000));
			}, (error) => {
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent(errorMessage + error)
						.theme("error-notification")
						.position('bottom left')
						.hideDelay(5000));
			});

	}
}

SecondScreenController.$inject = ['$scope', '$mdToast', 'bpService'];
export default SecondScreenController;