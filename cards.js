
const documentaryCardsContent = [
    {
      name: "Hotel Hate (CZ)",
      text: "For: Hate Free, 2023<br><br>A story about lesbian cows, rusty cunts and fags with crooked teeth. An exploration of misogyny and homophobia in contemporary Czechia.<br><br>With Adam Voneš and Lukáš Houdek",
      url: [null, "https://www.youtube.com/watch?v=Y3-mMkQSYRQ", null, null],
      img: "https://d2a9bkgsuxmqe2.cloudfront.net/staging/podcast_uploaded_episode400/17514718/17514718-1687697716252-89e52edfe6bd5.jpg",
      big: 1.1
    },
    {
      name: "Anatomy of Fear (CZ)",
      text: `For: Audionaut, 2020<br><br>“I fear that which I cannot see.” Anatomy of Fear is an in-depth exploration of one emotion captured in five true stories. A series of intimate micro-horrors in sound.<br><br>With Jiří Slavičínský and Martin Ožvold`,
      url: [null, "https://audionaut.cz/podcasty/anatomie-strachu/", null, null],
      img: "Pictures/strach.png",
      big: 1.1
    },
    {
      name: "Mathematics of Crime (CZ)",
      text: `Czechia’s very first true crime podcast. An investigation revealing the grave implications to justice caused by a court-appointed expert and media darling nick-named “The Mathematician of Crime.”<br><br>With Magdalena Sodomková, Martin Ožvold, Jakub Rataj and Roman Špála<br><br><a target="_blank" href="https://www.youtube.com/watch?v=Xm2HFspE9Vs">The podcast series was later adapted into a TV miniseries of the same name.</a>`,
      url: [null, "https://matematikazlocinu.cz/", null, null],
      img: "Pictures/Mat. Zločinů.jpg",
      big: 1.5
    },
    {
      name: "Das Kapital (EN)",
      text: "For: BBC Radio 3, 2017<br><br>Tracing the story of a peculiar red parrot, bought in a Prague toy store, back to where it came from, and ultimately, back to Marx.<br><br>With Martin Ožvold",
      url: ["https://www.bbc.co.uk/programmes/b09h30v2", null, null, null],
      img: "Pictures/Parrot.jpg"
    },
    {
      name: "The House at the End of the Road (CZ)",
      text: "For: The Daily Denik Referendum, 2025<br><br>When prominent Czech architect Růžena Žertová became terminally ill in 2019, she had two final wishes: to die at home and to leave her beloved house to a foundation. But when a doctor became involved, neither wish was fulfilled. What happened?<br><br>With Gaby Khazalová and Martin Ožvold",
      url: [null, "https://shows.acast.com/dm-v-zakouti", null, null],
      img: "Pictures/dum.jpeg",
      big: 1.5
    },
    {
      name: "A New Tense (EN)",
      text: "For: BBC Radio 4, 2022<br><br>A story about learning the language of loss.<br><br>With Martin Ožvold and Eleanor McDowall",
      url: ["https://www.youtube.com/watch?v=VxlLEPjZPBU", null, null, null],
      img: "Pictures/volcano.jpg",
    },
    {
      name: "The Grand Plan (CZ)",
      text: "For: Czech Radio, 2015<br><br>Claire is 87 and lives in a house on an island in Lake Ontario, Canada. She is looking for love, but finding it isn’t easy. Then Brit enters the picture, and a grand plan begins to take shape.<br><br>With Eva Nachmilnerová and Jiří Slavičínský",
      url: [null, "https://www.radioatlas.org/the-grand-plan/", null, null],
      img: "Pictures/Lake.jpeg",
      big: 1.1
    },    
    {
      name: "Lockdown in Stereo (CZ)",
      text: "Independent production, 2021<br><br>A short piece about living the personal consequences of media censorship.<br><br>With Adam Voneš",
      url: [null, null, null, "https://www.youtube.com/watch?v=Z52Yhk_c0m8"],
      img: "Pictures/bowl.jpeg",
    },
    {
      name: "Action Oil (CZ)",
      text: `For: The Daily Deník Referendum, 2021<br><br>Miroslav Trávníček was a successful agricultural commodities trader until he found himself behind bars, accused of masterminding a VAT carousel fraud. But was he really the man behind it? An investigation uncovers other suspects and a trail that leads all the way to Andrej Babiš, the billionaire businessman who became Czech prime minister.<br><br>With Zuzana Vlasatá, Adam Voneš and Ondřej Merta`,
      url: [null, "https://denikreferendum.cz/akceolej", null, null],
      img: "Pictures/olej.jpg",
      big: 1.7
    },
    {
      name: "Heck (CZ)",
      text: `For: Czech Radio, 2019<br><br>A personal odyssey into the heart of a Czech Christmas tradition, recorded at home with two frightened children and one equally frightened parent.<br><br>With Martin Ožvold and Viola Ježková`,
      url: [null, "https://vltava.rozhlas.cz/peklicko-oceneny-dokument-brit-jensen-o-mikulasske-tradici-7697995", null, null],
      img: "Pictures/čerti.jpg",
      big: 1.1
    },
    {
      name: "Ella from Prague (DK)",
      text: "For Radio24syv, 2015<br><br>Shortly after World War II, young Danish woman Ella Thygesen marries Ladislav, a wealthy Czechoslovak. But when the communist coup turns their lives upside down, questions begin to emerge about Ladislav himself, and whether he is really who he claims to be.<br><br>With Rikke Houd and Kim G. Hansen",
      url: [null, null,"https://www.youtube.com/watch?v=YRPnoGEmh3E", null],
      img: "Pictures/Ella from Prague.jpg",
      big: 1.4
    },
    {
      name: "The Cassette (CZ)",
      text: "For: Czech Radio, 2017<br><br>A Romanian radio presenter gets a rare chance: to meet Bill Drummond from The KLF, her teenage music idol, and tell him what his music meant to her. But meeting your hero is one thing. Understanding each other is another.<br><br>With Maria Balabas, Jiří Slavičínský and Roman Špála",
      img: "https://i.ytimg.com/vi/Jc-EyjnmGi4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJF0dv_B8ZGh8z2NgpOsW57aESkQ",
      url: [null, null, null, "https://www.youtube.com/watch?v=Jc-EyjnmGi4"],
      big: 1.3
    },
    {
      name: "There is a river flowing in the mountains (CZ)",
      text: "For: Czech Radio, 2018<br><br>A mission to make a radio programme in Myanmar about the devastating effects of flooding takes an unexpected turn when a mysterious white car begins appearing wherever the reporters go. The secret police seem to be watching. And suddenly, the story is also about the fear of being watched.<br><br>With Jiří Slavičínský, Viola Ježková and Roman Špála",
      url: [null, "https://cestyzavodou.rozhlas.cz/", null, null],
      img: "Pictures/Myanmar.jpg",
      big: 1.5
    },
    {
      name: "It Looks Like Cotton (DK)",
      text: "For Radio24syv, 2016<br><br>Can you support the right to abortion and still talk about the pain that can follow one? Women struggling emotionally after an abortion are sometimes met with: “You could have chosen differently.” Brit Jensen and Rosa Marie Frang set out to challenge that silence, while remaining unequivocally pro-choice.<br><br>With Rosa Marie Frang and Kim G. Hansen",
      url: [null, null, "https://www.youtube.com/watch?v=BCE-kUPg5gg", null],
      img: "Pictures/Cloud.jpeg",
      big: 1.5
    }, 
    {
      name: "Nothing To Brag About (CZ)",
      text: "For: Czech Radio and Iron Curtain Project, 2016<br><br>Before 1989, millions of Czechoslovaks were members of the Communist Party. Today, they seem to have vanished into thin air. Brit sets out to find a former party member willing to talk. How hard can it be? Quite hard, as it turns out.<br><br>With Román Špála and Eva Nachmilnerová",
      url: [null, null, null, null],
      img: "Pictures/KSC knizka.jpeg",
      big: 1.3
    },
    {
      name: "The Substitute (DK)",
      text: "For Radio24syy, 2013<br><br>Brit takes a temporary job at an accounting firm just as the busy season approaches. She is replacing an accountant who has died. But what do you say when the phone rings and clients ask to speak to him? A story about human chaos intruding on a world built of refined orderliness.<br><br>With Jón Hallur Stefánsson and Kim G. Hansen",
      img: "Pictures/The Substitute.jpg",
      url: [null, null,  "https://www.youtube.com/watch?v=8r8JVdEpR3A", null],
      big: 1.45
    },    
    {
      name: "Yusra, Swim for Your Life (EN)",
      text: "For: Czech Radio, BBC 4 and BBC World Service, 2016<br><br>Yusra Mardini's story made news around the world - the teenage Syrian refugee who swam to survive, and then was selected to compete in the pool for the refugee team at the Olympic Games. Czech journalist Magdaléna Sodomková met Yusra in Serbia in August 2015 and followed her journey all the way to Rio.<br><br>With Magdalena Sodomková, Jan Trojan and Lam Duc Hien",
      url: ["https://www.bbc.co.uk/programmes/p047g9tg", "https://interaktivni.rozhlas.cz/yusra/", null, null],
      img: "Pictures/Immigrants.jpg",
      big: 1.8
    },
    {
      name: "In Ten Years (CZ)",
      text: "For: Czech Radio, 2020<br>Brit’s eight-year-old child believes the world will end in ten years. His certainty deeply unsettles her. Together, mother and son set out to discover where his fear of the apocalypse comes from, and what they can do about it. <br><br> With Radim Dlesk",
      url: [null, "https://www.youtube.com/watch?v=iGgFyt3Duts", null, null],
      img: "Pictures/za deset let.jpeg" 
    },
    {
      name: "TOLD UNTOLD (CZ)",
      text: "For: Czech Radio and the dutch Ironcurtainproject.eu, 2016<br><br>When a regime changes over night, certain stories become homeless, new taboos form.<br><br>ToldUntold is a documentary project that invited Czechs to tell their own untold stories from pre-89 Czechoslovakia.<br><br>With Emma Kollau and the Ironcurtainproject collective",
      url: [null, "https://www.ironcurtainproject.eu/en/stories/tolduntold/", null, null],
      img: "Pictures/Communist group.jpeg",
      big: 1.4
    },
        {
      name: "To Die and Yet Survive",
      text: "For: Czech Radio, 2019<br><br>Dan had been searching for decades when he finally tried smoking Bufo alvarius. As he told Brit about the experience, one thing stood out above all: Dan had experienced death, and yet survived. This is his account of what happened.",
      url: [null, "https://wave.rozhlas.cz/umrit-a-prezit-poslechnete-si-dokument-o-zazitku-s-jednim-z-nejsilnejsich-8109483", null, null],
      img: "Pictures/todie.png",
      big: 1.1
    },
    {
      name: "Anatomy of a Moravian Village (CZ)",
      text: "For: Czech Radio, 2014<br><br>In the hills of eastern Czechia, Brit finds a new home after moving from Denmark. Curious about the village’s past, she discovers a forgotten grave in the nearby woods, the resting place of an unknown German soldier. But there are other things buried here too. Slowly, stories begin to resurface, exposing old wounds and injustices that have never been laid to rest.<br><br>With Eva Nachmilnerová and Roman Špála",
      url: [null, "https://vltava.rozhlas.cz/anatomie-jedne-moravske-vesnice-5033229", null, null],
      img: "Pictures/František a máma.jpeg",
      big: 1.6
    },    
    {
      name: "I Have Been To Maidan Today (EN)",
      text: "For: ABC, 2014<br><br>Oleh Krykavskyy, a young lawyer based in Kiev, kept an audio diary during the events on the Maidan square in during the Winter and Spring of 2014.<br><br>With Claudia Tarranto",
      url: ["https://www.abc.net.au/listen/programs/360-documentaries/i-have-been-to-maidan-today/5724852", null, null, null],
      img: "Pictures/Tough guys.jpg",
      big: 1.1
    },
    {
      name: "Back to Snoldelev (DK)",
      text: "For Radio24syv, 2013<br><br>A story about traveling abroad – and about returning home. Home to the farm where the ancestors have lived for at least five generations, and home to the windswept region where King Snold ruled over Denmark's first capital in ancient times.<br><br>With Rikke Houd and Kim G. Hansen",
      img: "Pictures/Snoldelev.jpeg",
      url: [null, null, "https://www.youtube.com/watch?v=xgskQKKH46w", null],
      big: 1.5
    },    
    {
      name: "Reportage From an Ending (CZ)",
      text: "For: Czech Radio, 2017<br><br> A dream of a simple life close to nature is over.  The Danish guy in the circus caravan on the meadow is packing up his things to return to civilization. An ending unfolds. <br><br>With Tomas Pernický",
      url: [null, "https://wave.rozhlas.cz/novy-audiodokument-je-o-tom-jak-muze-dansky-dobrodruh-najit-stesti-na-louce-v-5990611", null, null],
      img: "Pictures/Torben a Maringotka.jpg",
      big: 1.2
    },
    {
      name: "Tom and the Time Machine (DK)",
      text: "For: Radio24syv, 2013<br><br> Tom Sonntag has muscular dystrophy. Tom Sonntag has muscular dystrophy. Day by day, hour by hour, he is growing weaker. Soon, he will no longer be able to lift his arms and play his beloved Steinway grand piano. But now, he has begun building a Time Machine that will take him back to music.<br><br>With Kim G. Hansen",
      img: "Pictures/Piano.jpg",
      url: [null, null, "https://www.youtube.com/watch?v=vz9skagIHkk", null],
      big: 1.5
    },
    {
      name: "Leave No One Behind (DK)",
      text: "For: The Danish Institute for the Blind, 2024<br><br>Svetlana, Yamin and Ruta have experienced invasion, coup and war. But these three women have worse odds than many others, because they all live with a sight impairment.",
      url: [null, null, "https://shows.acast.com/639c2162509aef001197329a/65251790a416f1001166ac6e", null],
      img: "Pictures/verdenssyn.jpg"
    },   
    {
      name: "One day up, the next down (CZ)",
      text: "For: Czech Radio, 2011<br><br>On the streets of Prague and Brno radio reporter Brit Jensen meets eight vendors of the homeless magazine, Nový Prostor. <br><br>With Roman Špála",
      url: [null, "https://www.youtube.com/watch?v=rdPtVOwznVM", null, null],
      img: "Pictures/Homeless.jpg"
    },
    {
      name: "Alexander and Lizethe (DK)",
      text: "For: Radio24syv, 2014<br><br>After high school, a young woman comes out as a lesbian. At 27, she transitions and becomes Alexander. Now, he is alone. Seven years later, Alexander meets Lizethe from Colombia, and a multilayered love story begins to unfold.<br><br>With Kim G. Hansen",
      img: "Pictures/LGBT.jpg",
      url: [null, null, "https://www.youtube.com/watch?v=L2ewryWdIH8", null],
      big: 1.4
    },    
    {
      name: "Everything in Life Has Its Price (DK)",
      text: "For Radio24syv, 2014<br><br>A portrait of Dorthe Duus Hansen who has lived a long and tough life with prostitution in the streets of Copenhagen.<br><br> With Kim G. Hansen",
      img: "Pictures/Street.jpeg",
      url: [null, null, "https://www.youtube.com/watch?v=Ahx3xuV0pOQ", null],
      big: 1.1
    },
    {
      name: "Radio Dogs",
      text: "Long time friends, sound nerds and colleagues Jiří and Brit listen to and share audio documentaries.<br><br>With Jiří Slavičínský",
      url: [null, "https://radiodogs.cz/cs", null, null],
      img: "Pictures/radio dogs.png"
    },
    {
      name: "2049 (DK)",
      text: "For: Third Ear, 2024<br><br> A podcast series about climate change and future travel. Futurist and host Denis Rivin travels to the year 2049 together with 25 people – scientists, wise minds, activists – to see how the climate solutions they were working on back in 2024, have turned out.",
      url: [null, null, "https://thirdear.studio/da/pods/2049", null],
      img: "Pictures/2049.jpg",
      big: 1.1
    },
    {
      name: "Who Cares? (CZ)",
      text: "For: Charles University, 2024<br><br> Stories about and by people, who has lived institutional lives in Czechoslovakia/Czechia - and survived. 8 stories that want to challenge established ideas of otherness, vulnerability and care.",
      url: [null, "https://kohobytozajimalo.transistor.fm/", null, null],
      img: "https://img.transistor.fm/-uGm_-fxYfywYJQfDi-p23z-Tdr5kkqli9tDICCogIs/rs:fit:600:288:1/q:60/aHR0cHM6Ly9pbWct/dXBsb2FkLXByb2R1/Y3Rpb24udHJhbnNp/c3Rvci5mbS9sb2dv/cy9zaXRlLzE1MTQ1/LzBfVVZPRF9FUEla/T0RBLnBuZw.webp",
    },
];


