const express = require('express');
const router = express.Router();

let calculationHistory = [{a:1,b:2,operator:'-',result:-1}]
let result

router.get('/', (req, res) => {
    res.send(calculationHistory)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    calculateValue(req.body)
    
});

const calculateValue = (calculationData) => {
    let a = calculationData.a
    let b = calculationData.b

    switch (calculationData.operator) {
        case '+':
            result = a + b
        case '-':
            result = a - b
        case '*':
            result = a * b
        case '/':
            result = a / b
    }
    calculationHistory.push({
        a: a,
        b: b,
        operator: operator,
        result: result
    });        
}

module.exports = router;