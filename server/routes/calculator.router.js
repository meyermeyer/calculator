const express = require('express');
const router = express.Router();

let calculationHistory = [{a:1,b:2,operator:'-',result:-1}]


router.get('/', (req, res) => {
    res.send(calculationHistory)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    calculateValue(req.body)
    res.sendStatus(201)
    
});

const calculateValue = (calculationData) => {
    let a = parseFloat(calculationData.valueA)
    let b = parseFloat(calculationData.valueB)
    let operator = calculationData.operator
    let result

    console.log('calculate value', a, b, operator)

    switch (operator) {
        case '+':
            result = a + b
        case '-':
            result = a - b
        case '*':
            result = a * b
        case '/':
            result = a / b
    }

   
    console.log('result', result)
    calculationHistory.push({
        a: a,
        b: b,
        operator: operator,
        result: result
    });        
}

module.exports = router;