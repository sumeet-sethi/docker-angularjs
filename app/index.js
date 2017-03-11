// External Libraries
import 'angular';
import 'lodash';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';
import angularResource from 'angular-resource';

// BoilerPlate (aka BP) Libraries
import home from './home/home.module';
import menu from './menu/menu.module';
import secondScreen from './secondScreen/secondScreen.module';
import BpService from './services/bpServices';
import './assets/styles/bp.css';

export const bpuiModule = angular.module('bpui', [angularMaterial, angularAnimate, angularUIRouter, angularMessages, angularResource, menu, secondScreen, home, BpService]);
bpuiModule.config(BpuiConfig);
bpuiModule.controller('BpuiController', BpuiController);

BpuiConfig.$inject = ['$stateProvider', '$mdThemingProvider'];
function BpuiConfig($stateProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('light-blue', {'default': '800'}).accentPalette('blue-grey').dark();
    $mdThemingProvider.theme("success-notification");
    $mdThemingProvider.theme("error-notification");

    $stateProvider.state('bp', {
        url: "/bp",
        abstract: true,
        views: {
            'menu': {
                templateUrl: require("./menu/menu.html"),
                controller: "MenuController as menu"
            }
        }
    });
}

BpuiController.$inject = ['$mdSidenav', '$state'];
function BpuiController($mdSidenav, $state) {
    let vm = this;
    vm.isAppRendered = true;
    vm.toggleMenu = () => {
        $mdSidenav('left').toggle();
    };
    vm.closeMenu = () => {
        $mdSidenav('left').close();
    };
    vm.navToSecond = () => {
        $state.go('bp.secondScreen');
        $mdSidenav('left').close();
    };
    vm.navToHome = () => {
        $state.go('bp.home');
        $mdSidenav('left').close();
    };
}