app.controller('myCtrl', function($scope) {
	$scope.mydata = { val: "jake" }

	//dont have a watcher watching a watcher, watchers are powerful but can also be degrading sue with caution
	$scope.$watch('mydata.val', function(newval) {
		$scope.mydata.toolong = newval.length > 15

	})
})

