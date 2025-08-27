const documentaryCardsContent = [
    {
      name: "Leave No One Behind (DK)",
      text: "For: The Danish Institute for the Blind<br><br>Svetlana, Yamin and Ruta have experienced invasion, coup and war. But these three women have worse odds than many others, because they all have a sight impairment.",
      url: "https://shows.acast.com/639c2162509aef001197329a/65251790a416f1001166ac6e",
      img: "Pictures/verdenssyn.jpg"
    },
    {
      name: "Radio Dogs",
      text: "Long time friends, sound nerds and colleagues Jiří and Brit listen to and share audio documentaries",
      url: "https://radiodogs.cz/cs",
      img: "Pictures/radio dogs.png"
    },
    {
      name: "The House at the End of the Road (CZ)",
      text: "For: The Daily Denik Referendum, 2025<br><br> When Růžena Žertová - a prominent Czech architect - fell terminally ill in 2019, she had two last wishes: To die at home and to bequeath her beloved house to a foundation. But a certain doctor became involved and Neither came true. Investigative journalist Gaby Khazalová unravels what happened.",
      url: "https://shows.acast.com/dm-v-zakouti",
      img: "Pictures/dum.jpeg",
      big: 1.5
    },
    {
      name: "2049 (DK)",
      text: "For: Third Ear, 2024<br><br> A podcast series about climate change and future travel. Futurist and host Denis Rivin travels to the year 2049 together with 25 people – scientists, wise minds, activists – to see how the climate solutions they were working on back in 2024, have turned out.",
      url: "https://thirdear.studio/da/pods/2049",
      img: "https://thirdear.studio/_ipx/w_1920,q_75/https%3A%2F%2Fa.storyblok.com%2Ff%2F185588%2F2048x2048%2Fc104973789%2F2049_3_final_2048x2048px.jpg%2Fm%2F?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F185588%2F2048x2048%2Fc104973789%2F2049_3_final_2048x2048px.jpg%2Fm%2F&w=1920&q=75",
    },
    {
      name: "Hotel Hate (CZ)",
      text: "For: Hate Free, 2023<br><br> A story about lesbian cows, rusty cunts and fags with crooked teeth. An exploration of the current state of mysogyny and homofobia in Czechia.",
      url: "https://www.hatefree.cz/audio/exteriery/hotel-hate-audiodokument-o-nenavisti-jak-jsme-ji-zazily",
      img: "https://d2a9bkgsuxmqe2.cloudfront.net/staging/podcast_uploaded_episode400/17514718/17514718-1687697716252-89e52edfe6bd5.jpg"
    },
    {
      name: "Who Cares? (CZ)",
      text: "For: Charles University, 2022<br><br> Stories about and by people, who has lived institutional lives in Czechoslovakia/Czechia - and survived. 8 stories that want to challenge established ideas of otherness, vulnerability and care.",
      url: "https://kohobytozajimalo.transistor.fm/",
      img: "https://img.transistor.fm/-uGm_-fxYfywYJQfDi-p23z-Tdr5kkqli9tDICCogIs/rs:fit:600:288:1/q:60/aHR0cHM6Ly9pbWct/dXBsb2FkLXByb2R1/Y3Rpb24udHJhbnNp/c3Rvci5mbS9sb2dv/cy9zaXRlLzE1MTQ1/LzBfVVZPRF9FUEla/T0RBLnBuZw.webp",
    },
    {
      name: "A New Tense (EN)",
      text: "For: BBC Radio 4, 2022<br><br>A story about learning the language of loss.<br>Sound: Martin Ožvold<br>Editor: Eleanor McDowall",
      url: "https://www.bbc.co.uk/sounds/play/m001c6gn",
      img: "Pictures/volcano.jpg",
    },
    {
      name: "Action Oil (CZ)",
      text: `For: The Daily Deník Referendum, 2021<br><br> An investigative series about Miroslav Trávníček who was a succesful trader with agricultural commodities, until he wound up behind bars for being a VAT carousel master mind. But he isn't. It turns out the police files contain the real culprits and there are threads leading from Mr. Trávníček’s case back to the oligarch prime minister, Andrej Babiš.`,
      url: "https://denikreferendum.cz/akceolej",
      img: "Pictures/olej.jpg",
      big: 1.5
    },
    {
      name: "Lockdown in Stereo (CZ)",
      text: "Independent production, 2021<br><br> A short piece about the personal consequences of media censorship.<br> Mix: Adam Voneš<br><br>/Winner of HearSay Festival 2021: Create Gold Award, Create GanBerla Award and Create Fearless Award/ Shortlisted at Third Coast Festival 2021",
      url: "https://www.youtube.com/watch?v=Z52Yhk_c0m8",
      img: "Pictures/bowl.jpeg",
      big: 1.3
    },
    {
      name: "Anatomy of Fear (CZ)",
      text: `For: Audionaut, 2020<br><br>“I fear that which I cannot see.” Anatomy of Fear is an in-depth exploration of one emotion captured in five true stories. A series of intimate micro-horrors in sound.`,
      url: "https://audionaut.cz/podcasty/anatomie-strachu/",
      img: "Pictures/strach.png"
    },
    {
      name: "In Ten Years (CZ)",
      text: "For: Czech Radio, 2020<br>My kid is eight and believes that the world will end in 10 years. This belief deeply disturbs his mother. Together they set out to figure out where the fear of the apocalypse stems from and what to do about it.",
      url: "",
      img: "Pictures/za deset let.jpeg" 
    },
    {
      name: "Peklíčko (CZ)",
      text: `For: Czech Radio, 2019<br><br>A radio documentary and a personal odyssey to find the meaning behind the Czech Saint Nicholas tradition as well as a way to deal with it. Recorded in a home with two scared children and one scared parent.`,
      url: "https://vltava.rozhlas.cz/peklicko-oceneny-dokument-brit-jensen-o-mikulasske-tradici-7697995",
      img: "Pictures/čerti.jpg",
    },
    {
      name: "There is a river flowing in the mountains (CZ)",
      text: "For: Czech Radio, 2018<br><br>A mission to record a radio programme in Myanmar about how people suffer from flooding becomes hijacked by a white car appearing and reappearing. Apparently, the secret police has gotten involved, and so has the fear of them.",
      url: "https://cestyzavodou.rozhlas.cz/",
      img: "Pictures/Myanmar.jpg",
      big: 1.2
    },
    {
      name: "Mathematics of Crime (CZ)",
      text: "This five-part non-fiction detective story takes place in courtrooms and prison cells. And continues until this day.<br><br>By investigative journalist Magdalena Sodomková and documentary maker Brit Jensen.<br><br>/The series was originally produced in 2018 for Czech public radio, but it was censored. The authors published it independently.",
      url: "https://matematikazlocinu.cz/",
      img: "Pictures/Mat. Zločinů.jpg",
      big: 1.4
    },
    {
      name: "Das Kapital (EN)",
      text: "For: BBC Radio 3, 2017<br><br> The story of a peculiar, red parrot bought in a toy store in Prague.<br><br>Sound design: Martin Ožvold",
      url: "https://www.bbc.co.uk/programmes/b09h30v2",
      img: "Pictures/Parrot.jpg"
    },
    {
      name: "Reportage From an Ending (CZ)",
      text: "For: Czech Radio, 2017<br><br> A dream of a simple life close to nature is over. The man in the circus caravan on the meadow is packing up his things up to return to civilisation. An ending unfolds.",
      url: "https://wave.rozhlas.cz/novy-audiodokument-je-o-tom-jak-muze-dansky-dobrodruh-najit-stesti-na-louce-v-5990611",
      img: "Pictures/Torben a Maringotka.jpg",
    },
    {
      name: "The Cassette (CZ)",
      text: "For: Czech Radio, 2017<br><br>A presenter on Romanian radio gets a chance only few gets - to tell her teenage music idol, what his music meant to her. But more than a few things come between mutual understanding<br><br>In cooperation with Maria Balabas and Jiří Slavičinský, mix: Roman Špála",
      url: "https://www.youtube.com/watch?v=Jc-EyjnmGi4",
      img: "https://i.ytimg.com/vi/Jc-EyjnmGi4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJF0dv_B8ZGh8z2NgpOsW57aESkQ",
      big: 1.3
    },
    {
      name: "Yusra, Swim for Your Life (EN)",
      text: "For: Czech Radio, BBC 4 and BBC World Service, 2016<br><br>Yusra Mardini's story made news around the world - the teenage Syrian refugee who swam to survive, and then was selected to compete in the pool for the refugee team at the Olympic Games. Czech journalist Magdaléna Sodomková met Yusra in Serbia in august 2015 and followed her journey all the way to Rio.<br><br>Authors of the original Czech production: Magdaléna Sodomková and Brit Jensen. Photos: Lâm Duc Hiên BBC producers: Clare Walker and Tom Alban.",
      url: "https://www.bbc.co.uk/programmes/p047g9tg",
      img: "Pictures/Immigrants.jpg",
      big: 2
    },
    {
      name: "TOLD UNTOLD (CZ)",
      text: "For: Czech Radio and the dutch Ironcurtainproject.eu, 2016<br><br> When a regime changes over night, certain stories become homeless. New taboos form.<br><br>ToldUntold was a documentary project inviting Czechs to tell their own untold stories from pre-89 Czechoslovakia.",
      url: "https://www.ironcurtainproject.eu/en/stories/tolduntold/",
      img: "Pictures/Communist group.jpeg",
      big: 1.2
    },
    {
      name: "The Grand Plan (CZ)",
      text: "For: Czech Radio, 2015<br><br>Claire lives in her house on an island in Canada. She’s 87 years old and searching for love. But there is one problem: “The men are either sick or dead.” Claire writes a column in the newspaper about her hopeless search for a relationship. By chance, Brit comes across it and a grand plan starts taking shape, about how Claire may finally find love.",
      url: "https://www.radioatlas.org/the-grand-plan/",
      img: "Pictures/Lake.jpeg",
      big: 1.4
    },
    {
      name: "It Looks Like Cotton (DK)",
      text: "For Radio24syv, 2016<br><br> Abortion is taboo. Every year there are more than a thousand women who have a prolonged mental breakdown after an induced abortion. Often the reaction is \"You could just have chosen differently.\" Brit Jensen and Rosa Marie Frang wants to change that... even though they are 100% in favor of free abortion!",
      img: "Pictures/Cloud.jpeg",
      audio: "https://www.dropbox.com/scl/fi/irul6ev6agax5j0g4tf0k/It-looks-like-cotton.wav?rlkey=hn0m3rkeu4dhdf0zyhuhslpd7&st=j3x3c87a&raw=1",
      big: 1.4
    },
    {
      name: "Nothing To Brag About (CZ)",
      text: "For: Czech Radio and Iron Curtain Project, 2016<br><br>In Czechoslovakia before 1989 there used to be milions of communist party members. But today they have seemingly vanished into thin air. Brit wants to interview a former party member – how hard can it be? Quite hard, as it turns out.<br><br> Sound: Román Špála, dramaturgy: Eva Nachmilnerová.",
      url: "",
      img: "Pictures/KSC knizka.jpeg",
      big: 1.5
    },
      {
      name: "Ella from Prague (CZ)",
      text: "For Radio24syv, 2015<br><br>Ella Thygesen, a young Danish woman, marries the wealthy Czechoslovak Ladislav shortly after the end of WW II. But soon the communist coup happens. Everything changes at an instant - and Ladislav may not be telling the whole truth.",
      url: "https://www.youtube.com/watch?v=YRPnoGEmh3E",
      img: "Pictures/Ella from Prague.jpg",
    },
    {
      name: "Everything in Life Has Its Price (DK)",
      text: "For Radio24syv, 2014<br><br> A radio portrait of Dorthe Duus Hansen who has lived a hard street life for many years.<br><br>Edit and music: Kim G. Hansen.",
      img: "Pictures/Street.jpeg",
      audio: "https://www.dropbox.com/scl/fi/rngcrpof7r5odejneq76e/Everything-in-life.mp3?rlkey=i0j0wa2ttnks01amrobaaf42e&st=0hrwwy37&raw=1",
      big: 1.1
    },
    {
      name: "Alexander and Lizethe (DK)",
      text: "For: Radio24syv, 2014<br><br>A young woman comes out as a lesbian after high school. But at the age of 27, she undergoes gender reassignment surgery and now is Alexander and alone. Seven years later Alexander meets Lizethe from Colombia and a complicated love story begins to unfold. Edit and music: Kim G. Hansen.",
      img: "Pictures/LGBT.jpg",
      audio: "https://www.dropbox.com/scl/fi/f9eqvac7xne1nvlvlepsa/Alexander-og-Lizethe.mp3?rlkey=a2k3xgsotes77fz2ww275bpua&st=zqgpef7x&raw=1",
      big: 1.4
    },
    {
      name: "Anatomy of a Moravian Village (CZ)",
      text: "For: Czech Radio, 2014<br><br> In the Eastern part of Czechia there is a small village nestled among hills. Brit moves here just as the harvest festivities are beginning to unfold. She soon begins investigating the past of her new village. In the nearby woods there is a forgotten grave. But the body of an unknown German soldier is not the only thing that has been buried in secret. Stories from the past start reappearing and reveal old injustices that remain unhealed.",
      url: "https://vltava.rozhlas.cz/anatomie-jedne-moravske-vesnice-5033229",
      img: "Pictures/František a máma.jpeg",
      big: 1.6
    },
    {
      name: "I Have Been To Maidan Today (EN)",
      text: "For: ABC, 2014<br><br>Oleh Krykavskyy is a young lawyer, who kept an audio diary during the events on the Maidan square in Kiev this year. We meet his friends: Inna who prepared food for the freezing protesters in Kiev, Syomkin who built barricades and mixed molotov cocktails as well as Alex from Eastern Ukraine who desperately wants order restored, and Oleh’s uncle, a Police Colonel, who in a decisive moment chose to protect the protesters.",
      url: "https://www.abc.net.au/listen/programs/360-documentaries/i-have-been-to-maidan-today/5724852",
      img: "Pictures/Tough guys.jpg",
      big: 1.65
    },
    {
      name: "The Substitute (DK)",
      text: "For Radio24syy, 2013<br><br>Brit is hired as a temporary worker at an accounting firm. It is spring and the busy season is approaching. She is replacing an accountant who is no longer among the living. But what should Brit really say when the phone rings and clients ask for the man she is substituting for? How does one deal with human chaos in this world of refined orderliness?",
      img: "Pictures/The Substitute.jpg",
      audio: "https://www.dropbox.com/scl/fi/zsqi35gk1jsyvu5o213md/sub.mp3?rlkey=rni6uy9j9wh4ovo8ldqlhasta&st=eaow5tos&raw=1",
      big: 1.5
    },
    {
      name: "Back to Snoldelev (DK)",
      text: "For Radio24syv, 2013<br><br>A story about traveling abroad – and about returning home. Home to the farm where the ancestors have lived for at least five generations, and home to the windswept region where King Snold ruled over Denmark's first capital in ancient times.<br><br>Klip: Rikke Houd. Musik: Hypermagic.",
      img: "Pictures/Snoldelev.jpeg",
      audio: "https://www.dropbox.com/scl/fi/5nxgpuwud5c065tg0bdkx/Back-to-Snoldelev.mp3?rlkey=3l1hbo6t4vdc38fpff3jhxtlh&st=1u0w70u2&raw=1",
      big: 1.5
    },
    {
      name: "Tom and the Time Machine (DK)",
      text: "For: Radio24syv, 2013<br><br> Tom Sonntag has muscular dystrophy. Day by day, hour by hour he is getting weaker. Soon he will no longer be able to lift his arms and play his beloved Steinway grand piano. But now he is building a time machine that will bring him back to music... Edit: Kim G. Hansen.",
      img: "Pictures/Piano.jpg",
      audio: "https://www.dropbox.com/scl/fi/avc5jek6wqzmno7533rt2/Tom.wav?rlkey=zk0q095mxbkw9xwjz5e8ddxup&st=fdj5zsae&raw=1",
      big: 1.5
    },
    {
      name: "One day up, the next down (CZ)",
      text: "For: Czech Radio, 2011<br><br>On the streets of Prague and Brno radio reporter Brit Jensen meets eight vendors of the homeless magazine, Nový Prostor. <br><br>Sound: Roman Špála.",
      url: "",
      img: "Pictures/Homeless.jpg"
    }
];


