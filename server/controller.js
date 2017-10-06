//Call the packages we need.
var express = require('express'); //call express.
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

var romanService = require('../server/romanConversionService');

router.post('/romanOperations', romanMathematicalOperations);

function romanMathematicalOperations(req, res) {

    var value1 = romanService.fromRoman(req.body.value1);
    var value2 = romanService.fromRoman(req.body.value2);
    var result = '';

    if (req.body.value1 !== '' && req.body.value2 !== '') {
        switch (req.body.operation) {

            case '+':
                result = romanService.toRoman(value1 + value2);
                break;

            case '-':
                result = romanService.toRoman(value1 - value2);
                break;

            case '*':
                result = romanService.toRoman(value1 * value2);
                break;

            case '/':
                result = romanService.toRoman(value1 / value2);
                break;

            default:
                result = 'Inputs are not provided correctly!';
        }
    } else {
        result = 'Inputs are not provided correctly!';
    }

    res.send({ "result": result });
}

module.exports = router;