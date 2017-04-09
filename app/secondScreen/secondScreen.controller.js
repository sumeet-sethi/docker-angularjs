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
		vm.dialogText = 'COMPONENT ( $onInit ) - Add User';
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
		this.dialogText = 'COMPONENT ( $onChanges ) - Form was cleared. Re-enter user to add';
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
				this.dialogText = 'COMPONENT ( $onChanges ) - User was successfully added!!!';
				this.$mdToast.show(
					this.$mdToast.simple()
						.textContent(successMessage)
						.theme("success-notification")
						.position('bottom left')
						.hideDelay(5000));
			}, (error) => {
				this.dialogText = 'COMPONENT ( $onChanges ) - User addition failed!!!';
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