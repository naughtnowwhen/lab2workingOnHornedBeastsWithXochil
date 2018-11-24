
// $.getJSON('mydata.json', function(data) {
//   console.log(data);

// });

let hornedBeasts = [];




function readJson () {
  $.get('page-1.json', 'json')
    .then(data => {
    // console.log(data);
      data.forEach(generic =>{
        // console.log(generic);
        new HornMaker(generic);
      });
    })
    .then(function() {
      hornedBeasts.forEach(differentGeneric => {
        differentGeneric.render();
      });
    });
}

$(() => readJson());



// description: "A unicorn and a narwhal nuzzling their horns"
// horns: 1
// image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
// keyword: "narwhal"
// title: "UniWhal"


let HornMaker = function(catchall){


  this.image_url = catchall.image_url;
  this.image_urlForDom = `<img src="${catchall.image_url}" alt="">`;
  this.title = catchall.title;
  this.description = catchall.description;
  this.horns = catchall.horns;
  this.keyword = catchall.keyword;
  hornedBeasts.push(this);
};

arrofClones = [];

HornMaker.prototype.render = function(){
  $('main').append('<div class="clone"></div>');
  let $clone = $('div[class="clone"]');
  let photoTemplate = $('#photo-template').html();
  $clone.html(photoTemplate);
  $clone.find('h1').text(this.title);
  $clone.find('p').text(this.description);
  $clone.find('img').attr('src', this.image_url);
  let fullClone = $clone.html();
  var htmlobject =
  // let jsonVersion = JSON.stringify(fullClone);
  // console.log(fullClone);
  $clone.removeClass('clone');
  $clone.attr('class', this.title);
  let $main = $('main');

};

console.log(hornedBeasts.length);

HornMaker.prototype.passUrl = function () {


};

// let trial = new HornMaker('description',4,'image_url','keyword','title');

//  let myArr = ['myData1', 'myData2', ];

//  console.log(myArr[0]);


{/* <header>
<h1>The Gallery of Horns</h1>
<select id="tryMe" name="horned">
  <option value="default">Filter by Keyword</option>
  <option value="narwhal">narwhal</option>
  <option value="rhino">rhino</option>
  <option value="unicorn">unicorn</option> */}


// $('select[name="icecream"]').on('change', function() {

//   let $selection = $(this).val();
//   console.log($selection);
//   $('img').hide()
// $(`img[data-flavor="${$selection}"]`).show()
// })

let $main = $('main');
console.log($main.children());

$('select[name="horned"]').on('change',function(){
  let $selection = $(this).val();
  let $playAround = $(this);
  console.log($playAround);
  console.log($selection);
  // $('img').hide();

  // $(`img[keyword="${$selection}"]`).show();

  let url = 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-….jpg/wholesale-halloween-costume-prop-unicorn.jpg';

  url.show();

  for (let i = 0; i < hornedBeasts.length; i ++){
    console.log(hornedBeasts[i].keyword);
    if (hornedBeasts[i].keyword === $selection){
      console.log('found it', hornedBeasts[i].keyword);
      hornedBeasts[i].show();

      // hornedBeasts[i].keyword.show();

    }

  }
  // $(`img[description="${$selection}"]`).show();


  // $(`img[description: "A unicorn and a narwhal nuzzling their horns"]`).show();

  // hornedBeasts[0].image_url.show();



});

let shower = () => {
  $('img').show();
};

const image = $('img');
console.log(image);


let imgArr = [];
let imgAsker = function (){
  let image = $('img');
  imgArr.push(image);
  console.log(image);
};

imgAsker();

function imgappender (hornedBeastIndexToDisplay){
  let hideAllImgs = $('img').hide();
  let description = hornedBeasts[hornedBeastIndexToDisplay].description;
  console.log(description);
  let listForDisplay = $('ul[id="listForDisplay"]');
  let image_url = hornedBeasts[hornedBeastIndexToDisplay].image_url;
  let image_alt = hornedBeasts[hornedBeastIndexToDisplay].keyword;

  let makeForAppend = `<img src="${image_url}" alt="${image_alt}">`;
  listForDisplay.append(makeForAppend);

  // image_url =
  // hornedBeasts[hornedBeastIndexToDisplay].image_url = mainImgDisplay.html();

}


$("#forCLickingNewImgs").click(function(){
let index = $('#forGivingAnIndex').val();
imgappender(index);
});

function btnNewImgClick () {
  let btn = $('#forCLickingNewImgs');
  btn.on('click', function(){
    console.log('click');
  }
  );
}

//only seems to work in dev tools.
// imgappender();




$(document).ready(function() {
//why is hornedbeasts inaccesbile
//neither console log work
  console.log(hornedBeasts[0]);
  console.log(hornedBeasts.length);

});

// let tryIt = $('select');
// console.log(tryIt.html);

// let tryAgain = $('tryMe');
// // console.log(tryAgain);

// tryIt.on('click', function(){
//   let $whereToGo = $(this).data('keyword');
//   console.log($whereToGo);

// });


