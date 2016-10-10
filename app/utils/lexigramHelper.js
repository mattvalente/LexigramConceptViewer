var axios = require('axios');

var key = "lxg123321";

function getUserInfo (username) {
  return axios.get('https://api.lexigram.io/search?q=' + username + '&apikey=' + key);
}


var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        console.log(user.data)
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
