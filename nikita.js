/*globals $:true _:true*/

var WORKS = [
  {
    title: 'Hold Me',
    medium: 'Art',
    thumb: 'holdme.jpg',
    detail: 'holdme.jpg',
    more: [
      'holdme2.jpg',
      'holdme3.jpg',
      ]
  },
  {
    title: 'Is that you\'re friends work?',
    medium: 'Art',
    thumb: 'friends.jpg',
    detail: 'friends.jpg',
    more: []
  },
  {
    title: 'Grandpa\'s Apartment',
    medium: 'Art',
    thumb: 'grandpa.jpg',
    detail: 'grandpa.jpg',
    more: [
      'grandpa2.jpg',
      ]
  },
  {
    title: "Don't call me goodnight",
    medium: 'Art',
    thumb: 'goodnight.jpg',
    detail: 'goodnight.jpg',
  },
  {
    title: 'Cho',
    medium: 'Art',
    thumb: 'cho.jpg',
    detail: 'cho2.jpg',
    more: [
      'chofromoutside.jpg',
      ]
  },
  {
    title: 'Cowboy Death',
    medium: 'Art',
    thumb: 'cowboy-death.jpg',
    detail: 'cowboy-death-1.jpg',
    more: [
      'cowboy-death-2.jpg',
      'cowboy-death-3.jpg',
      'cowboy-death-4.jpg',
      ]
  },
  {
    title: 'The Professionals I',
    medium: 'Ink on paper 8.5 x 11',
    thumb: 'professionals-thumb.jpg',
    detail: 'The-Professionals.jpg',
    more: [
      'The-professionals-detail.jpg',
      ]
  },
  {
    title: 'Chico',
    thumb: 'ms1-thumb.jpg',
    detail: 'ms1.jpg',
    more: [
      'ms2.jpg',
      'ms3.jpg',
      'ms4.jpg',
      'ms5.jpg',
      'ms6.jpg',
      'ms7.jpg',
      ]
  },
  {
    title: 'Todo: import older works',
    thumb: '2-nikita-shoshensky.jpg',
    detail: '',
    more: []
  }
]



$(function() {

  var thumbTemplate = _.template($("#thumb_template").text())
  var $thumbs = $(".thumbs")


  WORKS.forEach(function(work, index) {
    work.id = "work-" + index
    work.info = "<strong>" + work.title + '</strong> : ' + (work.medium || '')
    if (!work.more) work.more = []

    var $thumb = $(thumbTemplate(work))
    //$thumb.data('work', work)
    $thumbs.append($thumb)
  })

  $('.colorbox').colorbox({
    maxWidth: "80%",
    maxHeight: "80%",
    loop: false,
  })


})

window.WORKS = WORKS
