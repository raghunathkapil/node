var app = angular.module("romanCalculatorApp", []);

app.controller("calculatorController", function calculatorController(romanCalculationService) {

    this.selectOperator = function (operator) {
        this.operator = operator;
    }
    this.reset = function () {
        this.roman1 = '';
        this.roman2 = '';
        this.operator = '';
        this.result = '';
    }

    this.getResult = function () {
       // this.result = 0;
        // var num1 = parseFloat(this.roman1);
        // var num2 = parseFloat(this.roman2);
        self = this;
        var inputObj = {
            "operation": this.operator,
            "value1": this.roman1,
            "value2": this.roman2
        }

        romanCalculationService.getCalculationResult(inputObj).then(function (resultData) {
            self.result = resultData.result;
        });
    }
});

app.service('romanCalculationService', function ($http) {
    var self = this;
    self.getCalculationResult = function (inputObj) {
        var postCall = $http.post('http://localhost:8990/api/romanOperations', inputObj);
        var promiseCall = postCall.then(function (res) {
            return res.data;
        });
        return promiseCall;
    }

});