const dramaturgyCardsContent = [
    {
      name: "Rosas Reality Radio (DK)",
      text: "A Danish audio documentary and sound piece about artists working conditions.",
      url: "https://www.rosasreality.com/rosas-reality-radio/",
      img: "https://www.rosasreality.com/wp-content/uploads/2024/02/RRR_cover_epi_4.png",
    },
    {
      name: "Hate Free (CZ)",
      text: "A Czech documentary podcast about hate crime, minority rights and taboo breaking.",
      url: "https://www.hatefree.cz/audio/exteriery",
      img: "https://www.hatefree.cz/images-cache/front/design/no-image/image_variants/png/no-image-w600.png",
    },
    {
      name: "DokuVlna (CZ)",
      text: "Documentaries at Czech Radio's youth channel.",
      url: "https://wave.rozhlas.cz/dokuvlna-5179683",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmqQyovtj2Qc-gVP0dsYx6Eu2DcNEndY3lA&s",
    },
    {
      name: "The Eagle Karina Has Died (CZ)",
      text: "An ecological true crime series about poison in Czech forrests.",
      url: "https://audionaut.cz/podcasty/orlicekarinazemrela/",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6i10e6DcEjNiSleaHcHy6Ln6PcgDZVqtBw&s",
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
    },
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
                    <p class="card-text">${card.text}</p>
                    <a href="${card.url}" target="_blank" class="more-link"/>listen ...</a>
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

                      ${card.audio ? `<audio class="audio-${index}">
                        <source src="${card.audio}" type="audio/mpeg">
                          </audio>
                        <button class="play-pause" id="play-pause-${index}">▶</button>
                        `
                        : ""}
                    <p class="card-text">${card.text}</p>
                    ${card.url ? `<a href="${card.url}" target="_blank" class="more-link"/>listen ...</a>` : ""}
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
        cardImgs[index].style.filter = "blur(0)";
        cardImgs[index].style.transform = 'scaleY(1)';
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
          cardImgs[index].style.filter = "blur(10px) saturate(5%)";
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