const dramaturgyCardsContent = [
    {
      name: "What No One Sees, 2025 (DK)",
      text: "A monthly podcast that explores, debates, and documents life with visual impairment. I am helping out as a producer and editor.",
      url: [null, null, "https://blind.dk/podcast/alt-det-som-ingen-ser/", null],
      img: "Pictures/sees.jpg"
    },
    {
      name: "Ruths Hus, 2024 (DK)",
      text: "A documentary podcasts series by Krister Moltzen about the Danish Christian sect “Faderhuset.”<br><br>I researched and recorded the Czech strand of the story.",
      url: [null, null, "https://thirdear.studio/da/pods/ruth", null],
      img: "Pictures/ruth.jpg"
    },
    {
      name: "Rosas Reality Radio (DK)",
      text: "A Danish audio documentary and sound piece about artists working conditions.",
      url: [null, null, "https://www.rosasreality.com/rosas-reality-radio/", null],
      img: "https://www.rosasreality.com/wp-content/uploads/2024/02/RRR_cover_epi_4.png",
    },
    {
      name: "DokuVlna (CZ)",
      text: "Documentaries at Czech Radio's youth channel.",
      url: [null, "https://wave.rozhlas.cz/dokuvlna-5179683", null, null],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmqQyovtj2Qc-gVP0dsYx6Eu2DcNEndY3lA&s",
    },
    {
      name: "Hate Free (CZ)",
      text: "A Czech documentary podcast about hate crime, minority rights and taboo breaking.",
      url: [null, "https://www.hatefree.cz/audio/exteriery", null, null],
      img: "https://www.hatefree.cz/images-cache/front/design/no-image/image_variants/png/no-image-w600.png",
    },
    {
      name: "The Eagle Karina Has Died (CZ)",
      text: "An ecological true crime series about poison in Czech forrests.",
      url: [null, "https://audionaut.cz/podcasty/orlicekarinazemrela/", null, null],
      img: "Pictures/orlicekarinazemrela.jpg",
    },
    {
      name: "GenZ (CZ)",
      text: "Stand-alone documentaries by journalism students from Masaryk University in Brno, Czechia.",
      url: [null, "https://prixbohemia.czech.radio/genz-9078767", null, null],
      img: "https://prixbohemia.czech.radio/sites/default/files/styles/cro_16x9_tablet/public/images/c79f68ce67f47662765e1b4ab95326cc.jpg?itok=EBe8m1Fm&timestamp=1695484848",
    },
    {
      name: "Zhasni! Turn Out the Lights (CZ)",
      text: "The first ever Czech Radio podcast series.",
      url: [null, "https://www.mujrozhlas.cz/zhasni", null, null],
      img: "https://www.mujrozhlas.cz/sites/default/files/styles/teaser/public/rapi/9dc61ddd81d7b9a9c754149f1498ec2e.jpg?h=9e16a70f&itok=7xtsIKfz",
    },
    {
      name: "Let it be (CZ)",
      text: "Ivan Kačur and Jiří Slavičínský made a beautiful sound diary about life in ones specific body. I helped out as a dramaturge.",
      url: [null, "https://audionaut.cz/podcasty/nechat-to-bejt/", null, null],
      img: "Pictures/nechat.jpg"
    },
    {
      name: "Dokumomenty, 2020 (CZ)", 
      text: "I was the commissioning editor and dramaturge for this cycle of short-form documentary of Czech Radio’s culture channel.",
      url: [null, "https://www.mujrozhlas.cz/dokumoment", null, null],
      img: "Pictures/dokumoment.jpg",
    }
];


