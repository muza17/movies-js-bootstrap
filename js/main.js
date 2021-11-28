var list = document.querySelector( "#list");

 var movies = [
      {
        "title": "Patton Oswalt: Annihilation",
        "year": 2017,
        "categories": [
          "Uncategorized"
        ],
        "imdbId": "tt7026230",
        "imdbRating": 7.4,
        "runtime": 66,
        "language": "English",
        "youtubeId": "4hZi5QaMBFc",
        "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
        "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
      },
      {
        "title": "Race",
        "year": 2016,
        "categories": [
          "Action",
          "Biography",
          "Drama",
          "History",
          "Sport"
        ],
        "imdbId": "tt3499096",
        "imdbRating": 7.1,
        "runtime": 134,
        "language": "English",
        "youtubeId": "6ygu45dU3U4",
        "summary": "In the 1930s, Jesse Owens is a young man who is the first in his family to go to college. Going to Ohio State to train under its track and field coach, Larry Snyder, the young African American athlete quickly impresses with his tremendous potential that suggests Olympic material. However, as Owens struggles both with the obligations of his life and the virulent racism against him, the question of whether America would compete at all at the 1936 Olympics in Nazi Germany is being debated vigorously. When the American envoy finds a compromise persuasive with the Third Reich to avert a boycott, Owens has his own moral struggle about going. Upon resolving that issue, Owens and his coach travel to Berlin to participate in a competition that would mark Owens as the greatest of America's Olympians even as the German film director, Leni Riefenstahl, locks horns with her country's Propaganda Minister, Josef Goebbels, to film the politically embarrassing fact for posterity.",
        "smallThumbnail": "http://i3.ytimg.com/vi/6ygu45dU3U4/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/6ygu45dU3U4/maxresdefault.jpg"
      },
      {
        "title": "Forever My Girl",
        "year": 2018,
        "categories": [
          "Drama",
          "Music",
          "Romance"
        ],
        "imdbId": "tt4103724",
        "imdbRating": 6.4,
        "runtime": 108,
        "language": "English",
        "youtubeId": "3vqcMr1q5Uc",
        "summary": "After being gone for a decade a country star returns home to the love he left behind.",
        "smallThumbnail": "http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/3vqcMr1q5Uc/maxresdefault.jpg"
      },
      {
        "title": "Adventures in Babysitting",
        "year": 2016,
        "categories": [
          "Adventure",
          "Comedy",
          "Family"
        ],
        "imdbId": "tt4456850",
        "imdbRating": 6.1,
        "runtime": 105,
        "language": "English",
        "youtubeId": "BbTTXUMVTTU",
        "summary": "Two teen rival babysitters, Jenny and Lola, team up to hunt down one of their kids who accidentally runs away into the big city without any supervision.",
        "smallThumbnail": "http://i3.ytimg.com/vi/BbTTXUMVTTU/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/BbTTXUMVTTU/maxresdefault.jpg"
      },
      {
        "title": "And Then I Go",
        "year": 2017,
        "categories": [
          "Drama"
        ],
        "imdbId": "tt2018111",
        "imdbRating": 7.6,
        "runtime": 99,
        "language": "English",
        "youtubeId": "8CdIiD6-iF0",
        "summary": "In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel \"Project X\" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.",
        "smallThumbnail": "http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/8CdIiD6-iF0/maxresdefault.jpg"
      },
      {
        "title": "An Extremely Goofy Movie",
        "year": 2000,
        "categories": [
          "Animation",
          "Comedy",
          "Family",
          "Sport"
        ],
        "imdbId": "tt0208185",
        "imdbRating": 6.4,
        "runtime": 79,
        "language": "English",
        "youtubeId": "H8oSvldAGfg",
        "summary": "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
        "smallThumbnail": "http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg",
        "bigThumbnail": "http://i3.ytimg.com/vi/H8oSvldAGfg/maxresdefault.jpg"
      }   
 ];

movies.forEach((film, index, array) => {
     var card = document.createElement("li");
     card.setAttribute("class", "col col-6 card right__card mb-3");

     var cardImage = document.createElement("img");
     cardImage.setAttribute("class", "card-img-top");
     cardImage.src = film.smallThumbnail;

     var cardBody = document.createElement("div");
     cardBody.classList.add( "card-body");

     var cardTitle = document.createElement("h5");
     cardTitle.classList.add( "card-title");
     var cardTitleStrong = document.createElement("strong");
     cardTitleStrong.textContent = film.title;

     var cardInfo1 = document.createElement("div");
     cardInfo1.classList.add( "d-flex");
     cardInfo1.classList.add( "m-2");
     var cardInfo1Img = document.createElement("img");
     cardInfo1Img.setAttribute( "class","card-icon");
     cardInfo1Img.src = "./img/favourite.png";
     cardInfo1Img.style.width = "15px";
     cardInfo1Img.style.height = "15px";

     var cardInfo1P = document.createElement("p");
     cardInfo1P.classList.add( "card-text");
     cardInfo1P.textContent = film.year;

     var cardInfo2 = document.createElement("div");
     cardInfo2.classList.add( "d-flex");
     cardInfo2.classList.add( "m-2");
     var cardInfo2Img = document.createElement("img");
     cardInfo2Img.setAttribute("class", "card-icon");
      cardInfo2Img.src = "./img/portfolio-black-symbol.png";
     cardInfo2Img.style.width = "15px";
     cardInfo2Img.style.height = "15px";

     var cardInfo2P = document.createElement("p");
     cardInfo2P.classList.add( "card-text");
     cardInfo2P.textContent = film.imdbRating;

     var cardButtons = document.createElement("div");
     cardButtons.classList.add( "mt-5");
     cardButtons.classList.add( "d-flex");

     var cardButton1 = document.createElement("button");
     cardButton1.classList.add( "btn");
     cardButton1.classList.add( "btn-outline-primary");
     cardButton1.classList.add( "m-1");
     cardButton1.textContent = "Watch trailer";

     var cardButton2 = document.createElement("button");
     cardButton2.classList.add( "btn");
     cardButton2.classList.add( "btn-outline-info");
     cardButton2.classList.add( "m-1");
     cardButton2.textContent = "Bookmark";

     var cardButton3 = document.createElement("button");
     cardButton3.classList.add( "btn");
     cardButton3.classList.add( "btn-outline-success");
     cardButton3.classList.add( "m-1");
     cardButton3.textContent = "More Info";

     cardTitle.appendChild(cardTitleStrong);
     cardInfo1.appendChild(cardInfo1Img);
     cardInfo1.appendChild(cardInfo1P);
     cardInfo2.appendChild(cardInfo2Img);
     cardInfo2.appendChild(cardInfo2P);
     
     cardButtons.appendChild(cardButton1);
     cardButtons.appendChild(cardButton2);
     cardButtons.appendChild(cardButton3);
     
     cardBody.appendChild(cardTitle);
     cardBody.appendChild(cardInfo1);
     cardBody.appendChild(cardInfo2);
     cardBody.appendChild(cardButtons);

     card.appendChild(cardImage);
     card.appendChild(cardBody);

     list.appendChild(card);


 });



