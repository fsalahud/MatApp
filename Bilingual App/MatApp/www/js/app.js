// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(typeof navigator.globalization !== "undefined"){
     navigator.globalization.getPreferredLanguage(function(language) {
      //alert(language.value);
      console.log(language.value);
      $translate.use((language.value).split("-")[0]).then(function(data) {
       //alert("SUCCESS: " + data);
       console.log("SUCCESS: " + data);

      }, function(data) {
       //alert("ERROR: " + data);
       console.log("ERROR: " + data);
      });
     }, null);
    }
  });
})

.config(function($translateProvider) {
  $translateProvider.translations("en", {
    mathaf_about: "About Mathaf",
    mathaf_intro: "Mathaf: Arab Museum of Modern Art, founded in 2010, is situated in Education City in Qatar Foundation (QF), in a renovated former school building. QF is led by HH Sheikha Moza bint Nasser. Mathaf is part of Qatar Museums, led by H.E. Sheikha al-Mayassa bint Hamad bin Khalifa Al Thani.",
    mathaf_background: "Mathaf Collection, co-owned by Qatar Museums and Qatar Foundation, is now holding over 9,000 works, making it the worldâ€™s largest specialised collection of its kind. An initial group of works was gathered by H.E. Sheikh Hassan bin Mohammed bin Ali Al Thani.",
    mathaf_background2: "Mathaf organises major exhibitions, both historical and experimental, and large-scale education programs performing an important role as a centre for dialogue, research, and a resource for fostering creativity. Mathaf hosts solo and group exhibitions by artists from the region, and events that explore and celebrate modern and contemporary art.",
    mathaf_aboutimg: "img/about.png",
    mathaf_exploreimg: "img/explore.png",
    mathaf_english_langButt: "English",
    mathaf_arabic_langButt: "العربية",
    mathaf_version:"MatApp V 1.0",
    mathaf_developers:"Developers:",
    farjana:"Farjana Salahuddin",
    haneen:"Haneen Shariff",
    reem:"Reem Al Mohannadi",
    hayyan:"Syed Hayyan Rizvi",
    mathaf_tutorial:"img/scan code.jpg"


  });
  $translateProvider.translations("ar", {
    mathaf_about: "عن متحف",
    mathaf_intro: "تأسس ''متحف: المتحف العربي للفن الحديث'' عام 2010 ويقع في المدينة التعليمية في حرم مؤسسة قطر. يوجد متحف في مبنى مدرسة سابقة تم ترميمها. تشغل صاحبة السمو الشيخة موزا بنت ناصر المسند منصب رئيس مجلس إدارة مؤسسة قطر. كما إن متحف هو جزء من متاحف قطر التي ترأس مجلس أمنائها سعادة الشيخة الميّاسة بنت حمد بن خليفة آل ثاني.",
    mathaf_background: "تشمل مقتنيات متحف، والتي تتشارك بملكيتها متاحف قطر ومؤسسة قطر، أكثر من 9 آلاف عمل، مما يجعلها المجموعة المتخصصة الأكبر من نوعها في العالم. وتعود بدايات متحف إلى مجموعة أولى من الأعمال اقتناها سعادة الشيخ حسن بن محمد بن علي آل ثاني",
    mathaf_background2: "يُنظم متحف معارض كبيرة متنوعة المواضيع، بالإضافة إلى برامج تعليمية واسعة تضطلع بدور هام في جعل المتحف مركزاً للحوار والبحث ومصدراً لرعاية الإبداع. يستضيف متحف معارض منفردة وجماعية من قبل فنانين من أرجاء المنطقة، بالإضافة إلى أنشطة خاصة بالفن الحديث والمعاصر وتحتفي به.",
    mathaf_aboutimg: "img/aboutarabic.png",
    mathaf_exploreimg: "img/explorearabic.png",
    mathaf_english_langButt: "English",
    mathaf_arabic_langButt: "العربية",
    mathaf_version:"برنامج متحف الهاتفي V 1.0",
    mathaf_developers:" إنتاج :",
    farjana:"فرجانه صلاح الدين",
    haneen:"حنين شريف",
    reem:"ريم المهندي",
    hayyan:"السيد هيان رزفي",
    mathaf_tutorial:"img/scan code_ar.jpg"

  });
  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:



  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl as dash'
        }
      }
    })

  .state('tab.explore', {
    url: '/dash-explore',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-explore.html',
          controller: 'ScanCtrl as scan'
        }
      }
    })

  .state('tab.about', {
    url: '/dash-about',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-about.html'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");

})

.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
 
}]);