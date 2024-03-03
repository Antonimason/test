"use strict"

//---------------------------------------------------JSON--------------------------------------------------------------//

const Json = `{
    "top5":[
        {
            "id":"4",
            "title":"The Hunger Games",
            "runtime":"2h 37m",
            "ageClassification":"12A",
            "Year":"2023",
            "genre":"Action, Adventure, Drama",
            "director":"Francis Lawrence",
            "actors":"Rachel Zegler, Tom Blyth, Viola Davis",
            "synopsis":"Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.",
            "imageUrl":"https://image.tmdb.org/t/p/original/9cbeNkXx0OTC9pg30OZIWRi9HmL.jpg",
            "image2Url":"https://media.cinemacloud.co.uk/imageFilm/1621_1_1.jpg",
            "videoUrl":"https://www.youtube.com/watch?v=NxW_X4kzeus"
        },
        {
            "id":"6",
            "title":"Saltburn",
            "runtime":"2h 11m",
            "ageClassification":"15",
            "Year":"2023",
            "genre":"Comedy, Drama, Thriller",
            "director":"Emerald Fennell",
            "actors":"Barry Keoghan, Jacob Elordi, Rosamund Pike",
            "synopsis":"A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
            "imageUrl":"https://cdn.cinematerial.com/p/297x/wxxe27sa/saltburn-movie-poster-md.jpg?v=1698458958",
            "image2Url":"https://peachz.ca/wp-content/uploads/2023/12/p25479414_v_h10_aa.jpg",
            "videoUrl":"https://youtu.be/lALMdJf6UUE"
        },
        {
            "id":"27",
            "title":"Jurassic Park",
            "runtime":"2h 7m",
            "ageClassification":"PG",
            "Year":"1993",
            "genre":"Action, Adventure, Sci-Fi",
            "director":"Steven Spielberg",
            "actors":"Sam Neill, Laura Dern, Jeff Goldblum",
            "synopsis":"A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
            "imageUrl":"https://m.media-amazon.com/images/I/91XMXQCZwKL._AC_UF350,350_QL80_.jpg",
            "image2Url":"https://images.squarespace-cdn.com/content/v1/5f614b4400b39c4c38b67f3e/1647902522870-A2YTUJPA78C146FGOUIB/2482_TP_00001R.jpg",
            "videoUrl":"https://youtu.be/lc0UehYemQA"
        },
        {
            "id":"7",
            "title":"Wonka",
            "runtime":"1h 56m",
            "ageClassification":"PG",
            "Year":"2023",
            "genre":"Adventure, Comedy, Family",
            "director":"Paul King",
            "actors":"Timothée Chalamet, Gustave Die, Murray McArthur",
            "synopsis":"With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
            "imageUrl":"https://www.odeoncinemas.ie/media/yoxan4jg/gb_wonka_insta_vert_character_art_timothee_chalamet_1638x2048_intl-1.jpg",
            "image2Url":"https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002837?referenceScheme=HeadOffice&allowPlaceHolder=true",
            "videoUrl":"https://youtu.be/otNh9bTjXWg"
        },
        {
            "id":"9",
            "title":"Joker",
            "runtime":"2h 2m",
            "ageClassification":"15",
            "Year":"2019",
            "genre":"Crime, Drama, Thriller",
            "director":"Todd Phillips",
            "actors":"Joaquin Phoenix, Robert De Niro, Zazie Beetz",
            "synopsis":"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            "imageUrl":"https://artofthemovies.co.uk/cdn/shop/products/IMG_7868_1024x1024@2x.jpg?v=1646737198",
            "image2Url":"https://assets-in.bmscdn.com/discovery-catalog/events/et00100071-vygbykdesp-landscape.jpg",
            "videoUrl":"https://youtu.be/zAGVQLHvwOY"
        }
    ],
    "movies":[
        {
            "id":"1",
            "title":"Fast X",
            "runtime":"2h 21m",
            "ageClassification":"12A",
            "year":"2023",
            "genre":"Action, Adventure, Crimen",
            "director":"Louis Leterrier",
            "actors":"Vin Diesel, Jason Momoa, Alan Ritchson, Rita Moreno, Michelle Rodriguez, Brie Larson",
            "synopsis":"Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
            "imageUrl":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/dfys5s9-96c68a4a-5d6a-4fe2-8815-9db1d2f4c151.jpg/v1/fit/w_750,h_1072,q_70,strp/fast_x_poster_by_akithefull_dfys5s9-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyOSIsInBhdGgiOiJcL2ZcL2FhNDU0MDY5LTFmMzgtNGRiMS1hOWUzLTc1ZDZiMDBjNDJlOFwvZGZ5czVzOS05NmM2OGE0YS01ZDZhLTRmZTItODgxNS05ZGIxZDJmNGMxNTEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LQfa9utoB2HvRurkB7bglXC8MQKWHJvSkaeATF6r9mU",
            "image2Url":"https://www.cnet.com/a/img/resize/e40db3b1ecae8c7de688981520ac2c3d8c7c9617/hub/2023/08/16/23d96691-7b64-4113-81f8-71f8430f9aff/fast-x-peacock.jpg?auto=webp&width=1200",
            "videoUrl":"https://youtu.be/32RAq6JzY-w"
        },
        {
            "id":"2",
            "title":"Anyone but You",
            "runtime":"1h 43m",
            "ageClassification":"15",
            "Year":"2023",
            "genre":"Comedy, Romance",
            "director":"Will Gluck",
            "actors":"Sydney Sweeney, Glen Powell, Alexandra Shipp",
            "synopsis":"Despite an amazing first date, Bea and Ben's initial attraction quickly turns sour. However, when they unexpectedly find themselves at a destination wedding in Australia, they pretend to be the perfect couple to keep up appearances.",
            "imageUrl":"https://eastside-online.org/wp-content/uploads/2024/01/anyone-but-you-predictions-v0-e1cbqy6cm23c1.webp",
            "image2Url":"https://media.vanityfair.com/photos/65844a4cb644f728430cf119/master/w_2560%2Cc_limit/anyone-but-you-review.jpg",
            "videoUrl":"https://youtu.be/S61xB-rE770"
        },
        {
            "id":"3",
            "title":"Aquaman and the Lost Kingdom",
            "runtime":"2h 4m",
            "ageClassification":"12A",
            "Year":"2023",
            "genre":"Action, Adventure, FantasySci-Fi",
            "director":"James Wan",
            "actors":"Jason Momoa, Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II, Randall Park, Dolph Lundgren, Temuera Morrison, Martin Short, Nicole Kidman",
            "synopsis":"Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
            "imageUrl":"https://cdn.europosters.eu/image/1300/posters/aquaman-and-the-lost-kingdom-tempest-i198189.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BNjMxM2Y4NjMtNmE4OC00NDRkLWJlZGItNzI2ZGYxMWQ2MzYwXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/FV3bqvOHRQo"
        },
        {
            "id":"4",
            "title":"The Hunger Games",
            "runtime":"2h 37m",
            "ageClassification":"12A",
            "Year":"2023",
            "genre":"Action, Adventure, Drama",
            "director":"Francis Lawrence",
            "actors":"Rachel Zegler, Tom Blyth, Viola Davis",
            "synopsis":"Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.",
            "imageUrl":"https://image.tmdb.org/t/p/original/9cbeNkXx0OTC9pg30OZIWRi9HmL.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BZDJmNDIxZjktYjA3YS00ZDQzLWJmMGYtOTBkY2FjOGY3ZDZjXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/NxW_X4kzeus"
        },
        {
            "id":"5",
            "title":"Oppenheimer",
            "runtime":"3h",
            "ageClassification":"15",
            "Year":"2023",
            "genre":"Biography, Drama, History",
            "director":"Christopher Nolan",
            "actors":"Cillian Murphy, Emily Blunt, Matt Damon",
            "synopsis":"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            "imageUrl":"https://upload.wikimedia.org/wikipedia/fi/thumb/8/84/Oppenheimer-poster.jpg/800px-Oppenheimer-poster.jpg",
            "image2Url":"https://upload.wikimedia.org/wikipedia/it/a/ab/Oppenheimer_%28film%29.png",
            "videoUrl":"https://youtu.be/bK6ldnjE3Y0"
        },
        {
            "id":"6",
            "title":"Saltburn",
            "runtime":"2h 11m",
            "ageClassification":"15",
            "Year":"2023",
            "genre":"Comedy, Drama, Thriller",
            "director":"Emerald Fennell",
            "actors":"Barry Keoghan, Jacob Elordi, Rosamund Pike",
            "synopsis":"A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
            "imageUrl":"https://cdn.cinematerial.com/p/297x/wxxe27sa/saltburn-movie-poster-md.jpg?v=1698458958",
            "image2Url":"https://www.irishtimes.com/resizer/7Ms12LgP8RyH9lHkRObFimEk5v0=/1600x1200/filters:format(jpg):quality(70):focal(1680x755:1690x765)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/2K3RH27C4FB75JRW4XFIGDK2QE.jpg",
            "videoUrl":"https://youtu.be/lALMdJf6UUE"
        },
        {
            "id":"7",
            "title":"Wonka",
            "runtime":"1h 56m",
            "ageClassification":"PG",
            "Year":"2023",
            "genre":"Adventure, Comedy, Family",
            "director":"Paul King",
            "actors":"Timothée Chalamet, Gustave Die, Murray McArthur",
            "synopsis":"With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
            "imageUrl":"https://www.odeoncinemas.ie/media/yoxan4jg/gb_wonka_insta_vert_character_art_timothee_chalamet_1638x2048_intl-1.jpg",
            "image2Url":"https://www.odeoncinemas.ie/media/utxc2y5n/rev-1-won-cc-0001r_high_res_jpeg-1.jpg",
            "videoUrl":"https://youtu.be/otNh9bTjXWg"
        },
        {
            "id":"8",
            "title":"Killers of the Flower Moon",
            "runtime":"3h 26m",
            "ageClassification":"15",
            "Year":"2023",
            "genre":"Crime, Drama, History",
            "director":"Martin Scorsese",
            "actors":"Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
            "synopsis":"When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
            "imageUrl":"https://birchbarkbooks.com/cdn/shop/files/killers-of-the-flower-moon-ya.jpg?v=1690496218",
            "image2Url":"https://upload.wikimedia.org/wikipedia/it/thumb/b/bf/Killers_of_the_Flower_Moon.jpg/800px-Killers_of_the_Flower_Moon.jpg",
            "videoUrl":"https://youtu.be/7cx9nCHsemc"
        },
        {
            "id":"9",
            "title":"Joker",
            "runtime":"2h 2m",
            "ageClassification":"15",
            "Year":"2019",
            "genre":"Crime, Drama, Thriller",
            "director":"Todd Phillips",
            "actors":"Joaquin Phoenix, Robert De Niro, Zazie Beetz",
            "synopsis":"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            "imageUrl":"https://artofthemovies.co.uk/cdn/shop/products/IMG_7868_1024x1024@2x.jpg?v=1646737198",
            "image2Url":"https://cdn.vox-cdn.com/thumbor/WAVESAmwUdxWYZKuUr48zpid3nA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19187243/joker2.jpg",
            "videoUrl":"https://youtu.be/zAGVQLHvwOY"
        },
        {
            "id":"10",
            "title":"The Godfather",
            "runtime":"2h 55m",
            "ageClassification":"15",
            "Year":"1972",
            "genre":"Crime, Drama",
            "director":"Francis Ford Coppola",
            "actors":"Marlon Brando, Al Pacino, James Caan",
            "synopsis":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "imageUrl":"https://media.posterlounge.com/img/products/710000/707663/707663_poster.jpg",
            "image2Url":"https://www.okcmoa.com/wp-content/uploads/2022/08/HT-godfatrher-jef-170308_16x9_1600-1340x586.jpg",
            "videoUrl":"https://youtu.be/UaVTIH8mujA"
        },
        {
            "id":"11",
            "title":"Forrest Gump",
            "runtime":"2h 22m",
            "ageClassification":"12",
            "Year":"1994",
            "genre":"Drama, Romance",
            "director":"Robert Zemeckis",
            "actors":"Tom Hanks, Robin Wright, Gary Sinise",
            "synopsis":"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
            "imageUrl":"https://m.media-amazon.com/images/I/81xTx-LxAPL._AC_UF894,1000_QL80_.jpg",
            "image2Url":"https://www.hollywoodreporter.com/wp-content/uploads/2016/07/forrest_gump_still.jpg",
            "videoUrl":"https://youtu.be/bLvqoHBptjg"
        },
        {
            "id":"12",
            "title":"Fight Club",
            "runtime":"2h 19m",
            "ageClassification":"18",
            "Year":"1999",
            "genre":"Drama",
            "director":"David Fincher",
            "actors":"Brad Pitt, Edward Norton, Meat Loaf",
            "synopsis":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "imageUrl":"https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg",
            "image2Url":"https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/1:1/w_1707,h_1708,c_limit/Baker-FightClub.jpg",
            "videoUrl":"https://youtu.be/O1nDozs-LxI"
        },
        {
            "id":"13",
            "title":"Inception",
            "runtime":"2h 28m",
            "ageClassification":"12A",
            "Year":"2010",
            "genre":"Action, Adveture, Sci-Fi",
            "director":"Christopher Nolan",
            "actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
            "synopsis":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            "imageUrl":"https://i.ebayimg.com/images/g/FfsAAOSwrjNgr3rc/s-l1200.webp",
            "image2Url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDZu_yLlssmeWCn69_xR81yPZD3DUqdOiNdXcw_BOiE0Gbkdvyfa97Cryufm-PGZUfY4&usqp=CAU",
            "videoUrl":"https://youtu.be/8hP9D6kZseM"
        },
        {
            "id":"14",
            "title":"The Matrix",
            "runtime":"2h 16m",
            "ageClassification":"15",
            "Year":"1999",
            "genre":"Action, Sci-Fi",
            "director":"Lana Wachowski, Lilly Wachowski",
            "actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
            "synopsis":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            "imageUrl":"https://m.media-amazon.com/images/I/51DUmDryAvL._AC_UF894,1000_QL80_.jpg",
            "image2Url":"https://img.buzzfeed.com/buzzfeed-static/complex/images/gjlwbw67beqdbqafbzfw/trinity.jpg?output-format=jpg&output-quality=auto",
            "videoUrl":"https://youtu.be/TPxQqWp7kTA"
        },
        {
            "id":"15",
            "title":"Seven",
            "runtime":"2h 7m",
            "ageClassification":"18",
            "Year":"1995",
            "genre":"Crime, Drama, Mystery",
            "director":"David Fincher",
            "actors":"Morgan Freeman, Brad Pitt, Kevin Spacey",
            "synopsis":"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
            "imageUrl":"https://m.media-amazon.com/images/M/MV5BZDgyZmY5MmItY2I3Ny00NjA4LWFhNmItMGQ4ZGJhZDk5YjU3XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg",
            "image2Url":"https://dus09vr7ngt46.cloudfront.net/uploads/2017/10/09151509/seven1.jpg?height=340&width=647",
            "videoUrl":"https://youtu.be/SpKbZ_3zlb0"
        },
        {
            "id":"16",
            "title":"Interstellar",
            "runtime":"2h 49m",
            "ageClassification":"12A",
            "Year":"2014",
            "genre":"Adventure, Drama, Sci-Fi",
            "director":"Christopher Nolan",
            "actors":"Matthew McConaughey, Anne Hathaway, Jessica Chastain",
            "synopsis":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            "imageUrl":"https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg",
            "image2Url":"https://pyxis.nymag.com/v1/imgs/64a/f38/7e691f2213742142e72e47a5ddab44e2ee-01-interstellar.2x.h473.w710.jpg",
            "videoUrl":"https://youtu.be/zSWdZVtXT7E"
        },
        {
            "id":"17",
            "title":"Saving Private Ryan",
            "runtime":"2h 49m",
            "ageClassification":"15",
            "Year":"1998",
            "genre":"Drama, War",
            "director":"Steven Spielberg",
            "actors":"Tom Hanks, Matt Damon, Tom Sizemore",
            "synopsis":"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
            "imageUrl":"https://media.posterlounge.com/img/products/610000/605804/605804_poster.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BMWJlZWQ3NDktODc2Zi00NGY4LWI4MDMtYWQwNTUyOWVhMmQxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/PrthROm6ocY"
        },
        {
            "id":"18",
            "title":"City of God",
            "runtime":"2h 10m",
            "ageClassification":"18",
            "Year":"2002",
            "genre":"Crime, Drama",
            "director":"Fernando Meirelles, Kátia Lund",
            "actors":"Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele",
            "synopsis":"In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            "imageUrl":"https://www.miramax.com/assets/City-of-God1.png",
            "image2Url":"https://film-grab.com/wp-content/uploads/photo-gallery/City_of_God_009.jpg?bwg=1602064526",
            "videoUrl":"https://youtu.be/RfnGQetbX-U"
        },
        {
            "id":"19",
            "title":"Star Wars: Episode IV - A New Hope",
            "runtime":"2h 1m",
            "ageClassification":"PG",
            "Year":"1977",
            "genre":"Action, Adventure, Fantasy",
            "director":"George Lucas",
            "actors":"Mark Hamill, Harrison Ford, Carrie Fisher",
            "synopsis":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            "imageUrl":"https://filmlibrary.ie/cdn/shop/products/star-wars-a-new-hope-special-approval-required-poster_1024x1024.jpg?v=1605648153",
            "image2Url":"https://l450v.alamy.com/450v/t2y47c/carrie-fisher-kenny-baker-star-wars-episode-iv-a-new-hope-1977-t2y47c.jpg",
            "videoUrl":"https://youtu.be/vZ734NWnAHA"
        },
        {
            "id":"20",
            "title":"Back to the Future",
            "runtime":"1h 56m",
            "ageClassification":"PG",
            "Year":"1985",
            "genre":"Adventure, Comedy, Sci-Fi",
            "director":"Robert Zemeckis",
            "actors":"Michael J. Fox, Christopher Lloyd, Lea Thompson",
            "synopsis":"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
            "imageUrl":"https://cdn.europosters.eu/image/1300/posters/back-to-the-future-i152504.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BZGRjZDVkN2YtNGQyZi00NzkxLWJkNDAtYzNkY2M5M2M5MmUwXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/6hDK9QdK2ok"
        },
        {
            "id":"21",
            "title":"The Pianist",
            "runtime":"2h 30m",
            "ageClassification":"15",
            "Year":"2002",
            "genre":"Biography, Drama, Music",
            "director":"Roman Polanski",
            "actors":"Adrien Brody, Thomas Kretschmann, Frank Finlay",
            "synopsis":"During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
            "imageUrl":"https://cdn.shopify.com/s/files/1/2036/5517/products/MM00321970_1024x1024.jpg?v=1694453178",
            "image2Url":"https://s3.us-east-1.amazonaws.com/zweb-s3.uploads/visiontv/wp-content/uploads/2023/10/31130732/The-Pianist_06_1200.jpg",
            "videoUrl":"https://youtu.be/HvREP795kgU"
        },
        {
            "id":"22",
            "title":"The Lion King",
            "runtime":"1h 28m",
            "ageClassification":"PG",
            "Year":"1994",
            "genre":"Animation, Adventure, Drama",
            "director":"Roger Allers, Rob Minkoff",
            "actors":"Matthew Broderick, Jeremy Irons, James Earl Jones",
            "synopsis":"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
            "imageUrl":"https://m.media-amazon.com/images/I/61jkTiX8NuL._AC_UF894,1000_QL80_.jpg",
            "image2Url":"https://cdn.kinocheck.com/i/w=480/n3l1py27p5.jpg",
            "videoUrl":"https://youtu.be/lFzVJEksoDY"
        },
        {
            "id":"23",
            "title":"Casablanca",
            "runtime":"1h 42m",
            "ageClassification":"PG",
            "Year":"1942",
            "genre":"Drama, Romance, War",
            "director":"Michael Curtiz",
            "actors":"Humphrey Bogart, Ingrid Bergman, Paul Henreid",
            "synopsis":"A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
            "imageUrl":"https://storage.googleapis.com/pod_public/1300/145805.jpg",
            "image2Url":"https://storage.googleapis.com/pod_public/1300/145805.jpg",
            "videoUrl":"https://youtu.be/MF7JH_54d8c"
        },
        {
            "id":"24",
            "title":"The Father",
            "runtime":"1h 37m",
            "ageClassification":"12A",
            "Year":"2020",
            "genre":"Drama, Mystery",
            "director":"Florian Zeller",
            "actors":"Anthony Hopkins, Olivia Colman, Mark Gatiss",
            "synopsis":"A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
            "imageUrl":"https://media-cache.cinematerial.com/p/500x/vntmjrsh/the-father-british-movie-poster.jpg?v=1600268666",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BNDA5MmY1NDQtYzM5Ni00OTFlLWFlMjAtNzkxZDdlMTY3ZTUzXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,26,500,281_.jpg",
            "videoUrl":"https://youtu.be/4TZb7YfK-JI"
        },
        {
            "id":"25",
            "title":"Die Hard",
            "runtime":"2h 12m",
            "ageClassification":"18",
            "Year":"1988",
            "genre":"Action, Thriller",
            "director":"John McTiernan",
            "actors":"Bruce Willis, Alan Rickman, Bonnie Bedelia",
            "synopsis":"A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
            "imageUrl":"https://images.squarespace-cdn.com/content/v1/64393af6c3d4da7ca1099c71/1699098658415-HQNVWWEHBOFMHWQ7SDLT/Die+Hard.png",
            "image2Url":"https://images.bauerhosting.com/empire/2019/09/die-hard.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
            "videoUrl":"https://youtu.be/gYWvwkXreaI"
        },
        {
            "id":"26",
            "title":"Jaws",
            "runtime":"2h 4m",
            "ageClassification":"12",
            "Year":"1975",
            "genre":"Adventure, Mystery, Thriller",
            "director":"Steven Spielberg",
            "actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss",
            "synopsis":"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
            "imageUrl":"https://m.media-amazon.com/images/I/81KLfL7j2CL._AC_UF894,1000_QL80_.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BZTI1Y2I2ZTMtY2RmNy00NzUzLWFjYWItMzUxMWNmZmZjMDMzXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/q-50_xoF9Kg"
        },
        {
            "id":"27",
            "title":"Jurassic Park",
            "runtime":"2h 7m",
            "ageClassification":"PG",
            "Year":"1993",
            "genre":"Action, Adventure, Sci-Fi",
            "director":"Steven Spielberg",
            "actors":"Sam Neill, Laura Dern, Jeff Goldblum",
            "synopsis":"A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
            "imageUrl":"https://m.media-amazon.com/images/I/91XMXQCZwKL._AC_UF350,350_QL80_.jpg",
            "image2Url":"https://www.intofilm.org/intofilm-production/scaledcropped/1096x548https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3877-jurassic-park--hi_res-458ae800.jpg/film__3877-jurassic-park--hi_res-458ae800.jpg",
            "videoUrl":"https://youtu.be/lc0UehYemQA"
        },
        {
            "id":"28",
            "title":"The Exorcist",
            "runtime":"2h 2m",
            "ageClassification":"18",
            "Year":"1973",
            "genre":"Horror",
            "director":"William Friedkin",
            "actors":"Ellen Burstyn, Max von Sydow, Linda Blair",
            "synopsis":"When a young girl is possessed by a mysterious entity, her mother seeks the help of two Catholic priests to save her life.",
            "imageUrl":"https://media.posterlounge.com/img/products/510000/507754/507754_poster.jpg",
            "image2Url":"https://toplist.vn/images/800px/the-exorcist-collection-my-55241.jpg",
            "videoUrl":"https://youtu.be/YDGw1MTEe9k"
        },
        {
            "id":"29",
            "title":"Ratatouille",
            "runtime":"1h 51m",
            "ageClassification":"PG",
            "Year":"2007",
            "genre":"Animation, Adventure, Comedy",
            "director":"Brad Bird, Jan Pinkava",
            "actors":"Brad Garrett, Lou Romano, Patton Oswalt",
            "synopsis":"A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
            "imageUrl":"https://i.ebayimg.com/images/g/qQsAAOSw--1bOR8h/s-l1600.jpg",
            "image2Url":"https://www.corriere.it/methode_image/2022/01/13/Cucina/Foto%20Cucina%20-%20Trattate/Ratatouille_copertina-kuTD--590x445@Corriere-Web-Sezioni.jpg",
            "videoUrl":"https://youtu.be/c3sBBRxDAqk"
        },
        {
            "id":"30",
            "title":"Logan",
            "runtime":"2h 17m",
            "ageClassification":"15",
            "Year":"2017",
            "genre":"Action, Drama, Sci-Fi",
            "director":"James Mangold",
            "actors":"Hugh Jackman, Patrick Stewart, Dafne Keen",
            "synopsis":"In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
            "imageUrl":"https://m.media-amazon.com/images/I/51wewtpj08L._AC_UF894,1000_QL80_.jpg",
            "image2Url":"https://m.media-amazon.com/images/M/MV5BMjQxNDgzMTU5M15BMl5BanBnXkFtZTgwODE3OTgxMTI@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            "videoUrl":"https://youtu.be/RH3OxVFvTeg"
        }
    ]
}`
const myJson = JSON.parse(Json);

