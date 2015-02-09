function loadUsers(userIds, load, done) {
    var loaded = 0;
    var users = userIds;
    userIds.forEach(function (id) {
        load(id, function (user) {
            users[users.indexOf(id)] = user;
            if (++loaded >= userIds.length) {
                done(users);
            }
        });
    });
}

// Model answer

//function loadUsers(userIds, load, done) {
//    var completed = 0
//    var users = []
//    userIds.forEach(function (id, index) {
//        load(id, function (user) {
//            users[index] = user
//            if (++completed === userIds.length) return done(users)
//        })
//    })
//}

module.exports = loadUsers
