'use strict';
angular.module('starter.controllers')
.controller('SplashCtrl', ['$state', '$timeout', '$ionicHistory', function($state, $timeout, $ionicHistory) {
	$ionicHistory.nextViewOptions({disableAnimate: false, disableBack: true, historyRoot:'app.home'});
	$timeout(function() {
		$state.transitionTo('app.home');
		$ionicHistory.clearHistory();
	}, 6000);
}]);