//---------------------------------------------------------------------------------------------------------------------//

//-------------------------WEBPAGE STRUCTURE AND MAIN FUNCTIONS ONCE THE WEBPAGE IS LOADED-----------------------------//

window.addEventListener("load", () => {

    //-----Running carousel---------------//
    runCarrousel();

    //-----Running Movie List in order to display all available movies-------------//
    showMoviesList();

    //-----Running movies content by clicking the picture of every movie-----------------------------------------------//
    const movieSelection = document.querySelectorAll(".movieListPicture");
    movieSelection.forEach(movieSelection => {
        movieSelection.addEventListener("click", e => {
            showMovieContent(e.target.id);
        });
    });

    //------Running searcher input in order to find the wished movie--------------//
    const movieSearched = document.querySelectorAll(".movie");
    const searcher = document.querySelector(".search")

    searcher.addEventListener("keyup", e=>{
        movieSearched.forEach(movieSelected =>{
            //---if the movie if found a new class should be added to the div in order to appear selected movie and disappear the other movies--//
            if(movieSelected.textContent.toLowerCase().includes(e.target.value.toLowerCase().trim())){
                movieSelected.classList.remove("desactive");
            } else {
                movieSelected.classList.add("desactive");
            }
        })
    })
  });
//----------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------CAROUSEL----------------------------------------------------------//
const carousel = document.querySelector(".carrousel");
const picture = document.querySelector(".picture");
const carouselTitle = document.querySelector(".carousel-title");

