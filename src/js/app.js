require(['jquery'], function(jquery) {
  console.log('Now running jQuery v' + jQuery().jquery);

  if (Modernizr.canvas) {
      console.log("This browser supports HTML5 canvas!");
    }
});
