// Chained, compact version
function getDependencies(tree) {
   return Object.keys(tree.dependencies || {})
       .reduce(function(all, name) {
            var dependency = tree.dependencies[name];
            return all
                    .concat(name + "@" + dependency.version)
                    .concat(getDependencies(dependency))
        }, [])
        .sort()
       .filter(function(key, idx, arr) {
            return key !== arr[idx-1]
        });
}

// Uniquely filters the array on each call, but doesn't mutate anything.
//function getDependencies(tree) {
//    var dependencyNames = Object.keys(tree.dependencies || {});
//
//    var dependencies = dependencyNames.reduce(function(all, name) {
//        var dependency = tree.dependencies[name];
//        return all
//                .concat(name + "@" + dependency.version)
//                .concat(getDependencies(dependency))
//    }, []);
//
//    return dependencies.sort().filter(function(d, idx, arr) {
//        return d !== arr[idx-1]
//    });
//}

// Probably faster as only creates a single array and doesn't have to keep sorting. But mutates the result array.
//function getDependencies(tree, result) {
//    result = result || []
//
//    var dependencyNames = Object.keys(tree.dependencies || {})
//    dependencyNames.forEach(function(name) {
//        var dependency = tree.dependencies[name];
//        var key = name + "@" + dependency.version;
//
//        if(result.indexOf(key) === -1) {
//            result.push(key)
//        }
//
//        getDependencies(dependency, result)
//    })
//
//    return result.sort()
//}


module.exports = getDependencies
