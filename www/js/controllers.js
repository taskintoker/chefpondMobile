angular.module('starter.controllers', ['tabSlideBox'])

.controller('loginCtrl', function($scope, $state, $rootScope, UserFactory) {

    $scope.user = {
        email: 'ertucaglar@gmail.com',
        password: '123456',
        term: false
    }

    $scope.register = function(user) {
        UserFactory.register(user, function(data){
            console.log(data);
            $state.go('four-category');
        });
    };

    $scope.login = function(user) {
        if (user.email == '' || user.password == '') {
            $rootScope.showAlert("Tüm alanları doldurunuz");
        } else if (user.email != undefined && user.password != undefined) {
            console.log(user);

            UserFactory.login(user, function(data) {
                $state.go('four-category');
            });
        }
    };
})


.controller('tasteCtrl', function($scope, $rootScope, $scope, $stateParams, $q, $location, $window, $timeout, $ionicModal) {

    /*detail modal*/
    $ionicModal.fromTemplateUrl('templates/modal-detail-info.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.infoModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-collection.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.collectionModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-share.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.shareModal = modal;
    });


    /*tabs */
    $scope.tabs = [{
        "text": "Taste category",
        "class": "taste-category-icon",
        "filter": "tasteCategory"
    }, {
        "text": "Member Type",
        "class": "members-type-category-icon",
        "filter": "memberType"
    }, {
        "text": "Material's",
        "class": "materails-category-icon",
        "filter": "materials"
    }, {
        "text": "Featured",
        "class": "featured-category-icon",
        "filter": "featured"
    }, {
        "text": "World Wide",
        "class": "world-wide-category-icon",
        "filter": "worldWide"
    }];
    $scope.onSlideMove = function(data) {
        console.log("You have selected " + data.index + " tab");
    };



    /*filter modals*/
    $ionicModal.fromTemplateUrl('templates/taste-category.html', function($ionicModal) {
        $scope.tasteCategory = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/member-type.html', function($ionicModal) {
        $scope.memberType = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/materials.html', function($ionicModal) {
        $scope.materials = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/featured.html', function($ionicModal) {
        $scope.featured = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/world-wide.html', function($ionicModal) {
        $scope.worldWide = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.filterModalOpen = function(index) {
        if (index == "memberType") {
            $scope.memberType.show();
        } else if (index == "tasteCategory") {
            $scope.tasteCategory.show();
        } else if (index == "materials") {
            $scope.materials.show();
        } else if (index == "featured") {
            $scope.featured.show();
        } else if (index == "worldWide") {
            $scope.worldWide.show();
        }
    };

    $scope.filterModalClose = function(index) {
        if (index == "memberType") {
            $scope.memberType.hide();
        } else if (index == "tasteCategory") {
            $scope.tasteCategory.hide();
        } else if (index == "materials") {
            $scope.materials.hide();
        } else if (index == "featured") {
            $scope.featured.hide();
        } else if (index == "worldWide") {
            $scope.worldWide.hide();
        }
    };

    /*filter modals*/

    /*accordion */
    $scope.groups = [];
    for (var i = 0; i < 1; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j = 0; j < 6; j++) {
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    /*accordion */


    /*upload modals*/
    $ionicModal.fromTemplateUrl('templates/upload.html', function($ionicModal) {
        $scope.uploadModal = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.uploadModalOpen = function(index) {
        if (index == "uploadModal") {
            $scope.uploadModal.show();
        } else {

        }
    };

    $scope.uploadModalClose = function(index) {
        if (index == "uploadModal") {
            $scope.uploadModal.hide();
        } else {

        }
    };







})




.controller('writerCtrl', function($scope, $rootScope, $scope, $stateParams, $q, $location, $window, $timeout, $ionicModal) {

    /*detail modal*/
    $ionicModal.fromTemplateUrl('templates/modal-detail-info.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.infoModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-collection.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.collectionModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-share.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.shareModal = modal;
    });


    /*filter modals*/

    $ionicModal.fromTemplateUrl('templates/writing-category.html', function($ionicModal) {
        $scope.writingCategory = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/member-type.html', function($ionicModal) {
        $scope.memberType = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/materials.html', function($ionicModal) {
        $scope.materials = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/featured.html', function($ionicModal) {
        $scope.featured = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/world-wide.html', function($ionicModal) {
        $scope.worldWide = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });



    $scope.filterModalOpen = function(index) {
        if (index == "memberType") {
            $scope.memberType.show();
        } else if (index == "writingCategory") {
            $scope.writingCategory.show();
        } else if (index == "materials") {
            $scope.materials.show();
        } else if (index == "featured") {
            $scope.featured.show();
        } else if (index == "worldWide") {
            $scope.worldWide.show();
        }
    };

    $scope.filterModalClose = function(index) {
        if (index == "memberType") {
            $scope.memberType.hide();
        } else if (index == "writingCategory") {
            $scope.writingCategory.hide();
        } else if (index == "materials") {
            $scope.materials.hide();
        } else if (index == "featured") {
            $scope.featured.hide();
        } else if (index == "worldWide") {
            $scope.worldWide.hide();
        }
    };

    /*filter modals*/


    $scope.tabs = [{
        "text": "Writing Category",
        "class": "writing-category-icon",
        "filter": "writingCategory"
    }, {
        "text": "Featured",
        "class": "featured-category-icon",
        "filter": "featured"
    }, {
        "text": "World Wide",
        "class": "world-wide-category-icon",
        "filter": "worldWide"
    }];
    $scope.onSlideMove = function(data) {
        console.log("You have selected " + data.index + " tab");
    };

    console.log($stateParams.id);

})



.controller('productCtrl', function($scope, $rootScope, $scope, $stateParams, $q, $location, $window, $timeout, $ionicModal) {

    /*detail modal*/
    $ionicModal.fromTemplateUrl('templates/modal-detail-info.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.infoModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-collection.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.collectionModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-share.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.shareModal = modal;
    });


    /*filter modals*/

    $ionicModal.fromTemplateUrl('templates/product-category.html', function($ionicModal) {
        $scope.productCategory = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/member-type.html', function($ionicModal) {
        $scope.memberType = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/materials.html', function($ionicModal) {
        $scope.materials = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/featured.html', function($ionicModal) {
        $scope.featured = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/world-wide.html', function($ionicModal) {
        $scope.worldWide = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });



    $scope.filterModalOpen = function(index) {
        if (index == "memberType") {
            $scope.memberType.show();
        } else if (index == "productCategory") {
            $scope.productCategory.show();
        } else if (index == "materials") {
            $scope.materials.show();
        } else if (index == "featured") {
            $scope.featured.show();
        } else if (index == "worldWide") {
            $scope.worldWide.show();
        }
    };

    $scope.filterModalClose = function(index) {
        if (index == "memberType") {
            $scope.memberType.hide();
        } else if (index == "productCategory") {
            $scope.productCategory.hide();
        } else if (index == "materials") {
            $scope.materials.hide();
        } else if (index == "featured") {
            $scope.featured.hide();
        } else if (index == "worldWide") {
            $scope.worldWide.hide();
        }
    };

    /*filter modals*/


    $scope.tabs = [{
        "text": "Product category",
        "class": "product-category-icon",
        "filter": "productCategory"

    }, {
        "text": "Featured",
        "class": "featured-category-icon",
        "filter": "featured"
    }, {
        "text": "World Wide",
        "class": "world-wide-category-icon",
        "filter": "worldWide"
    }];
    $scope.onSlideMove = function(data) {
        console.log("You have selected " + data.index + " tab");
    };

    console.log($stateParams.id);

})



.controller('galleryCtrl', function($scope, $rootScope, $scope, $stateParams, $q, $location, $window, $timeout, $ionicModal) {


    /*detail modal*/
    $ionicModal.fromTemplateUrl('templates/modal-detail-info.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.infoModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-collection.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.collectionModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-detail-share.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.shareModal = modal;
    });



    /*filter modals*/

    $ionicModal.fromTemplateUrl('templates/gallery-category.html', function($ionicModal) {
        $scope.galleryCategory = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/member-type.html', function($ionicModal) {
        $scope.memberType = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/materials.html', function($ionicModal) {
        $scope.materials = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/featured.html', function($ionicModal) {
        $scope.featured = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/world-wide.html', function($ionicModal) {
        $scope.worldWide = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });



    $scope.filterModalOpen = function(index) {
        if (index == "memberType") {
            $scope.memberType.show();
        } else if (index == "galleryCategory") {
            $scope.galleryCategory.show();
        } else if (index == "materials") {
            $scope.materials.show();
        } else if (index == "featured") {
            $scope.featured.show();
        } else if (index == "worldWide") {
            $scope.worldWide.show();
        }
    };

    $scope.filterModalClose = function(index) {
        if (index == "memberType") {
            $scope.memberType.hide();
        } else if (index == "galleryCategory") {
            $scope.galleryCategory.hide();
        } else if (index == "materials") {
            $scope.materials.hide();
        } else if (index == "featured") {
            $scope.featured.hide();
        } else if (index == "worldWide") {
            $scope.worldWide.hide();
        }
    };

    /*filter modals*/


    $scope.tabs = [{
        "text": "Gallery category",
        "class": "gallery-category-icon",
        "filter": "galleryCategory"

    }, {
        "text": "Featured",
        "class": "featured-category-icon",
        "filter": "featured"
    }, {
        "text": "World Wide",
        "class": "world-wide-category-icon",
        "filter": "worldWide"
    }];
    $scope.onSlideMove = function(data) {
        console.log("You have selected " + data.index + " tab");
    };


    console.log($stateParams.id);

});
