// url: [["www.cz", "cz"], ["www.dk", "dk"], ["www.com", "en"]]

const documentaryCardsContent = [
    {
      name: "Hotel Hate (CZ)",
      text: "For: Hate Free, 2023<br><br>A story about lesbian cows, rusty cunts and fags with crooked teeth. An exploration of misogyny and homophobia in contemporary Czechia.<br><br>With Adam Voneš and Lukáš Houdek",
      url: "https://en.banguoja.lt/neapykantos-viesbutis",
      img: "https://d2a9bkgsuxmqe2.cloudfront.net/staging/podcast_uploaded_episode400/17514718/17514718-1687697716252-89e52edfe6bd5.jpg",
      big: 1.1
    },
    {
      name: "Anatomy of Fear (CZ)",
      text: `For: Audionaut, 2020<br><br>“I fear that which I cannot see.” Anatomy of Fear is an in-depth exploration of one emotion captured in five true stories. A series of intimate micro-horrors in sound.<br><br>With Jiří Slavičínský and Martin Ožvold`,
      url: "https://audionaut.cz/podcasty/anatomie-strachu/",
      img: "Pictures/strach.png",
      big: 1.1
    },
    {
      name: "Mathematics of Crime (CZ)",
      text: `Czechia’s very first true crime podcast. An investigation revealing the grave implications to justice caused by a court-appointed expert and media darling nick-named “The Mathematician of Crime.”<br><br>With Magdalena Sodomková, Martin Ožvold, Jakub Rataj and Roman Špála<br><br><a target="_blank" href="https://www.youtube.com/watch?v=Xm2HFspE9Vs">The podcast series was later adapted into a TV miniseries of the same name.</a>`,
      url: "https://matematikazlocinu.cz/",
      img: "Pictures/Mat. Zločinů.jpg",
      big: 1.5
    },
    {
      name: "Das Kapital (EN)",
      text: "For: BBC Radio 3, 2017<br><br>Tracing the story of a peculiar red parrot, bought in a Prague toy store, back to where it came from, and ultimately, back to Marx.<br><br>With Martin Ožvold",
      url: "https://www.bbc.co.uk/programmes/b09h30v2",
      img: "Pictures/Parrot.jpg"
    },
    {
      name: "The House at the End of the Road (CZ)",
      text: "For: The Daily Denik Referendum, 2025<br><br>When prominent Czech architect Růžena Žertová became terminally ill in 2019, she had two final wishes: to die at home and to leave her beloved house to a foundation. But when a doctor became involved, neither wish was fulfilled. What happened?<br><br>With Gaby Khazalová and Martin Ožvold",
      url: "https://shows.acast.com/dm-v-zakouti",
      img: "Pictures/dum.jpeg",
      big: 1.5
    },
    {
      name: "A New Tense (EN)",
      text: "For: BBC Radio 4, 2022<br><br>A story about learning the language of loss.<br><br>With Martin Ožvold and Eleanor McDowall",
      url: "https://www.youtube.com/watch?v=VxlLEPjZPBU",
      img: "Pictures/volcano.jpg",
    },
    {
      name: "The Grand Plan (CZ)",
      text: "For: Czech Radio, 2015<br><br>Claire is 87 and lives in a house on an island in Lake Ontario, Canada. She is looking for love, but finding it isn’t easy. Then Brit enters the picture, and a grand plan begins to take shape.<br><br>With Eva Nachmilnerová and Jiří Slavičínský",
      url: "https://www.radioatlas.org/the-grand-plan/",
      img: "Pictures/Lake.jpeg",
      big: 1.1
    },    
    {
      name: "Lockdown in Stereo (CZ)",
      text: "Independent production, 2021<br><br>A short piece about living the personal consequences of media censorship.<br><br>With Adam Voneš",
      url: "https://www.youtube.com/watch?v=Z52Yhk_c0m8",
      img: "Pictures/bowl.jpeg",
    },
    {
      name: "Action Oil (CZ)",
      text: `For: The Daily Deník Referendum, 2021<br><br>Miroslav Trávníček was a successful agricultural commodities trader until he found himself behind bars, accused of masterminding a VAT carousel fraud. But was he really the man behind it? An investigation uncovers other suspects and a trail that leads all the way to Andrej Babiš, the billionaire businessman who became Czech prime minister.<br><br>With Zuzana Vlasatá, Adam Voneš and Ondřej Merta`,
      url: "https://denikreferendum.cz/akceolej",
      img: "Pictures/olej.jpg",
      big: 1.7
    },
    {
      name: "Heck (CZ)",
      text: `For: Czech Radio, 2019<br><br>A personal odyssey into the heart of a Czech Christmas tradition, recorded at home with two frightened children and one equally frightened parent.<br><br>With Martin Ožvold and Viola Ježková`,
      url: "https://vltava.rozhlas.cz/peklicko-oceneny-dokument-brit-jensen-o-mikulasske-tradici-7697995",
      img: "Pictures/čerti.jpg",
      big: 1.1
    },
    {
      name: "Ella from Prague (CZ)",
      text: "For Radio24syv, 2015<br><br>Shortly after World War II, young Danish woman Ella Thygesen marries Ladislav, a wealthy Czechoslovak. But when the communist coup turns their lives upside down, questions begin to emerge about Ladislav himself, and whether he is really who he claims to be.<br><br>With Rikke Houd and Kim G. Hansen",
      url: "https://www.youtube.com/watch?v=YRPnoGEmh3E",
      img: "Pictures/Ella from Prague.jpg",
      big: 1.4
    },
    {
      name: "The Cassette (CZ)",
      text: "For: Czech Radio, 2017<br><br>A Romanian radio presenter gets a rare chance: to meet Bill Drummond from The KLF, her teenage music idol, and tell him what his music meant to her. But meeting your hero is one thing. Understanding each other is another.<br><br>With Maria Balabas, Jiří Slavičínský and Roman Špála",
      url: "https://www.youtube.com/watch?v=Jc-EyjnmGi4",
      img: "https://i.ytimg.com/vi/Jc-EyjnmGi4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJF0dv_B8ZGh8z2NgpOsW57aESkQ",
      big: 1.3
    },
    {
      name: "There is a river flowing in the mountains (CZ)",
      text: "For: Czech Radio, 2018<br><br>A mission to make a radio programme in Myanmar about the devastating effects of flooding takes an unexpected turn when a mysterious white car begins appearing wherever the reporters go. The secret police seem to be watching. And suddenly, the story is also about the fear of being watched.<br><br>With Jiří Slavičínský, Viola Ježková and Roman Špála",
      url: "https://cestyzavodou.rozhlas.cz/",
      img: "Pictures/Myanmar.jpg",
      big: 1.5
    },
    {
      name: "It Looks Like Cotton (DK)",
      text: "For Radio24syv, 2016<br><br>Can you support the right to abortion and still talk about the pain that can follow one? Women struggling emotionally after an abortion are sometimes met with: “You could have chosen differently.” Brit Jensen and Rosa Marie Frang set out to challenge that silence, while remaining unequivocally pro-choice.<br><br>With Rosa Marie Frang and Kim G. Hansen",
      url: "https://www.youtube.com/watch?v=BCE-kUPg5gg",
      img: "Pictures/Cloud.jpeg",
      big: 1.5
    }, 
    {
      name: "Nothing To Brag About (CZ)",
      text: "For: Czech Radio and Iron Curtain Project, 2016<br><br>Before 1989, millions of Czechoslovaks were members of the Communist Party. Today, they seem to have vanished into thin air. Brit sets out to find a former party member willing to talk. How hard can it be? Quite hard, as it turns out.<br><br>With Román Špála and Eva Nachmilnerová",
      url: "",
      img: "Pictures/KSC knizka.jpeg",
      big: 1.3
    },
    {
      name: "The Substitute (DK)",
      text: "For Radio24syy, 2013<br><br>Brit takes a temporary job at an accounting firm just as the busy season approaches. She is replacing an accountant who has died. But what do you say when the phone rings and clients ask to speak to him? A story about human chaos intruding on a world built of refined orderliness.<br><br>With Jón Hallur Stefánsson and Kim G. Hansen",
      img: "Pictures/The Substitute.jpg",
      url: "https://www.youtube.com/watch?v=8r8JVdEpR3A",
      big: 1.45
    },    
    {
      name: "Yusra, Swim for Your Life (EN)",
      text: "For: Czech Radio, BBC 4 and BBC World Service, 2016<br><br>Yusra Mardini's story made news around the world - the teenage Syrian refugee who swam to survive, and then was selected to compete in the pool for the refugee team at the Olympic Games. Czech journalist Magdaléna Sodomková met Yusra in Serbia in August 2015 and followed her journey all the way to Rio.<br><br>With Magdalena Sodomková, Jan Trojan and Lam Duc Hien",
      url: "https://www.bbc.co.uk/programmes/p047g9tg",
      img: "Pictures/Immigrants.jpg",
      big: 1.65
    },
    {
      name: "In Ten Years (CZ)",
      text: "For: Czech Radio, 2020<br>Brit’s eight-year-old child believes the world will end in ten years. His certainty deeply unsettles her. Together, mother and son set out to discover where his fear of the apocalypse comes from, and what they can do about it. <br><br> With Radim Dlesk",
      url: "https://www.youtube.com/watch?v=iGgFyt3Duts",
      img: "Pictures/za deset let.jpeg" 
    },
    {
      name: "TOLD UNTOLD (CZ)",
      text: "For: Czech Radio and the dutch Ironcurtainproject.eu, 2016<br><br>When a regime changes over night, certain stories become homeless, new taboos form.<br><br>ToldUntold is a documentary project that invited Czechs to tell their own untold stories from pre-89 Czechoslovakia.<br><br>With Emma Kollau and the Ironcurtainproject collective",
      url: "https://www.ironcurtainproject.eu/en/stories/tolduntold/",
      img: "Pictures/Communist group.jpeg",
      big: 1.4
    },
        {
      name: "To Die and Yet Survive",
      text: "For: Czech Radio, 2019<br><br>Dan had been searching for decades when he finally tried smoking Bufo alvarius. As he told Brit about the experience, one thing stood out above all: Dan had experienced death, and yet survived. This is his account of what happened.",
      url: "https://wave.rozhlas.cz/umrit-a-prezit-poslechnete-si-dokument-o-zazitku-s-jednim-z-nejsilnejsich-8109483",
      img: "Pictures/todie.png",
      big: 1.1
    },
    {
      name: "Anatomy of a Moravian Village (CZ)",
      text: "For: Czech Radio, 2014<br><br>In the hills of eastern Czechia, Brit finds a new home after moving from Denmark. Curious about the village’s past, she discovers a forgotten grave in the nearby woods, the resting place of an unknown German soldier. But there are other things buried here too. Slowly, stories begin to resurface, exposing old wounds and injustices that have never been laid to rest.<br><br>With Eva Nachmilnerová and Roman Špála",
      url: "https://vltava.rozhlas.cz/anatomie-jedne-moravske-vesnice-5033229",
      img: "Pictures/František a máma.jpeg",
      big: 1.6
    },    
    {
      name: "I Have Been To Maidan Today (EN)",
      text: "For: ABC, 2014<br><br>Oleh Krykavskyy, a young lawyer based in Kiev, kept an audio diary during the events on the Maidan square in during the Winter and Spring of 2014.<br><br>With Claudia Tarranto",
      url: "https://www.abc.net.au/listen/programs/360-documentaries/i-have-been-to-maidan-today/5724852",
      img: "Pictures/Tough guys.jpg",
      big: 1.1
    },
    {
      name: "Back to Snoldelev (DK)",
      text: "For Radio24syv, 2013<br><br>A story about traveling abroad – and about returning home. Home to the farm where the ancestors have lived for at least five generations, and home to the windswept region where King Snold ruled over Denmark's first capital in ancient times.<br><br>With Rikke Houd and Kim G. Hansen",
      img: "Pictures/Snoldelev.jpeg",
      url: "https://www.youtube.com/watch?v=xgskQKKH46w",
      big: 1.5
    },    
    {
      name: "Reportage From an Ending (CZ)",
      text: "For: Czech Radio, 2017<br><br> A dream of a simple life close to nature is over.  The Danish guy in the circus caravan on the meadow is packing up his things to return to civilization. An ending unfolds. <br><br>With Tomas Pernický",
      url: "https://wave.rozhlas.cz/novy-audiodokument-je-o-tom-jak-muze-dansky-dobrodruh-najit-stesti-na-louce-v-5990611",
      img: "Pictures/Torben a Maringotka.jpg",
      big: 1.2
    },
    {
      name: "Tom and the Time Machine (DK)",
      text: "For: Radio24syv, 2013<br><br> Tom Sonntag has muscular dystrophy. Tom Sonntag has muscular dystrophy. Day by day, hour by hour, he is growing weaker. Soon, he will no longer be able to lift his arms and play his beloved Steinway grand piano. But now, he has begun building a Time Machine that will take him back to music.<br><br>With Kim G. Hansen",
      img: "Pictures/Piano.jpg",
      url: "https://www.youtube.com/watch?v=vz9skagIHkk",
      big: 1.5
    },
    {
      name: "Leave No One Behind (DK)",
      text: "For: The Danish Institute for the Blind, 2024<br><br>Svetlana, Yamin and Ruta have experienced invasion, coup and war. But these three women have worse odds than many others, because they all live with a sight impairment.",
      url: "https://shows.acast.com/639c2162509aef001197329a/65251790a416f1001166ac6e",
      img: "Pictures/verdenssyn.jpg"
    },   
    {
      name: "One day up, the next down (CZ)",
      text: "For: Czech Radio, 2011<br><br>On the streets of Prague and Brno radio reporter Brit Jensen meets eight vendors of the homeless magazine, Nový Prostor. <br><br>With Roman Špála",
      url: "",
      img: "Pictures/Homeless.jpg"
    },
    {
      name: "Alexander and Lizethe (DK)",
      text: "For: Radio24syv, 2014<br><br>After high school, a young woman comes out as a lesbian. At 27, she transitions and becomes Alexander. Now, he is alone. Seven years later, Alexander meets Lizethe from Colombia, and a multilayered love story begins to unfold.<br><br>With Kim G. Hansen",
      img: "Pictures/LGBT.jpg",
      url: "https://www.youtube.com/watch?v=L2ewryWdIH8",
      big: 1.4
    },    
    {
      name: "Everything in Life Has Its Price (DK)",
      text: "For Radio24syv, 2014<br><br>A portrait of Dorthe Duus Hansen who has lived a long and tough life with prostitution in the streets of Copenhagen.<br><br> With Kim G. Hansen",
      img: "Pictures/Street.jpeg",
      url: "https://www.youtube.com/watch?v=Ahx3xuV0pOQ",
      big: 1.1
    },
    {
      name: "Radio Dogs",
      text: "Long time friends, sound nerds and colleagues Jiří and Brit listen to and share audio documentaries.<br><br>With Jiří Slavičínský",
      url: "https://radiodogs.cz/cs",
      img: "Pictures/radio dogs.png"
    },
    {
      name: "2049 (DK)",
      text: "For: Third Ear, 2024<br><br> A podcast series about climate change and future travel. Futurist and host Denis Rivin travels to the year 2049 together with 25 people – scientists, wise minds, activists – to see how the climate solutions they were working on back in 2024, have turned out.",
      url: "https://thirdear.studio/da/pods/2049",
      img: "Pictures/2049.jpg",
      big: 1.1
    },
    {
      name: "Who Cares? (CZ)",
      text: "For: Charles University, 2024<br><br> Stories about and by people, who has lived institutional lives in Czechoslovakia/Czechia - and survived. 8 stories that want to challenge established ideas of otherness, vulnerability and care.",
      url: "https://kohobytozajimalo.transistor.fm/",
      img: "https://img.transistor.fm/-uGm_-fxYfywYJQfDi-p23z-Tdr5kkqli9tDICCogIs/rs:fit:600:288:1/q:60/aHR0cHM6Ly9pbWct/dXBsb2FkLXByb2R1/Y3Rpb24udHJhbnNp/c3Rvci5mbS9sb2dv/cy9zaXRlLzE1MTQ1/LzBfVVZPRF9FUEla/T0RBLnBuZw.webp",
    },
];


