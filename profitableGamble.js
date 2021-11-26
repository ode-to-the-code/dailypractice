

// takes probability, prize and pay 
// if the probability of winning the prize is higher than the pay, 
// then we return true, otherwise false 


function profitableGamble(prob, prize, pay) {
    return (prob * prize) > pay
}