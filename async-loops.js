function loadUsers(userIds, load, done) {
    var loaded = 0;
    var users = [];
    userIds.forEach(function (id, idx) {
        load(id, function (user) {
            users[idx] = user;
            if (++loaded === userIds.length) {
                done(users);
            }
        });
    });
}

module.exports = loadUsers
