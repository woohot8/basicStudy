
angular.module('todo').directive('todoTitle',function(){
    return{
        template : 'todo list'
    }
});

angular.module('todo').directive('todoItem',function(){
    return{
        templateUrl :'todoItem.tpl.html'
    }
});

angular.module('todo').directive('todoFilters',function(){
    return{
        templateUrl :'todoFilters.tpl.html'
    }
});