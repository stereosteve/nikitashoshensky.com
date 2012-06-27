/*globals $:true*/

var WORKS = [
  {
    title: 'The Professionals I',
    thumb: 'professionals-thumb.jpg',
    detail: [
      'The-Professionals.jpg',
      'The-professionals-detail.jpg',
      ]
  },
  {
    title: 'Chico',
    thumb: 'ms1-thumb.jpg',
    detail: [
      'ms1.jpg',
      'ms2.jpg',
      'ms3.jpg',
      'ms4.jpg',
      'ms5.jpg',
      'ms6.jpg',
      'ms7.jpg',
      ]
  },
  {
    title: 'mommy',
    thumb: '2-nikita-shoshensky.jpg',
  },
  { title: 'daddy',
    thumb: '3-shoshensky-nikita.jpg' },
]

function AppCtrl($scope) {
  $scope.works = WORKS

  $scope.showWork = function(work) {
    $scope.detail = work
    $scope.detailIndex = 0
    $scope.detailImg = work.detail[$scope.detailIndex]
  }

  $scope.next = function() {
    $scope.detailIndex += 1
    $scope.detailImg = $scope.detail.detail[$scope.detailIndex]
  }

}
