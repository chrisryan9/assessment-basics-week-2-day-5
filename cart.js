///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

console.log(summedPrice);

console.log('-----------------------------------')

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
Write a function called `calcFinalPrice` that
can take in `cartTotal`,`couponValue`,
and `tax` arguments. 

Inside the function, calculate the tax 
on the cartTotal and add it in. Subtract
the value of the coupon. Return the final
number. 

Note: the numbers passed in for `tax` will be
decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
};

const finalPrice = calcFinalPrice(25, 10, 0.06);

console.log(finalPrice);



console.log('-----------------------------------')

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
// 1. `name` = string type: The name of the customer is important information for a restaurant to identify the customer and make their experience more personal.
// 2.`email` = string type: Email is an important communication piece of information for a restaurant to have to allow them to send order confirmations and updates. 
// 3.`phoneNumber` = string type: Important for a restaurant to have incase they need to contact the customer with any issues. 
// 4.`deliveryAddress` = string type: Delivery address is a crucial piece of info to have if the restaurant offers delivery services.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE



const customer = {
    name: 'Chris Ryan',
    email: 'chrisryan@gmail.com',
    phoneNumber: '801-825-5519',
    deliveryAddress: '123 st, New York, USA'
};


console.log(customer);