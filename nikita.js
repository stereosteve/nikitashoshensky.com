/*globals $:true _:true*/

var WORKS = [
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
    title: 'mommy',
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
    var $thumb = $(thumbTemplate(work))
    $thumb.data('work', work)
    $thumbs.append($thumb)
  })

  $('.colorbox').colorbox({maxWidth: "80%", maxHeight: "80%"})


  //$('body').on('click .thumb', function(ev) {
    //var $thumb = $(ev.target)
    //var work = $thumb.data('work')

    //$.colorbox({rel: 
  //})

})

window.WORKS = WORKS
