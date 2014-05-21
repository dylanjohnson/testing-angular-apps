(function () {
    function IngredientsController($scope, ingredientsRepository, $modal) {
        $scope.loading = true;

        this.load = function () {
            ingredientsRepository.fetchIngredients()
                .then(function (ingredients) {
                    $scope.loading = false;

                    $scope.ingredients = ingredients;
                });
        };

        this.load();

        $scope.clickIngredient = function (ingredient) {
            $scope.activeIngredient = ingredient;

            $modal.open({
                scope: this,
                templateUrl: 'ingredients/active-ingredient-modal.html'
            });
        };
    }

    angular.module('pizzaShop')
        .controller('ingredientsController', IngredientsController);
}());