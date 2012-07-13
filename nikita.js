/*globals $:true _:true*/

var WORKS = [
  {
    title: 'Hold Me',
    medium: 'Pygment, acrylic and oil paint on canvas. 7\'x6\'',
    thumb: 'holdme.jpg',
    detail: 'holdme3.jpg',
    more: [
      'holdme1.jpg',
      ]
  },
  {
    title: 'Cho',
    medium: 'Acrylic paint on canvas. 12\'x6\'',
    thumb: 'cho.jpg',
    detail: 'cho2.jpg',
    more: [
      'chofromoutside.jpg',
      'int2.jpg',
      ]
  },
  {
    title: 'Filament',
    medium: 'Oil and enamel paint on canvas. 7\'x6\'',
    thumb: 'moire.jpg',
    detail: 'moire1.jpg',
    more: [
      ]
  },
  {
    title: 'Joy Ride',
    medium: 'Acrylic and oil paint on canvas',
    thumb: 'car.jpg',
    detail: 'car2.jpg',
    more: [
      'car1.jpg',
      ]
  },
  {
    title: 'Is that one of you\'re friends paintings?',
    medium: 'Oil paint on panel',
    thumb: 'friends.jpg',
    detail: 'friends.jpg',
    more: []
  },
  {
    title: 'Grandpa\'s Apartment',
    medium: 'Acrylic paint on panel.',
    thumb: 'grandpa.jpg',
    detail: 'grandpa.jpg',
    more: [
      'grandpa2.jpg',
      ]
  },
  {
    title: 'Negative',
    medium: 'Water color & acylic paint on canvas. 7\'x6\'',
    thumb: 'negative.jpg',
    detail: 'negative1.jpg',
    more: [
      'int4.jpg',
      ]
  },
  {
    title: "Don't call me goodnight",
    medium: 'Oil paint on panel',
    thumb: 'goodnight.jpg',
    detail: 'goodnight.jpg',
  },
  {
    title: 'Antagonist series',
    subtitle: 'Series of 4',
    medium: 'Acrylic paint on panel. 18"x18"',
    thumb: 'cowboy-death.jpg',
    detail: 'antagonist1.jpg',
    more: [
      'antagonist2.jpg',
      'antagonist3.jpg',
      'antagonist4.jpg',
      ]
  },
  {
    title: 'The Professionals I',
    medium: 'Ink on paper 22"x30"',
    thumb: 'professionals-thumb.jpg',
    detail: 'The-Professionals.jpg',
    more: [
      'The-professionals-detail.jpg',
      ]
  },
  {
    title: 'The Magnificient 7',
    subtitle: 'Series',
    medium: 'Ink on paper. Set of 7 drawings. 8.5"x11"',
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
    title: 'Bonnie & Clyde',
    subtitle: 'Series of 5 paintings',
    medium: 'Acrylic and enamel paint on panel. 4\'x4\'',
    thumb: '2-nikita-shoshensky.jpg',
    detail: 'bonnie3.jpg',
    more: [
      'bonnie20.jpg',
      'bonnie5.jpg',
      'bonnie21.jpg',
      'bonnie7.jpg',
      'bonnie22.jpg',
      'bonnie8.jpg',
      'bonnie23.jpg',
      'bonnie9.jpg',
      'bonnie24.jpg',
    ]
  },
  {
    title: '48 Drawings',
    medium: '22" x 30" sheets of paper totaling 15 x 15 feet in installation',
    thumb: '48-front.jpg',
    detail: '48-1.jpg',
    more: [
      '48-2.jpg',
    ]
  },
  {
    title: 'Untitled Vortex #25',
    medium: 'wall silk screen 72" x 60"',
    thumb: 'colors-3.jpg',
    detail: 'colors-1.jpg',
    more: [
      'mg1.jpg',
      'mg2.jpg',
    ]
  },
  {
    title: 'Untitled Vortex #17',
    medium: 'wall silk screen 72" x 72"',
    thumb: 'colors-4.jpg',
    detail: 'colors-2.jpg',
    more: [
      'IMG_6398lo.jpg',
      'IMG_6399lo.jpg',
    ]
  },
  {
    title: 'Yellow, Blue Square',
    medium: '24" x 24" x 8"',
    thumb: 'colors-2.jpg',
    detail: '12.jpg',
    more: [
    ]
  },
  {
    title: 'Microsoft Paint',
    medium: '48"x48"',
    thumb: 'alana-lightbox.jpg',
    detail: '13alanalightbox.jpg',
    more: [
      '14lightboxdetail.jpg',
      '16-lightboxdetail.jpg',
    ],
  },
  {
    title: 'Yellow, Red Ribbons',
    medium: '48"x48"',
    thumb: 'colors-5.jpg',
    detail: 'colors-4.jpg',
  },
  {
    title: 'Hadid',
    medium: '48"x48"',
    thumb: 'cave-lightbox.jpg',
    detail: 'cave-1.jpg',
    more: [
      'cave-2.jpg',
    ],
  },
]



$(function() {

  var thumbTemplate = _.template($("#thumb_template").text())
  var $thumbs = $(".thumbs")


  WORKS.forEach(function(work, index) {
    work.id = "work-" + index
    work.info = "<strong>" + work.title + '</strong> : ' + (work.medium || '')

    if (!work.more) work.more = []
    if (!work.medium) work.medium = ''

    var $thumb = $(thumbTemplate({work: work}))
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
