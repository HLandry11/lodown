'use strict';

// YOU KNOW WHAT TO DO //

/** identity: Meant to take an argument and return that argument unchanged. 
*
*  @param {Any data type}: Literally anything to be used in the function. 
**/

function identity(anything) {
    return anything; 
}
module.exports.identity = identity;


/** typeof: takes an argument which can be any data type and determines what that
 * data type is. The typeof operator cannot determine if something is an array so
 * we use the Array.isArray() Method to determine if the argument is an array. We 
 * also need to determine if the argument is null value because the typeof operator
 * cannot determine the difference between an object and null values. Once we know 
 * the value isnt an array or null we can safely use typeof. 
 * 
 * @param {anything}: Any simple or complex data type. 
 **/
 
function typeOf (anything) {
    if (Array.isArray(anything)) {
        return 'array'; 
    } else if (anything === null) {
        return 'null';
    } 
    return typeof anything; 
}
module.exports.typeOf = typeOf;


/** first: takes an array and a number as parameters and returns a specific thing
 * based on the array and number provided. If everything goes as planned the function
 * will return the first <number> of items in <array>. 
 * 
 * @param {array}: the array we will access the properties of. 
 * @param {number}: the number that will determine how many items of <array> we
 * will access. 
 **/
 
function first (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number === isNaN || number === undefined) {
        return array[0];
    } else {
        return array.slice(0, number); 
    }
    
}
module.exports.first = first; 


/** last: does essentially the opposite of our 'first' function. This one instead
 * of returning the first <number> items of array, it will return the last <number>
 * of array. 
 * 
 * @param {array}: the same as the previous example, an array. 
 * @param {number}: the number that determines how many items we will return. 
 **/
 
function last (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number === isNaN || number === undefined) {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array; 
    } 
    return array.slice(number - 1);
}
module.exports.last = last; 


/** each: takes a collection and a function as parameters and will perform an 
 * action on each of the values in the collection. 
 * 
 * @param {collection}: if the collection is an array we will perform the function
 * on each index of the array. If the collection is an object, we will perform the
 * function on all of it's values. 
 * @param {function}: This is a function that is not currently defined, but when we
 * call the function we will tell the code exactly what to do with this function. 
 **/
 
function each (collection, funct) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            funct (collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            funct (collection[key], key, collection); 
        }
    }
}
module.exports.each = each; 


/** indexOf: takes an array and a value and returns the index that is the first 
 * occurence of that value. If the value does not exist, the function will simply
 * return -1. 
 * 
 * @param {array}: an array that could have any type of values in it. We will loop 
 * through the array looking for the parameter value. 
 * @param {value}: This is what we are looking for in array. 
 **/
 
function indexOf (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } 
        
    }
    return -1;
}
module.exports.indexOf = indexOf; 


/** filter: takes an array and a function as parameters. It will perform an action
 * on all of the items in the array. If the action returns true we will place that 
 * index value into a new array and then return that new array of values. 
 * 
 * @param {array}: an array of values
 * @param {function}: This function will perform an action on all items in the
 * array. It will likely return a boolean value of true or false.
 **/
 
function filter (array, funct) {
    var result = []; 
    for (var i = 0; i < array.length; i++) {
        if (funct (array[i], i, array) === true) {
            result.push(array[i]); 
        
        }
     
    } 
return result;   
}
module.exports.filter = filter; 


/** reject: takes an array and a function as parameters and returns an array of 
 * all the items in the array that returned false in a new array. It is the 
 * opposite of the 'filter' function above. 
 *
 * @param {array}: an array of values
 * @param {function}: returns a value. if the value is false we will place that 
 * value in a new array. 
 **/
 
function reject (array, funct) {
   var result = []; 
    for (var i = 0; i < array.length; i++) {
        if (funct (array[i], i, array) === false) {
            result.push(array[i]); 
        
        }
     
    } 
return result;   
}
module.exports.reject = reject; 

/** partition: takes an array and a function as parameters and performs an action
 * on each index of array. It returns an array of two sub-arrays, one for the items
 * that returned truthy and one for the items that returned falsey. 
 * 
 * @param {array}: array of items
 * @parm {function}: this function will take 2 parameters: element, key, and the 
 * entire array. It will return a value that will be truthy or falsey. 
 **/
 
function partition (array, funct) {
    var trueArr = []; 
    var falseArr = []; 
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (funct (array[i], i, array) === true) {
            trueArr.push(array[i]);
        } else {
            falseArr.push(array[i]);
        }
        
    }
   result.push(trueArr);
   result.push(falseArr);
   return result; 
}
module.exports.partition = partition; 


/** unique: takes an array as a parameter and returns a new array with all the
 * duplicates in the array removed.
 * 
 * @param {array}: we will loop through the array and remove all the items we have 
 * already seen. 
 **/
 
