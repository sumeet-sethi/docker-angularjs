import SecondScreenConfig from './secondScreen.config';
import SecondScreenController from './secondScreen.controller';

let secondScreenModule = angular.module('bpui.secondScreen', []);
secondScreenModule.config(SecondScreenConfig);
secondScreenModule.controller('SecondScreenController', SecondScreenController);

export default secondScreenModule = secondScreenModule.name;