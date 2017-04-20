var app=angular.module('myApp',['ng','ngRoute']);
     app
        .config(function ($routeProvider) {
         $routeProvider.when('/new1',{
             templateUrl:'view/new1.html'
         }).when('/new2',{
             templateUrl:'view/new2.html',
             controller:'base2'
         }).when('/new3',{
             templateUrl:'view/new3.html',
             controller:'base3'
         }).when('/new4',{
             templateUrl:'view/new4.html',
             controller:'base4'
         }).otherwise({
             redirectTo:'/new1'
         })
     });
    app
        .controller('base1', function($scope) {
        $scope.name= "小慧";
        $scope.alert1=function () {
            console.log($scope.name)
        }
    })
        .controller("base2",function ($scope) {
            $scope.arr=[
                {
                    title:"小李加油",
                    des:"彪悍的人生不需要解释"
                },
                {
                    title:"小辉加油",
                    des:"彪悍的人生不需要解释"
                },
                {
                    title:"小明加油",
                    des:"彪悍的人生不需要解释"
                },
                {
                    title:"小红加油",
                    des:"彪悍的人生不需要解释"
                }
            ]
        })
        .controller("new",function ($scope) {
            $scope.name='小李';
            $scope.alert2=function () {
                console.log($scope.name)
            }
        })
        .controller("base3",function ($scope) {
                 $scope.age=233;
        })
        .controller("base4",function ($scope) {
            $scope.define="自定义";
            $scope.mimi="可口可乐";
            $scope.alert=function (name) {
                alert(name)
            }
        });
    app
        .directive('ale',function () {
            return{
                scope:{gre:'&'},
                restrict:'AE',
                template:'<input ng-model="shuru"><br><br><br><br><button class="btn btn-success" ng-click="gre({name3:shuru})">点击</button><br><br><br><br>'
            }
        })
        .directive('jia',function () {
            return{
                scope:{},
                restrict:'AE',
                template:'<div><input class="input-lg"  type="text" ng-model="user"><span>{{user}}</span></div>',
                replace:true
            }
        })
        .directive('nuli',function () {
            return{
                scope:{flag:'@'},
                restrict:'AE',
                template:'<h2>{{flag}}</h2>',
                replace:true
            }
        })
        .directive("try",function () {
            return{
                scope:{flag2:'='},
                restrict:'AE',
                template:'<input ng-model="flag2">',
                replace:true
            }
        })
        .directive('hello',function () {
        return{
            restrict:'AEMC',
            template:'<div>hello world <div>',
            replace:true,
            link:function (scope,element,attrs) {
                element.on("click",function(){
                   scope.$apply(attrs.qq);
                })
            }
        }
    })
        .directive('superman',function () {
            return{
                scope:{},
                restrict:'AE',
                replace:true,
                transclude:true,
                template:"<div><div ng-transclude></div></div>",
                controller:function ($scope) {
                    $scope.arr=[];
                    this.addstrength=function () {
                        $scope.arr.push("strength");
                    };
                    this.addspeed=function () {
                        $scope.arr.push("addspeed");
                    };
                    this.addlight=function () {
                        $scope.arr.push("light");
                    }
                },
                link:function (scope,element,attrs) {
                    element.addClass("btn btn-block btn-info");
                    element.on("click",function () {
                        console.log(scope.arr);
                    })
                }
            }
        })
        .directive('strength',function () {
           return {
               require:'^superman',
               link:function(scope,element,attrs,supermanCrtl){
                   supermanCrtl.addstrength();
               }
           }
        })
        .directive('speed',function () {
           return {
               restricts:'AE',
               require:'^superman',
               link:function(scope,element,attrs,supermanCrtl){
                   supermanCrtl.addspeed();
               }
           }
        })
        .directive('light',function () {
               return {
                   restricts:'AE',
                   require:'^superman',
                   link:function(scope,element,attrs,supermanCrtl){
                       supermanCrtl.addlight();
                   }
               }
            });


