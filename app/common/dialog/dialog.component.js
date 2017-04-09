class DialogController {
    constructor() {
        var vm = this;

        // Lifecycle hooks
        this.$onInit = () => {
            console.log('Init: ' + this);
        };

        this.$onChanges = (changesObj) => {
            console.log('Changes: ' + changesObj);
        };
    }
}

DialogController.$inject = [];

const dialogComponentConfig = {
    bindings: {
        dialog: '<'
    },
    templateUrl: require("./dialog.html"),
    controller: DialogController,
};

export default dialogComponentConfig;