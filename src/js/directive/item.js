app.directive("appItem",function () {
    return {
        scope:{
            data:"="
        },
        restrict :"A",
        replace:true,
        templateUrl:'view/template/item.html'
    }
})