picture.addEventListener("click", e=>{showMovieContent(e.target.id)})

let currentPosition = 0;
const buttonBackward = document.querySelector(".back").addEventListener("click",(e)=>Backward());
const carrouselImage = document.querySelector(".carrousel-image");
const buttonForward = document.querySelector(".forth").addEventListener("click",(e)=>Forward());
const checkMobile = window.matchMedia('screen and (max-width: 992px)').matches;

//----function to go back to previous image-----
function Backward(){
    if(currentPosition <= 0) {
        currentPosition = myJson.top5.length - 1;
    } else {
        currentPosition--;
    }
    if(window.matchMedia('screen and (max-width: 892px)').matches) showCarrouselImage(myJson.top5[currentPosition].imageUrl,myJson.top5[currentPosition].id,myJson.top5[currentPosition].title);
    else showCarrouselImage(myJson.top5[currentPosition].image2Url,myJson.top5[currentPosition].id,myJson.top5[currentPosition].title);
}

//----function to go forward to next image-----
function Forward(){
    if(currentPosition >= myJson.top5.length - 1){
        currentPosition = 0;
    } else {
        currentPosition++
    }
    if(window.matchMedia('screen and (max-width: 792px)').matches) showCarrouselImage(myJson.top5[currentPosition].imageUrl,myJson.top5[currentPosition].id,myJson.top5[currentPosition].title);
    else showCarrouselImage(myJson.top5[currentPosition].image2Url,myJson.top5[currentPosition].id,myJson.top5[currentPosition].title);
}