const dramaturgyCardsContent = [
    {
      name: "What No One Sees, 2025 (DK)",
      text: "A monthly podcast that explores, debates, and documents life with visual impairment. I am helping out as a producer and editor.",
      url: "https://blind.dk/podcast/alt-det-som-ingen-ser/",
      img: "Pictures/sees.jpg"
    },
    {
      name: "Ruths Hus, 2024 (DK)",
      text: "A documentary podcasts series by Krister Moltzen about the Danish Christian sect “Faderhuset.”<br><br>I researched and recorded the Czech strand of the story.",
      url: "https://thirdear.studio/da/pods/ruth",
      img: "Pictures/ruth.jpg"
    },
    {
      name: "Rosas Reality Radio (DK)",
      text: "A Danish audio documentary and sound piece about artists working conditions.",
      url: "https://www.rosasreality.com/rosas-reality-radio/",
      img: "https://www.rosasreality.com/wp-content/uploads/2024/02/RRR_cover_epi_4.png",
    },
    {
      name: "DokuVlna (CZ)",
      text: "Documentaries at Czech Radio's youth channel.",
      url: "https://wave.rozhlas.cz/dokuvlna-5179683",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmqQyovtj2Qc-gVP0dsYx6Eu2DcNEndY3lA&s",
    },
    {
      name: "Hate Free (CZ)",
      text: "A Czech documentary podcast about hate crime, minority rights and taboo breaking.",
      url: "https://www.hatefree.cz/audio/exteriery",
      img: "https://www.hatefree.cz/images-cache/front/design/no-image/image_variants/png/no-image-w600.png",
    },
    {
      name: "The Eagle Karina Has Died (CZ)",
      text: "An ecological true crime series about poison in Czech forrests.",
      url: "https://audionaut.cz/podcasty/orlicekarinazemrela/",
      img: "Pictures/orlicekarinazemrela.jpg",
    },
    {
      name: "GenZ (CZ)",
      text: "Stand-alone documentaries by journalism students from Masaryk University in Brno, Czechia.",
      url: "https://prixbohemia.czech.radio/genz-9078767",
      img: "https://prixbohemia.czech.radio/sites/default/files/styles/cro_16x9_tablet/public/images/c79f68ce67f47662765e1b4ab95326cc.jpg?itok=EBe8m1Fm&timestamp=1695484848",
    },
    {
      name: "Zhasni! Turn Out the Lights (CZ)",
      text: "The first ever Czech Radio podcast series.",
      url: "https://www.mujrozhlas.cz/zhasni",
      img: "https://www.mujrozhlas.cz/sites/default/files/styles/teaser/public/rapi/9dc61ddd81d7b9a9c754149f1498ec2e.jpg?h=9e16a70f&itok=7xtsIKfz",
    },
    {
      name: "Let it be (CZ)",
      text: "Ivan Kačur and Jiří Slavičínský made a beautiful sound diary about life in ones specific body. I helped out as a dramaturge.",
      url: "https://audionaut.cz/podcasty/nechat-to-bejt/",
      img: "Pictures/nechat.jpg"
    },
    {
      name: "Dokumomenty, 2020 (CZ)", 
      text: "I was the commissioning editor and dramaturge for this cycle of short-form documentary of Czech Radio’s culture channel.",
      url: "https://www.mujrozhlas.cz/dokumoment",
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
                    <a href="${card.url}" target="_blank" class="more-link"/>listen ...</a>
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

                    ${card.url ? `<a href="${card.url}" target="_blank" class="more-link"/>listen ...</a>` : ""}

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

const audioHeading = document.querySelector(".audio-heading");
const playPauseAudio = document.querySelector(".play-pause-audio");
const cardImgs = document.querySelectorAll(".card-img");  
const hiddenCards = document.querySelectorAll(".card-hidden");
const closeBtn = document.querySelector(".close-btn");
const lineArea = document.querySelector(".line-area");
const audioControls = document.querySelector(".audio-controls");
const audioArray = document.querySelectorAll("audio");
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

// Play pause:

const pauseAll = () => { // pause all audio:
  for (const audio of audioArray) {
    if (!audio.paused) {
      audio.pause();
      document.querySelectorAll(".play-pause").forEach((button) => {
        button.innerHTML = "▶";
      });
    }
  }
}

playPauseAudio.addEventListener("click", () => { //  if the audio control play-pause button is clicked:
   if (playPauseAudio.innerHTML === "❚❚") {
    pauseAll();
    playPauseAudio.innerHTML = "▶";
    closeBtn.style.transform = "scaleX(1)";
   } else {
    const value = audioHeading.innerHTML;
    const index = documentaryCardsContent.findIndex(obj => obj["name"] === value);
    document.querySelector(`.audio-${index}`).play();
    playPauseAudio.innerHTML = "❚❚";
    document.querySelector(`#play-pause-${index}`).innerHTML = "❚❚";
    closeBtn.style.transform = "scaleX(0)";
   }
});

const getTime = time => { // convert seconds into readable format:
  const mins = time / 60;
  const seconds = time % 60;
  return String(Math.floor(mins)) + ":" + String(Math.floor(seconds)).padStart(2, "0");
}

document.querySelectorAll(".play-pause").forEach((button) => {
    button.addEventListener("click", () => {
        const index = button.id.replaceAll("play-pause-", "")
        const audio = document.querySelector(`.audio-${index}`);
        if (audio.paused) {
          clearInterval(updateAudioControl); // clear the interval for rendering progress dot and currentTime.
          audioControls.style.transform = "scaleY(1)";
          closeBtn.style.transform = "scaleX(0)";
          pauseAll();
          audio.play(); 
          button.innerHTML = "❚❚";
          // set all the information about the audio: 
          audioHeading.innerHTML = `${documentaryCardsContent[index].name}`;
          document.querySelector(".audio-img").src = `${documentaryCardsContent[index].img}`;
          playPauseAudio.innerHTML = "❚❚";
          document.querySelector(".duration").innerHTML = getTime(audio.duration);

          // repeat every 0.5 seconds:
          updateAudioControl = setInterval(() => {
            
            if (document.querySelector(".line-area circle")) {document.querySelector(".line-area circle").remove()} // delete previous dot if this isn't the first one.
            const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // create dot.
            dot.setAttribute("cx", audio.currentTime / audio.duration * 200 + 7); // set the X position of the dot by the audio.currentTime.
            dot.setAttribute("cy", 40); // set the Y position of the dot to 40 (same position as the line).
            dot.setAttribute("r", 7); // set the radius of the dot.
            dot.setAttribute("fill", "black");
            lineArea.appendChild(dot); // append the dot to the canvas.
            document.querySelector(".current-time").innerHTML = getTime(audio.currentTime); // render currentTime.
            // if the audio is finished set the button icon to replay:
            if (audio.currentTime === audio.duration) {
              button.innerHTML = "↺"; playPauseAudio.innerHTML = "↺"
            } else if (isNaN(audio.duration)) {
              audio.pause(); // pause the audio.
              button.innerHTML = "▶"; // set the button icon of the card.
              playPauseAudio.innerHTML = "▶"; // set the button icon of the audio controls.
              audioControls.style.transform = "scaleY(0)"; // make audio controls dissappear.
              clearInterval(updateAudioControl); // clear the interval for rendering progress dot and currentTime.
              setTimeout(() => {alert("Episode temporarily unavailable.");}, 500)
            }

          }, 200);

          // if clicked on the line change currentTime:
          lineArea.addEventListener("click", (e) => {
            const rectangle = lineArea.getBoundingClientRect(); // get the width and height of the canvas.
            const mouseX = e.clientX - rectangle.left; // get the number of pixels clicked from the border of the canvas.
            const mouseY = e.clientY - rectangle.top; // get the number of pixels clicked from the border of the canvas.

            const isNearLine = Math.abs(mouseY - 40) <= 5;  // if the mouse is 5 pixels or less from the line.

            if (isNearLine) {
              audio.currentTime = ((mouseX - 8) / 200).toFixed(3) * audio.duration; // calculates and sets currentTime.
            }
          });

        } else { // if the user pauses the audio:
          audio.pause(); // pause the audio.
          button.innerHTML = "▶"; // set the button icon of the card.
          playPauseAudio.innerHTML = "▶"; // set the button icon of the audio controls.
          closeBtn.style.transform = "scaleX(1)"; // make close audio controls button appear.
        }
    });
});

// +/- 15 seconds buttons:

const opacityEffect = (button) => { // set and unset opacity to 0.4 in 0.6 seconds:
  document.querySelector(`${button}`).style.opacity = "0.4";
  setTimeout(() => {
    document.querySelector(`${button}`).style.opacity = "1";
  }, 600)
}

document.querySelector(".plus15").addEventListener("click", () => {
  opacityEffect(".plus15");
  for (const audio of audioArray) {
    if (audioHeading.innerHTML === documentaryCardsContent[Number(audio.classList[0].replace("audio-", ""))].name) { // if the names on the audio control and on the card match:
      audio.currentTime += 15;
    }
  }
});

document.querySelector(".minus15").addEventListener("click", () => {
  opacityEffect(".minus15");
  for (const audio of audioArray) {
    if (audioHeading.innerHTML === documentaryCardsContent[Number(audio.classList[0].replace("audio-", ""))].name) { // if the names on the audio control and on the card match:
      audio.currentTime -= 15;
    }
  }
});

// close button:
closeBtn.addEventListener("click", () => {
  audioControls.style.transform = "scaleY(0)";
});
``
