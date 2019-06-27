var app = angular.module('todo',[]);

app.controller('todoCtrl',function($scope){
    $scope.todos =[{
            title : 'yoga',
            completed : false,
            createdAt : Date.now()
        },{
            title : 'flight',
            completed : false,
            createdAt : Date.now()
        },{
            title : 'study',
            completed : true,
            createdAt : Date.now()
        }
    ];

    $scope.remove = function(todo){
        var idx = $scope.todos.findIndex(function(item){
            
            return item.title == todo.title;
        })
        if(idx>-1){
            
            $scope.todos.splice(idx,1)
        }
    }
    $scope.add =function(newTodoTitle){
        var newTodo ={
            title : newTodoTitle ,
            completed : false ,
            createdAt : Date.now()
        };
        $scope.todos.push(newTodo);
        $scope.newTodoTitle='';

    }

});