//function to set attributes in order to show the current image
function showCarrouselImage(url,id,alt){
    picture.setAttribute("id",id)
    picture.setAttribute("src", url);
    picture.setAttribute("alt", alt);
    carouselTitle.textContent = alt;

}

//-----Fuction to change forward the carousel images every 7 seconds----------
function runCarrousel(){
    setInterval(Forward, 7000);

}
//-----------------------------------------------------------------------------------------------------------------------//

//------------------------------------------- DISPLAYING A LIST OF ALL MOVIES -------------------------------------------//

const listContainer = document.querySelector(".movies-list");

//-----Function to manipulate the DOM in order to create a div with an image coming from JSON---------------
function showMoviesList(){
    let documentFragment = document.createDocumentFragment()
    myJson.movies.forEach(e => {
        let div = document.createElement("DIV");
        div.setAttribute("class", "movie");
        div.innerHTML = `<img src=${e.imageUrl} id=${e.id} alt="${e.title}" class="movieListPicture"/>
                        ${e.title}`;
        documentFragment.appendChild(div);
    });

    listContainer.innerHTML = '';
    listContainer.appendChild(documentFragment);

}

//------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------MOVIE CONTENT BOX----------------------------------------------------//

const movieContainer = document.querySelector(".movieInfo-container");
const escape = document.querySelector(".escape").addEventListener("click",e=>closeMovieContent())
const movieVideo = document.querySelector(".video-source");
const movieBg = document.querySelector(".movie-content2");
const movieImg = document.querySelector(".movie-img");
const movieTitle = document.querySelector(".movie-title");
const movieRuntime = document.querySelector(".movie-runtime");
const movieGenre = document.querySelector(".movie-genre");
const movieYear = document.querySelector(".movie-year");
const movieAge = document.querySelector(".movie-age");
const movieDirector = document.querySelector(".movie-director");
const movieActors = document.querySelector(".movie-actors");
const movieSynopsis = document.querySelector(".movie-synopsis");
const bookingButton = document.querySelector(".booking").addEventListener("click", e=>{
    myForm(true);
})