// -----------------------------------------------------------------------------------------------------------------------------------------------------

const cards = document.querySelector(".cards-con");
const pageName = document.querySelector("title").innerHTML.substring(18);

// render cards:
if (pageName === "Dramaturgy") {
    dramaturgyCardsContent.forEach((card) => {
        cards.innerHTML += `
            <div class="card">
                <img class="card-img" src="${card.img}"/>
                <div class="card-hidden">
                    <h3 class="card-name">${card.name}</h3>

                    ${card.url[0] ? `<a href="${card.url[0]}" target="_blank" class="more-link"/>listen in English ...</a>` : ""}
                    ${card.url[3] ? `<a href="${card.url[3]}" target="_blank" class="more-link"/>listen with English subtitles ...</a>` : ""}
                    ${card.url[1] ? `<a href="${card.url[1]}" target="_blank" class="more-link"/>listen in Czech ...</a>` : ""}
                    ${card.url[2] ? `<a href="${card.url[2]}" target="_blank" class="more-link"/>listen in Danish ...</a>` : ""}

                    <p class="card-text">${card.text}</p>
                </div>
            </div>
        `
    });
} else if (pageName === "Audio-documentary") {
    documentaryCardsContent.forEach((card, index) => {
        console.log(card.audio)
        cards.innerHTML += `
            <div class="card">
                <img class="card-img" src="${card.img}"/>
                <div class="card-hidden">
                    <h3 class="card-name">${card.name}</h3>

                    ${card.url[0] ? `<a href="${card.url[0]}" target="_blank" class="more-link"/>listen in English ...</a>` : ""}
                    ${card.url[3] ? `<a href="${card.url[3]}" target="_blank" class="more-link"/>listen with English subtitles ...</a>` : ""}
                    ${card.url[1] ? `<a href="${card.url[1]}" target="_blank" class="more-link"/>listen in Czech ...</a>` : ""}
                    ${card.url[2] ? `<a href="${card.url[2]}" target="_blank" class="more-link"/>listen in Danish ...</a>` : ""}

                    ${card.audio ? `<audio class="audio-${index}">
                      <source src="${card.audio}" type="audio/mpeg">
                        </audio>
                      <button class="play-pause" id="play-pause-${index}">▶</button>
                      `
                      : ""}
                    <p class="card-text">${card.text}</p>

                </div>
            </div>

        `
    });
}

