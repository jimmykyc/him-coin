$(document).ready(function(){$('.ani-slider').slick({infinite:true,slidesToShow:3,slidesToScroll:1,prevArrow:"<button class='slick-arrow slick-prev'><img style='width: 80%;' src=web/images/ani/arrow-left.png></button>",nextArrow:"<button class='slick-arrow slick-next'><img style='width: 80%;' src=web/images/ani/arrow-right.png></button>",dots:false,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,dots:false,arrows:false}},{breakpoint:767.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false}},{breakpoint:575.98,settings:{slidesToShow:1,slidesToScroll:1,arrows:true}}]});$('.advitor-slider').slick({infinite:true,slidesToShow:4,slidesToScroll:1,prevArrow:"<button class='slick-arrow slick-prev'><img src=web/images/arrow-left.png></button>",nextArrow:"<button class='slick-arrow slick-next'><img src=web/images/arrow-right.png></button>",dots:false,responsive:[{breakpoint:1459,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:991.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false}},{breakpoint:767.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,arrows:false}},{breakpoint:575.98,settings:{slidesToShow:1,slidesToScroll:1,arrows:false}}]});$('.member-slider').slick({infinite:true,slidesToShow:4,slidesToScroll:1,prevArrow:"<button class='slick-arrow slick-prev'><img src=web/images/arrow-left.png></button>",nextArrow:"<button class='slick-arrow slick-next'><img src=web/images/arrow-right.png></button>",dots:false,responsive:[{breakpoint:1459,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:991.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false}},{breakpoint:767.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false}},{breakpoint:575.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:true}}]});});