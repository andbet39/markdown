

 marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngSanitize'])


    .controller('markdownController',function($scope){

        $scope.result="prova";

        $scope.$watch('source', function() {
            $scope.result =marked($scope.source);
        });



    });

