/**********************
scrollbox1(文字表示切替)
**************************/
const txts = $('.text');
let txtIndex = -1;
txts.hide()

function showNextTxt() {
  txtIndex++;
  txts.eq(txtIndex % txts.length).fadeIn(2000).delay(3000).fadeOut(2000, showNextTxt);
}
showNextTxt();
/**********************
go to top
**************************/
$(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $('#gotoTop').css('display', 'inherit'); 

      } else{
        $('#gotoTop').css('display', 'none'); 
      }
  });
});
