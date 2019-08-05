$('.entry-label:contains("RIVER"), .entry-label:contains("BOCA")').parents('article').parent().hide();
$('.entry-label:contains("River"), .entry-label:contains("Boca")').parents('article').parent().hide();

document.addEventListener("scroll", function(){
    $('.entry-label:contains("RIVER"), .entry-label:contains("BOCA")').parents('article').hide();
    $('.entry-label:contains("River"), .entry-label:contains("Boca")').parents('article').hide();
});