//----------------Function to display the clicked movie information-------------
function showMovieContent(idNumber){
    listContainer.style.display = "none";
    carousel.style.display = "none";
    let id = idNumber - 1;
        //movieVideo.setAttribute("src",myJson.movies[id].videoUrl);
        movieContainer.style.display ="flex";
        console.log(myJson.movies[id].videoUrl)
        //movieVideo.setAttribute("src",myJson.movies[id].videoUrl);
        movieImg.setAttribute("src",myJson.movies[id].imageUrl);
        movieTitle.textContent = `${myJson.movies[id].title}`;
        movieRuntime.textContent = `Runtime: ${myJson.movies[id].runtime}`;
        movieGenre.textContent = `Genre: ${myJson.movies[id].genre}`;
        movieYear.textContent = `Release Year: ${myJson.movies[id].year}`;
        movieAge.textContent = `Age Classification: ${myJson.movies[id].ageClassification}`;
        movieDirector.textContent = `Director: ${myJson.movies[id].director}`;
        movieActors.textContent = `Actors: ${myJson.movies[id].actors}`;
        movieSynopsis.textContent = `Synopsis: ${myJson.movies[id].synopsis}`;
}

//-------------------Function to close the box when 'X' is clicked--------------------
function closeMovieContent(){
    movieContainer.style.display = "none";
    listContainer.style.display = "flex";
    carousel.style.display = "flex";
    myForm(false);
}

//--------------------------------------------------------------------------------------------------------------------------//

//---------------------------------FORM------------------------------------
const form = document.getElementById("myForm");
const cancel = document.querySelector(".cancel").addEventListener("click", e=>{
    myFormCancel();
});
const book = document.querySelector(".book");

function myForm(OC){
    if(OC) form.style.display = "flex";
    else form.style.display = "none"; 
}

function myFormCancel(){
    form.style.display = "none";
}

function myFormBook(){

}