function unique (array) {
    var result = []; 
    for (var i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result; 
}
module.exports.unique = unique; 


/** map: takes a collection and a function as arguments and calls the function for 
 * each value in the collection. It returns the values in an array. 
 * 
 * @param {collection}: if the collection is an array the function will be 
 * performed on each item in the array, if it is an object we will perform it on 
 * each value on the object. 
 * @param {function}: this is an action we will perform to our collection
 **/
 
function map (collection, funct) {
    var arr = []; 
    if (Array.isArray(collection)) {
       for (var i = 0; i < collection.length; i++) {
            arr.push(funct(collection[i], i, collection));
            
       }
    } else {
        for (var key in collection) {
            arr.push(funct(collection[key], key, collection));
            
        }
    }
    return arr; 
}
module.exports.map = map; 


/** pluck: takes an array of objects and a property. It will return an array with
 * all the values of <property> for each element in the array. it also uses our 
 * map function to simplify the code. 
 * 
 * @param {array}: this array contains objects. 
 * @param {property}: this is what we want to access in each object of our parameter
 * array. 
 **/
 
function pluck (array, property) {
    return map(array, function(object, index, collection) {
        return object[property]; 
    });
}
module.exports.pluck = pluck; 


/** contains: takes an array and a value and will return a boolean of true if 
 * the array contains the value or false if the array does not contain the value. 
 * 
 * @param {array}: array of values. we will loop through this array and search 
 * for our value parameter
 * @param {value}: we will look through the array for this value. 
 **/
 
function contains (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; 
        } 
            
        }
        return false; 
    }
module.exports.contains = contains; 


/** every: takes a collection and a function as parameters and calls the function
 * for each element in the collection. If each element in the collection returns 
 * as true we will return true. If one element in the collection returns false we 
 * will return false. If function is not valid we will return true is all of the 
 * elements of the collection are truthy, else we will return false. 
 * 
 * @param {collection}: if the collection is an array, we will look through all
 * of its indexes and perform our function on it. If it is an object we will perform
 * the function on all of its values. 
 * @param {function}: if the function is defined, it will return a value which may 
 * be truthy or falsey. The function may also not be defined in which case we have
 * a contigency plan in place in our function. 
 **/
 
function every (collection, funct) {
    
    var test = funct;
    if (!test) {
        test = function(item) { if (item) { return true } else return false };

    }
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if(test(collection[i], i, collection) === false) {
                return false;
            }
            
        }
    } else {
        for (var key in collection) {
            if(test(collection[key], key, collection) === false) {
                return false; 
            }
        }
    }
    return true; 
}
module.exports.every = every; 

/** some: takes a collection and a function as parameters and will call the function 
 * on each element in  the collection. If the return value for even just one element
 * is true, function some will return true. It will only return false if all elements 
 * are false. If the function is not defined it will return true if any of the collection
 * elements are truthy. else it will return false. 
 * 
 * @param {collection}: we will call our function on each of these values.
 * @param {function}: this function will return possibly a true or false. 
 * if it is not defined we have a contingency plan in place. 
 **/
 
function some (collection, funct) {
    var test = funct; 
    if (!test) {
        test = function(item) { if (item) { return true } else return false };
    }
    if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
        if (test(collection[i], i, collection) === true) {
            return true; 
        }
        }
    } else {
        for (var key in collection) {
            if (test(collection[key], key, collection) === true) {
                return true;
            }
        }
    }
    return false; 
}
module.exports.some = some; 

/** reduce: takes an array, a function and a seed as parameters and will call the 
 * function for each element of the array. It will use the return value of the previous
 * index as an argument for the next function. We will start with our seed parameter. 
 * 
 * @param {array}: an array of values. 
 * @param {function}: performs an action on each of the elements in our array. 
 * @param {seed}: this is our starting point because the function will use a previous 
 * value to get a new value. We will use this on our first function call. 
 **/
 
function reduce (array, funct, seed) {
    var result = seed; 
    var i = 0;
    if (seed === undefined) {
        result = array[0];
        i = 1;
    }
    for (i; i < array.length; i++) {
         result = funct(result, array[i], i);
    }
    return result; 
}
module.exports.reduce = reduce; 

/** extend: takes 2 or more objects as parameters. It will copy values from each 
 * object after object 1 into object 1. finally the function will return 
 * object 1. 
 * 
 * @param {object1}: the starting object that we will place things into. 
 * @param {objectx): There can be infinitely many objects after object1. The values 
 * will be added to object1. 
 **/
 
function extend (obj, obj2) {
    var objects = [].slice.call(arguments, 1);
    
    for (var i = 0; i < objects.length; i++) {
         for (var key in objects[i]) {
        obj[key] = objects[i][key];
        
    }
    }
    

    return obj; 
}
module.exports.extend = extend; 

 
 
 
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



