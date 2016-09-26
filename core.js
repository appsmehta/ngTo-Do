var app = angular.module("scotchTodo");


function mainController($scope,myService){

	$scope.todo = "";

	// when landing on the page, show all todos


	  myService.getMyArray().then(function(data){


		$scope.todos = data.data;
		console.log(data);
		console.log($scope.todos);
	})

	 
	 $scope.createToDo = function()
	  {
	  	
         console.log($scope.todos);
	  	$scope.todos.push({"TaskName":$scope.todo.TaskName,"TaskType":$scope.todo.TaskType});


	  }
	
	




		
}

ScotchTodo.controller("mainController",mainController);