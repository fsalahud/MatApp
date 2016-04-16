angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaBarcodeScanner, artService, $http, $ionicLoading, $cordovaMedia) {

    var controller = this;
})

.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner,artService, $cordovaMedia, $ionicLoading) {

    var scanner = this;
    scanner.scannerID;
    scanner.art;
    scanner.artist;
    scanner.pre_img="https://matappserver.herokuapp.com/uploads/"
    scanner.image;
    scanner.audio;
    scanner.show=false;
    scanner.playing=false;
    scanner.audio_url;
    scanner.views;
    scanner.cancel=false;
    scanner.loading=true;
    scanner.empty=true;

    scanner.getArt=function(id){
      artService.getArt(id,function(err,data){
      console.log(data);
      if (err) scanner.art = err;
      else scanner.art=data;
          // console.log(scanner.art[0]);
          console.log("art retrieved");
    });
    };

    scanner.getArtist=function(id){
      artService.getArtist(id,function(err,data){
      console.log(data);
      if (err) scanner.artist = err;
      else scanner.artist=data;
          // console.log(scanner.artist[0]);
          console.log("art retrieved");
    });
    };

    scanner.getImage=function(id){
      console.log("image??")
      artService.getImage(id,function(err,data){
      // console.log("image",data);
      if (err) scanner.image = err;
      else scanner.image=data;
          // console.log(scanner.image);
          console.log("image retrieved");
    });
    };

    scanner.getAudio=function(id){
      console.log("image??")
      artService.getAudio(id,function(err,data){
      console.log("audio",data);
      if (err) scanner.audio = err;
      else scanner.audio=data;
           scanner.audio_url="https://matappserver.herokuapp.com/uploads/"+scanner.audio[0].fields.audio;
          console.log(scanner.audio_url);
          console.log("audio retrieved");
          // console.log(scanner.audio_url);
    });
    };

      scanner.upview = function(id){
      artService.upview(id,function(err,data){
          if (err) {console.log("error");}
          else {scanner.views=data;
               console.log("post views");}
      });
      };


    $scope.$on('$ionicView.enter', function() {
    alert("Scan a QR code on the label to discover more aboth the artifact")
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      if (barcodeData.cancelled===0){
        scanner.empty=false;
        scanner.scannerID=barcodeData.text;
        scanner.getArt(scanner.scannerID);
        scanner.getArtist(scanner.scannerID);
        scanner.getImage(scanner.scannerID);
        scanner.getAudio(scanner.scannerID);
        scanner.upview(scanner.scannerID);
        console.log("trial",scannerID.getArt);
      }
      // else {scanner.empty=true
      //       alert("Please scan again!")};
    }, function(error){
      console.log("An error occurred" + error);
    });
     console.log('Opened!')
  })

    scanner.scanBarcode=function(){
    console.log("clicked");
    scanner.cancel=false;
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      alert(JSON.stringify(barcodeData));
      if (barcodeData.cancelled===0){
        scanner.empty=false;
        scanner.scannerID=barcodeData.text;
        scanner.getArt(scanner.scannerID);
        scanner.getArtist(scanner.scannerID);
        scanner.getImage(scanner.scannerID);
        scanner.getAudio(scanner.scannerID);
        scanner.upview(scanner.scannerID);
        console.log("trial2",scannerID.getArt);
      }
      // else {scanner.empty=true
      //       alert("Please scan again!")};
    }, function(error){
      console.log("An error occurred" + error);
    });
  }

  // ----------------------------------//

  scanner.media;

  scanner.play=function(){
    console.log("audio_url", scanner.audio_url);
    scanner.media= $cordovaMedia.newMedia(scanner.audio_url)
    scanner.media.play();
    scanner.playing=true;
  }

  // scanner.pause=function(){
  //     scanner.media.pause();
  // }

  scanner.stop=function(){
      scanner.media.stop();
      scanner.playing=false;
}

    // var mediaStatusCallback = function(status) {
    //     if(status == 1) {
    //         $ionicLoading.show({template: 'Loading...'});
    //     } else {
    //         $ionicLoading.hide();
    //     }
    // }


});
