angular.module('starter.services', [])

.factory('HelperFactory', function($window) {
    return {

        localStorage: {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            remove: function(key) {
                return $window.localStorage.removeItem(key);
            }
        },

        http: {
            callRequestUrl: function(url, callbackFunction, errorFunction) {
                $http({
                    method: 'GET',
                    url: url
                }).then(function successCallback(response) {
                    return callbackFunction(response);
                }, function errorCallback(response) {
                    return errorFunction(response);
                });
            }
        }
    };
})

.factory('UserFactory', function(HelperFactory) {
    return {
        login: function(model, callbackFunction, errorFunction) {
            if (appSettings.mode == "dev") {
                HelperFactory.localStorage.setObject(model, appSettings.storageKeys.user);
                return callbackFunction(model);
            } else {
                HelperFactory.callRequestUrl(appSettings.apiUrls.user.login, function(response) {
                    return callbackFunction(response);
                }, function(response) {
                    return errorFunction(response);
                });
            }
        },
        register: function(model, callbackFunction, errorFunction) {
            if (appSettings.mode == "dev") {
                var user = {
                    email: model.email
                };
                
                HelperFactory.localStorage.setObject(user, appSettings.storageKeys.user);
                return callbackFunction(model);
            } else {
                HelperFactory.callRequestUrl(appSettings.apiUrls.user.login, function(response) {
                    return callbackFunction(response);
                }, function(response) {
                    return errorFunction(response);
                });
            }
        },
        isLogin: function(callbackFunction) {
            var user = HelperFactory.localStorage.getObject(appSettings.storageKeys.user);
            if (user != null && user != undefined) {
                return true;
            } else {
                return false;
            }
        }
    };
})

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
