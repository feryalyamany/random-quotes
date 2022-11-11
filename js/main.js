
 var quotesContainer=[

 `<q class=" fs-3 ">Two things are infinite: the universe and human stupidity; and I'm not sure about the universe</q>
  <p class="fs-4 p-2 my-2 ">― Albert Einstein</p>`,


 `<q class=" fs-3 ">Don’t walk in front of me… I may not follow
 Don’t walk behind me… I may not lead
 Walk beside me… just be my friend</q>
  <p class="fs-4 p-2 my-2 "> ― Albert Camus</p>`,


 `<q class=" fs-3 ">Without music, life would be a mistake.</q>
  <p class="fs-4 p-2 my-2 "> ― Friedrich Nietzsche</p>`,


 `<q class=" fs-3 ">If you tell the truth, you don't have to remember anything.</q>
  <p class="fs-4 p-2 my-2 ">― Mark Twain</p>`,

 `<q class=" fs-3 ">There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.</q>
  <p class="fs-4 p-2 my-2 ">― Albert Einstein</p>`,


 `<q class=" fs-3 "> ولكن آفة حارتنا النسيان</q>
  <p class="fs-4 p-2 my-2 "> -- نجيب محفوظ</p>`,


 `<q class=" fs-3 ">The fool doth think he is wise, but the wise man knows himself to be a fool.</q>
  <p class="fs-4 p-2 my-2 "> ― William Shakespeare</p>`,


 `<q class=" fs-3 ">Everything you can imagine is real.</q>
  <p class="fs-4 p-2 my-2 ">― Pablo Picasso</p>`,


 `<q class=" fs-3 ">I wasn’t meant for reality, but life came and found me.</q>
  <p class="fs-4 p-2 my-2 "> ― Fernando Pessoa</p>`,


 `<q class=" fs-3 ">I bear the wounds of all the battles I avoided.</q>
  <p class="fs-4 p-2 my-2 "> ― Fernando Pessoa</p>`,


 `<q class=" fs-3 ">The value of things is not the time they last, but the intensity with which they occur. That is why there are unforgettable moments and unique people!</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,

 `<q class=" fs-3 ">I feel as if I'm always on the verge of waking up!</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,


 `<q class=" fs-3 ">There are ships sailing to many ports, but not a single one goes where life is not painful.</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,


 `<q class=" fs-3 ">My past is everything I failed to be.</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,

 `<q class=" fs-3 ">Omnia mea mecum porto.</q>
  <p class="fs-4 p-2 my-2 "> ―  cicero</p>`,

 `<q class=" fs-3 ">The feelings that hurt most, the emotions that sting most, are those that are absurd
  - The longing for impossible things, precisely because they are impossible; nostalgia for what never was;
   the desire for what could have been; regret over not being someone else; dissatisfaction with the world’s existence.
  All these half-tones of the soul’s consciousness create in us a painful landscape, an eternal sunset of what we are.</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,


 `<q class=" fs-3 ">My soul is impatient with itself, as with a bothersome child;
  its restlessness keeps growing and is forever the same. Everything interests me, but nothing holds me.
  I attend to everything, dreaming all the while.
   […]. I'm two, and both keep their distance — Siamese twins that aren't attached.”</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>`,


 `<q class=" fs-3 ">I'd woken up early, and I took a long time getting ready to exist.</q>
  <p class="fs-4 p-2 my-2 "> ―  Fernando Pessoa</p>` ];

  

function generateQuote() {
 var randomQuote = Math.floor(Math.random() * quotesContainer.length)
 document.getElementById('newQuote').innerHTML = quotesContainer[randomQuote];
 

}

generateQuote();