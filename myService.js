
var ScotchTodo = angular.module("scotchTodo",[]);


ScotchTodo.service("myService",["$http",function($http){

	var myArray = []; 

 	this.getMyArray = function getmyArray() {

 		return $http.get("./tasks.json").
 		then(function(data){
 			console.log(data);
 			if(data.status==200)
 			{
 				myArray = data;
 				return myArray;
 			}



 		},function(){})

 			




 		

		//return myArray;

 	}


	
}]);

