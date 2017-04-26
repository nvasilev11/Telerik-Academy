let modal = document.getElementById('myModal');

let btn = document.getElementById('myBtn');

let redirectPromise = new Promise(function(resolve, reject) {

  btn.addEventListener('click', () => {

    modal.style.display = "block";

    setTimeout(function() {
      resolve();
    }, 2000);
  }, false);

});

redirectPromise.then(function() {
  window.location = 'http://www.inboundmarketingagents.com/inbound-marketing-agents-blog/bid/258135/The-25-Best-Internet-Memes-of-All-Time';
});
