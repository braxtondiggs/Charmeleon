'use strict';
/*global Parse*/
Parse.initialize('KETYHRsGGMHnWJaJ7D5GsQSzKoPlzlUgvnWasMCp', '8bmT9hs1uzAGvlG1P09Bgt6Sa1XCUnjGtLLSXsqa');
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	//var user = Parse.User.current();
	var Cocktails = Parse.Object.extend('Cocktails');
	/*var query = new Parse.Query(Cocktails);
	query.include('drinkware');
	query.find({
    	success: function(results) {
    		console.log(results);
    		var ingredients = results[0].relation('ingredients');
    		ingredients.query().find({
				success: function(list) {
					console.log(list);
				}, error: function() {
				  	console.log('error', $scope);
				}
			});
    	},
    	error: function() {
    		console.log($scope, 'error');
    	}
    });*/
	var Ingredients = Parse.Object.extend("Ingredients");
	var innerQuery = new Parse.Query(Ingredients);
	//innerQuery.exists("image");
	var query = new Parse.Query(Cocktails);
	query.matchesQuery("ingredients", innerQuery);
	query.find({
	  success: function(comments) {
	  	console.log(comments);
	    // comments now contains the comments for posts with images.
	  }
	});
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
