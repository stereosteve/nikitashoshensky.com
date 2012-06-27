/*globals $:true*/

var WORKS = [
  { title: 'Howdy',
    thumb: '1-nikita-shoshensky.jpg' },
  { title: 'mommy',
    thumb: '2-nikita-shoshensky.jpg' },
  { title: 'daddy',
    thumb: '3-shoshensky-nikita.jpg' },
]

function ThumbsCtrl($scope) {
  $scope.works = WORKS
}
