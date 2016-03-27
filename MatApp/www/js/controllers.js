angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaBarcodeScanner, artService, $http, $ionicLoading, $cordovaMedia) {

    var controller = this;

    controller.check;

    artService.getInfo(function(err,data){
      console.log(data);
      if (err) controller.check = err;
      else controller.check=data;
    });

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


.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner,artService) {



    var scanner = this;
    
    scanner.cur_artist;
    scanner.cur_art;
    scanner.cur_image;

    scanner.scannerID;
    scanner.id_num=null;
    scanner.painting="No artwork available";
    scanner.artist="No artist available";

    scanner.art;

    scanner.getArt=function(id){
      artService.getArt(id,function(err,data){
      console.log(data);
      if (err) scanner.art = err;
      else scanner.art=data;
          console.log(scanner.art[0]);
          console.log("art retrieved");
    });
    };


    $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      scanner.scannerID=barcodeData.text;
      scanner.getArt(scanner.scannerID);
      //scanner.getArt("MAT.2007.1.658");
      // scanner.painting=scanner.data[scanner.id_num].title;
      // scanner.artist=scanner.data[scanner.id_num].artist;
      // } else {
      //   scanner.painting="No artwork available";
      //   scanner.artist="No artist available";
      // }
      console.log("scannerID", scannerID);
    }, function(error){
      console.log("An error occurred" + error);
    });
     console.log('Opened!')
  })

    // scanner.data=[
    //           {title:"Street Language",
    //            artist:"Faraj Daham"},

    //            {title:"Portrait of Inji Efflatoun",
    //            artist:"Inji Efflatoun"},

    //            {title:"The Girl of Port said",
    //            artist:"Inji Efflatoun"}
    // ];

  // $scope.$on('$ionicView.enter', function() {
  //    // Code you want executed every time view is opened
  //   $cordovaBarcodeScanner.scan().then(function(barcodeData){
  //     alert(JSON.stringify(barcodeData));
  //     scanner.scannerID=barcodeData.text;
  //     scanner.id_num=parseInt(barcodeData.text);
  //     if (scanner.scannerID!==""){
  //     scanner.painting=scanner.data[scanner.id_num].title;
  //     scanner.artist=scanner.data[scanner.id_num].artist;
  //     } else {
  //       scanner.painting="No artwork available";
  //       scanner.artist="No artist available";
  //     }
  //     console.log("format", barcodeData.format);
  //   }, function(error){
  //     console.log("An error occurred" + error);
  //   });
  //    console.log('Opened!')
  // })

    scanner.scanBarcode=function(){
    console.log("clicked");
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      scanner.scannerID=barcodeData.text;
      scanner.getArt(scanner.scannerID);
      //scanner.getArt("MAT.2007.1.658");
      console.log("format", barcodeData.format);
    }, function(error){
      console.log("An error occurred" + error);
    });
  }

    // artService.getArtist(function(err,data){
    //   console.log(data);
    //   if (err) scanner.cur_artist = err;
    //   else scanner.cur_artist=data;
    // });

    // artService.getArt(function(err,data){
    //   console.log(data);
    //   if (err) scanner.cur_art = err;
    //   else scanner.cur_art=data;
    // });

    // artService.getImage(function(err,data){
    //   console.log(data);
    //   if (err) scanner.cur_image = err;
    //   else scanner.cur_image=data;
    // });


});