// --------------------------------------------------------------------------------------------------------------------------------------------

const cardImgs = document.querySelectorAll(".card-img");  
const hiddenCards = document.querySelectorAll(".card-hidden");
const šport = (visualViewport.width > 800);

let updateAudioControl;

hiddenCards.forEach((card, index) => {

    const closeCard = () => {
        card.style.opacity = "0";
        cardImgs[index].style.opacity = "1";
        cardImgs[index].style.filter = "";
        cardImgs[index].style.transform = '';
        cardImgs[index].style.zIndex = "0";
        cardImgs[index].style.border = "none";
        document.querySelectorAll(".card").forEach((c, i) => {
          c.style.pointerEvents = "auto"; // make so you can hover over all cards again.
        });
    }

    card.addEventListener((šport) ? "mouseover" : "click", () => {
        if (card.style.opacity === "1") {
          closeCard();
        } else {
          document.querySelectorAll(".card").forEach((c, i) => {
            (i != index) ? c.style.pointerEvents = "none" : "" ; // make it so you can't hover over any other cards.
          });
          card.style.opacity = "1";
          cardImgs[index].style.filter = "blur(3px) contrast(0%)";
          cardImgs[index].style.zIndex = "1";
          cardImgs[index].style.transform = `scaleY(${pageName === "Audio-documentary" ? documentaryCardsContent[index].big : dramaturgyCardsContent[index].big})`;
          cardImgs[index].style.border = "10px solid black";
        }
    });

    card.addEventListener("mouseout", () => {
      closeCard();
    });    
});

