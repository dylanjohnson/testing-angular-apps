(function () {
    'use strict';

    function IngredientsRepository($http) {
        this.fetchIngredients = function () {
            return $http.get('/api/ingredients')
                .then(function (response) {
                    return response.data;
                });
        };
    }

    function IngredientsRepositoryMock($q, $timeout) {
        this.fetchIngredients = function () {
            var deferred = $q.defer(),
                ingredients = [
                    {
                        name: 'Thin Crust',
                        type: 'Crust',
                        cost: '3.00'
                    },
                    {
                        name: 'Hand Tossed Crust',
                        type: 'Crust',
                        cost: '3.25'
                    },
                    {
                        name: 'Pepperoni',
                        type: 'Topping',
                        cost: '1.00'
                    },
                    {
                        name: 'Jalapenos',
                        type: 'Topping',
                        cost: '0.75'
                    },
                    {
                        name: 'Chicken Wings',
                        type: 'Side',
                        cost: '4.50'
                    },
                    {
                        name: 'Breadsticks',
                        type: 'Side',
                        cost: '2.00'
                    }
                ];

            ingredients = _.sortBy(ingredients, 'name');

            $timeout(function () {
                deferred.resolve(ingredients);
            }, 4000);

            return deferred.promise;
        };
    }

    angular.module('pizzaShop')
        .service('ingredientsRepository', IngredientsRepository)
        .service('ingredientsRepositoryMock', IngredientsRepositoryMock)
        .config(function ($provide) {
            $provide.decorator('ingredientsRepository', function ($delegate, ingredientsRepositoryMock) {
                return ingredientsRepositoryMock;
            });
        })
    ;

}());