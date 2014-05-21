(function () {
    function IngredientsController($scope, ingredientsRepository) {
        $scope.loading = true;

        this.load = function () {
            ingredientsRepository.fetchIngredients()
                .then(function (ingredients) {
                    $scope.loading = false;

                    $scope.ingredients = ingredients;
                });
        };

        this.load();
    }

    angular.module('pizzaShop')
        .controller('ingredientsController', IngredientsController);
}());