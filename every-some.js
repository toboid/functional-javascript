function checkUsersValid(goodUsers) {
    return function (submittedUsers) {
        return submittedUsers.every(function (su) {
            return goodUsers.some(function (gu) {
                return su.id === gu.id
            });
        });
    };
}

module.exports = checkUsersValid;
