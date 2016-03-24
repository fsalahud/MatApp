angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaBarcodeScanner, artService, $http, $ionicLoading, $cordovaMedia) {

    var controller = this;

    var data=[
              {title:"Street Language",
               artist:"Faraj Daham"},

               {title:"Portrait of Inji Efflatoun",
               artist:"Inji Efflatoun"},

               {title:"The Girl of Port said",
               artist:"Inji Efflatoun"}
    ];
    controller.check;


    controller.getData=function(){
    $http.get('http://172.20.70.0:8000/api/helloWorld/')
        .success(function(data){
          controller.check=data;
        })
        .error(function(error){
          controller.check="error";
        });
    }

    // artService.getInfo(function(err,data){
    //   console.log(data);
    //   if (err) controller.check = err;
    //   else controller.check=data;
    // });


// ----------------------------------//

controller.media;

controller.play=function(src){
  controller.media= $cordovaMedia.newMedia(src, null,null,mediaStatusCallback);
  controller.media.play();
}

controller.pause=function(){
  if (controller.media){
    media.pause();
  }
}

controller.stop=function(){
  if (controller.media){
    media.stop();
  }
}

  var mediaStatusCallback=function(status){
    if (status==1){
      $ionicLoading.show({template: "Loading"});
    } else{
      $ionicLoading.hide();
    };
  }

})


.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner) {



    var scanner = this;

    scanner.data=[
              {title:"Street Language",
               artist:"Faraj Daham"},

               {title:"Portrait of Inji Efflatoun",
               artist:"Inji Efflatoun"},

               {title:"The Girl of Port said",
               artist:"Inji Efflatoun"}
    ];
    //controller.display="No info to display";
    scanner.scannerID=null;
    scanner.id_num=null;
    scanner.painting="No artwork available";
    scanner.artist="No artist available";


  $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      scanner.scannerID=barcodeData.text;
      scanner.id_num=parseInt(barcodeData.text);
      if (scanner.scannerID!==""){
      scanner.painting=scanner.data[scanner.id_num].title;
      scanner.artist=scanner.data[scanner.id_num].artist;
      } else {
        scanner.painting="No artwork available";
        scanner.artist="No artist available";
      }
      console.log("format", barcodeData.format);
    }, function(error){
      console.log("An error occurred" + error);
    });
     console.log('Opened!')
  })

    scanner.scanBarcode=function(){
    console.log("clicked");
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      scanner.scannerID=barcodeData.text;
      scanner.id_num=parseInt(barcodeData.text);
      if (scanner.scannerID!==""){
      scanner.painting=scanner.data[scanner.id_num].title;
      scanner.artist=scanner.data[scanner.id_num].artist;
      } else {
        scanner.painting="No artwork available";
        scanner.artist="No artist available";
      }
      console.log("format", barcodeData.format);
    }, function(error){
      console.log("An error occurred" + error);
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
