function curryN(fn, n) {
    var paramCount = n || fn.length;

    return function(p) {
        if(paramCount === 1) {
            return  fn(p);
        }

        return curryN(fn.bind(null, p), --paramCount);
    }
}

module.exports = curryN

//// Model answer.
//function curryN(fn, n) {
//    if (typeof n !== 'number') n = fn.length;
//
//    function getCurriedFn(prev) {
//        return function(arg) {
//            var args = prev.concat(arg);
//
//            if (args.length < n)
//                return getCurriedFn(args);
//            else
//                return fn.apply(this, args)
//        };
//    }
//
//    return getCurriedFn([])
//}

// Solution Source:
// http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity
