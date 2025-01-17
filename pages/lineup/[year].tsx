import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { IBand } from '../../types';
import { useRouter } from 'next/router';

export async function getStaticProps({ params }: any) {
  const bands: IBand[] = [
    {
      name: "The Newgate's Knocker",
      description:
        'Envie de revivre l’âge d’or du garage rock ? Sors tes Doc Martens vintage et ta plus belle chemise à carreaux pour The Newgate’s Knocker, un savant mélange de riffs bluesy et de grooves hypnotiques. C’est authentique, brut, vivant. Bref c’est normal, ça sort d’un garage ! Il suffit d’écouter leur dernier single High-Speed Motorway pour être sous le charme. Tu ne pourras pas t’empêcher de taper du pied. C’est promis !',
      url: 'https://www.youtube.com/embed/H5pBe7Ujhc8',
      style: 'Rock',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/H5pBe7Ujhc8',
      image: '/bands/2021/1_the_newgates_knocker.png',
      year: 2021,
    },
    {
      name: 'Crux Sledge',
      description:
        'Attention OVNI en vue! L’équipage du vaisseau Crux Sledge te feront planer aux confins de l’espace. Avec un style de composition qui leur est propre, leur musique déborde d’une douceur des 60s qui rappelle une époque rebelle et somptueuse. Depuis le début de leur aventure en 2017, ce groupe rock prometteur a déjà deux albums en poche avec – surprise – un troisième en chemin. C’est donc dans cette ardeur psychédélique voire onirique qu’ils se produiront en cette deuxième édition du MoonAlps Festival. Prépare-toi donc pour explorer la galaxie avec eux, et attache ta ceinture, car ça risque de secouer!',
      url: 'https://crux-sledge.com',
      style: 'Rock',
      location: 'Vaud',
      video: 'https://youtube.com/embed/yWPWVDQvJYk',
      image: '/bands/2021/2_crux_sledge.jpg',
      year: 2021,
    },
    {
      name: 'Etienne Machine',
      description:
        'L’identité d’Etienne Machine repose sur la dualité : humain ou machine ? Guitare ou synthétiseur ? Art-rock ou electronica ? Les ingénieur·e·s de ce groupe nous ont concocté un mélange entre les genres : quand ce n’est pas gras et saturé, c’est un beat trip-hopien qui vient accompagner une voix douce et mélancolique. La machine n’est pas prête de s’arrêter là car après trois EPs, le collectif a abouti un projet d’une plus grande ampleur : Off & Off, un album hybride et ambitieux. Alors pourquoi choisir entre guitare électrique et boîte à rythmes quand on peut simplement passer un bon moment en compagnie d’Etienne Machine ?',
      url: 'https://etiennemachine.bandcamp.com/',
      style: '',
      location: '',
      video: 'https://www.youtube.com/embed/BfkSjIA-zo0',
      image: '/bands/2021/3_etienne_machine.png',
      year: 2021,
    },
    {
      name: 'Stockholm Syndrome',
      description:
        'On a l’immense plaisir de t’introduire aux grands gagnants de notre tremplin pour jeunes groupes: Stockholm Syndrome! Ils·elles sont âgé·e·s de 16 à 18 ans, mais l’expérience musicale qu’ils·elles proposent regorge déjà de maturité et de passion. Tout droit venu·e·s de La Neuveville (BE), ce quatuor te décoiffera avec ses compositions originales de la vague rock alternatif inspirées de Radiohead ou encore Muse. Attention à ne pas tomber sous le charme des ravisseur·euse·s!',
      url: 'https://stockholm-syndrome.com',
      style: 'Rock',
      location: 'Berne',
      video: '',
      image: '/bands/2021/4_stockholm_syndrome.png',
      year: 2021,
    },
    {
      name: 'Ramin & Reda',
      description:
        'Un mix entre sonorités du monde et musique électronique ? Bien connus de la scène underground genevoise, Ramin & Reda explorent des influences orientales, allant de Rabat à Téhéran, en y alliant disco, rock, nervous wave, indie ou encore new beats. Leur but : te faire danser d’une manière libre et unificatrice. Tous ces ingrédients sont les composantes de l’univers multiculturel à travers lequel ces deux jeunes DJ talentueux s’expriment et te feront savourer ta fin de soirée !',
      url: 'https://soundcloud.com/raminreda',
      style: 'Electro',
      location: 'Genève',
      video: 'https://www.youtube.com/embed/3UaxkvHLvr4',
      image: '/bands/2021/5_ramin_reda.png',
      year: 2021,
    },
    {
      name: 'Marie Jay',
      description:
        'Marie Jay est une chanteuse, auteure-compositrice-interprète francophone. Oscillant entre french pop catchy et variété nostalgique, cette lausannoise âgée de 20 ans nous embarque dans des narrations mélodieuses avec des tonalités tantôt vulnérables, tantôt aigre douce. La sincérité et la fraîcheur de ses mots viennent se mêler au doux son de sa guitare. Elle raconte de manière sensible, à travers sa voix et ses yeux communicatifs, les émerveillements et frustrations du quotidien, auxquels l’on peut facilement s’identifier. Parfois accompagnée d’un band, avec qui elle a déjà eu la chance de se produire devant un large public, c’est en solo qu’elle te fera profiter d’un moment de douceur et d’introspection en ouverture du MoonAlps Festival !',
      url: 'https://marie-jay.com/home',
      style: 'Pop',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/Z8ybcaLhbjQ',
      image: '/bands/2022/1_marie_jay.jpeg',
      year: 2022,
    },
    {
      name: 'Unholy Pagoda',
      description:
        "Formé en 2013, Unholy Pagoda c’est la voix fougueuse du chanteur-bassiste Léopold Tschanz, la guitare sauvage de Marcos Viegas et la frappe bouillante de Liam Liguori. Avec leurs influences diverses, de Nirvana à Oasis, de Pantera à Guns'n'Roses, ils ont su créer une alchimie bien à eux aussi puissante que réjouissante. Une énergie évolutive, alliée à des compositions originales, font de chaque apparition d’Unholy Pagoda un moment envoûtant et déterminant. Nul doute qu’ils sauront te téléporter sur un météore aux décibels peu farouches lors de leur concert au MoonAlps Festival !",
      url: 'https://www.instagram.com/unholypagoda/?hl=en',
      style: 'Grunge Metal',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/r7GxXQTi3mk',
      image: '/bands/2022/2_unholy_pagoda.jpg',
      year: 2022,
    },
    {
      name: 'Namaka',
      description:
        'Namaka, c’est un duo électro-pop formé par Sophie Adam et Philipp Schlotter. N’ayant pas peur de se réinventer entre chaque disque, leur musique est comme un corps en mouvement entre l’analogique, le numérique, l’organique et le mécanique. Dans leurs deux premiers EP, le duo navigue entre des énergies vives et ludiques, rappelant la chanteuse islandaise Björk ou les suédois de Little Dragon. Le dernier album de Namaka, “Restore”, est quant à lui une introspection dans les mécanismes de la rupture et déborde d’une électricité incontrôlée, mais parfois aussi apaisante. C’est sûr, ce duo zurichois saura t’embarquer dans un voyage émotionnel et envoûtant lors de sa venue sur la plaine du MoonAlps !',
      url: 'https://www.namakamusic.com/',
      style: 'Electro Pop',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/LYwy-Vv7J48',
      image: '/bands/2022/3_namaka.jpg',
      year: 2022,
    },
    {
      name: 'Kömarov B2B Léau',
      description:
        'Passionné par l’univers de la musique électronique depuis son plus jeune âge, Kömarov s’intalle derrière les platines dès 2016, où il débute sur vinyles. Rejoignant ses acolytes du collectif “La Claque” en 2018. Il performe depuis dans plusieurs clubs et évènements romands. Il partage à travers ses sets son engouement pour des sonorités écléctiques, percutantes et diversiformes, versiformes. Léau quant à lui est un Music-nerd de la région de Lausanne, qui dig de tout et surtout n’importe quoi. Son moto est que l’important c’est le plaisir. Le duo s’est déjà produit à de multiples occasions, leur complicité se mettant toujours à l’oeuvre pour délivrer un maximum d’ondes positives.',
      url: 'https://soundcloud.com/koemarov_ch',
      style: 'Tech',
      location: 'Vaud',
      video: '',
      image: '/bands/2022/4_komarov.png',
      year: 2022,
    },
    {
      name: 'Warnöx',
      description:
        'Les yeux perdus dans les étoiles, Warnöx fait voyager son public dans un univers à la fois touchant et explosif. La large palette musicale qu’il propose varie de la trap agressive à la mélancolie poignante, en passant par des sonorités orientales pop, mais conserve un principe clé au cœur de son monde, celui du rap qui devient chanson française et du rock qui se rappe. L’intervention d’instruments acoustiques vient ajouter une dernière composante au style prenant de Warnöx. Dans son album “Espoir d’amour”, il utilise son environnement musical afin de discuter les aléas de la vie, en proposant un point final aux questionnements de l’adolescence et en rendant également hommage aux suicidés. Nul doute que ce mélange musical et la force de ses textes t’emporteront dans un voyage que tu n’es pas prêt·e d’oublier.',
      url: 'https://www.instagram.com/warnoxmusic/?hl=en',
      style: 'Rap / Rock',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/q8ChGJ2df6U',
      image: '/bands/2022/5_warnox.jpg',
      year: 2022,
    },
    {
      name: 'Dead Shaman',
      description:
        'Arrivés tout droit des montagnes secrètes du Fuzzistan, les 3 furieux Dead Shaman tirent leur style du heavy et du dirty blues de la fin des années 1960. Ils aiment ajouter leur petite touche rock’n’roll à leurs influences et délivrer un maelström propre à eux, aux arômes d’eau-de-vie de poire. Ils ont sorti leur premier album en 2020, un hommage au grand Peter Green et à son légendaire son de Les Paul de 1959. A travers les titres de cet ouvrage, mais aussi bien d’autres, Dead Shaman te fera prendre de multiples directions et rendra ton corps plus élastique que jamais !',
      url: 'https://sixteentimes.com/dead-shaman/',
      style: 'Stoner Rock',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/xFLTjXzZMoA',
      image: '/bands/2022/6_dead_shaman.jpg',
      year: 2022,
    },
    {
      name: 'Licking Rainbows',
      description:
        'Sous la forme d’un Power Trio, Licking Rainbows allie un son puissant à une énergie sauvage. Avec des inspirations variant du Brit-Rock, Garage-Rock et du Rock psychédélique, le groupe plane sur la vague 60’s tout en stimulant une ardeur proche du mouvement Punk. Formé de trois amis passionnés par la culture rock, une forte complicité musicale et scénique émane de ce groupe yverdonnois. En mêlant harmonie vocale à des riffs acharnés et en voyageant sur des lignes de voix aussi clean que grunge, Licking Rainbows déversera un dynamisme aussi énergique que surprenant lors de sa venue au festival !',
      url: 'https://mx3.ch/lickingrainbows',
      style: 'Rock Alternatif',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/T78NKaTBbmM',
      image: '/bands/2022/7_licking_rainbows.jpg',
      year: 2022,
    },
    {
      name: 'Peacebone',
      description:
        'Fondé à Vevey, Peacebone est un groupe de modern blues rock et voyage dans un univers musical s’étendant entre les années 70 et le rock actuel, inspiré de Rival Sons et All Them Witches. Leur musique est marquée par des riffs puissants de guitare enjolivés, menés par une batterie sous stéroïdes, mais aussi tintée de sonorités printanières et couverte d’une voix féminine envoûtante. Une musique sincère et vivante, voilà ce qui résume Peacebone. Déjà doté d’une belle expérience de scène, ce groupe veveysan a notamment foulé le parquet du Music in the Park du Montreux Jazz Festival et leur premier album a été enregistré à Berlin avec des producteurs prestigieux. C’est avec un bagage musical déjà bien fourni mais surtout avec une fougue et une énergie débordante que Peacebone enflammera la scène du MoonAlps !',
      url: 'https://peaceboneband.com/',
      style: 'Blues Rock',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/xSuBOBEmWWg',
      image: '/bands/2022/8_peacebone.jpg',
      year: 2022,
    },
    {
      name: 'Le Dojo',
      description:
        'Initialement créé afin de promouvoir la musique électronique au travers d’un webmagazine, Le Dojo est aujourd’hui un collectif actif derrière les platines visant à promouvoir et rassembler la scène locale. Aujourd’hui composé de trois membres, Le Dojo combine les influences musicales de chacun de ses membres, en oscillant entre la house et la techno et allant également vers des sélections de dance music éclectiques en passant par des productions de deephouse plus mélodiques. C’est avec ce mix que ce jeune collectif te fera danser et te laissera t’imprégner d’un doux mélange de styles de musique électronique digne d’une nuit au MoonAlps.',
      url: 'https://www.ledojo.ch/',
      style: 'Tech Disco',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/LhLb_-NguoI',
      image: '/bands/2022/9_le_dojo.jpg',
      year: 2022,
    },
    {
      name: 'Don\'t Kill The Cow',
      description:
        `Don't Kill The Cow est un groupe d'indie rock originaire de la région du Grand Genève, ayant déjà réalisé plus de 80 concerts sur la scène genevoise et lausannoise.
        
        Après la sortie de leur EP en mars 2020, le groupe franchit une nouvelle étape avec leur premier album intitulé "Drawing Cards", qui voit le jour en mai 2022.
        
        Leur complicité sur scène, forgée par plus de quinze ans d'amitié, se transmet au public à travers des compositions variées et originales, remplies d'émotions profondes et d'énergie débordante.`,
      url: '',
      style: 'Indie Rock',
      location: 'Genève',
      video: 'https://www.youtube.com/embed/HlG-E8jPrYE',
      image: '/bands/2023/1_dont_kill_the_cow.png',
      time: "16h30",
      year: 2023,
    },
    {
      name: 'The Meseeks',
      description:
        `The Meseeks est un trio punk rock de Brig formé en 2018, qui a sorti son premier EP "RENEGADE" un an plus tard.

        Après de nombreux concerts énergiques et passionnés, le groupe a commencé à écrire de nouvelles chansons et a développé son propre son, quelque part entre l'indie, l'emo et le post-punk.

        Leur nouvel EP "HEAVY DREAMS / PLASMONIC VIBES" explore la réflexion autocritique de la routine quotidienne et les rêves euphoriques.
        `,
      url: '',
      style: 'Punk Rock',
      location: 'Valais',
      video: 'https://www.youtube.com/embed/9ToEvKHn3q4',
      image: '/bands/2023/3_the_meseeks.png',
      time: "17h45",
      year: 2023,
    },
    {
      name: 'Fluffy Machine',
      description:
        `Fluffy Machine s'est fait un nom dans la scène punk rock européenne au cours des 5 dernières années, s'inspirant de groupes tels que IDLES et Clowns.

        En 2019, ils ont enregistré leur premier album "Mutual Admiration Society" qui explore le skate punk à la manière californienne.
        
        Avec leur dernier album "Alive But Not Dead"  sorti en 2021 et le single "i'm always high when i see you smile" sorti en 2022, ils nous offrent une ambiance estivale revigorante, raffraichissante et dynamique.`,
      url: '',
      style: 'Punk Rock',
      location: 'Valais',
      video: 'https://www.youtube.com/embed/IlVeeiTKuMU',
      image: '/bands/2023/4_fluffy_machine.png',
      time: "19h20",
      year: 2023,
    },
    {
      name: 'nuum.',
      description:
        `nuum. est un groupe qui fusionne habilement le grunge et la pop pour créer un son captivant, hypnotique et énergique.

        Initialement formé sous le nom de Sinai Planum en 2018, le groupe a sorti  leur premier single "Burn the Hideaway" en 2019 et leur EP "Sauvage Café" début 2021.
        
        Après une année 2021 accomplie, le groupe se réinvente suite au départ du chanteur principal et se lance sous le nom de "nuum.", composé d'Alexandre Kawecki à la basse, Jan Waligorski au chant et à la guitare, Mathieu Meurin à la guitare, et Loïc Cattin à la batterie.`,
      url: '',
      style: 'Neo-grunge',
      location: 'Vaud',
      video: '',
      image: '/bands/2023/2_nuum.png',
      time: "21h00",
      year: 2023,
    }
  ].filter((e) => e.year == params.year);
  return {
    props: { bands },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { year: '2021' } }, { params: { year: '2022' } }, { params: { year: '2023' } }],
    fallback: false, // false or 'blocking'
  };
}

type IProps = {
  bands: IBand[];
};

const Lineup: NextPage<IProps> = ({ bands }: IProps) => {
  const router = useRouter();
  const { year } = router.query;
  const [scroll, setScroll] = useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)}>
      <div>
        <Head>
          <title>Lineup {year}</title>
          <meta name="description" content="La lineup 2021 du Moonalps festival" />
        </Head>

        <main className="pt-20 p-2 relative">
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 font-migra-bold break-all">LINE-UP {year}</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-4 px-4 md:px-8 lg:px-16 m-auto" style={{ maxWidth: "80rem" }}>
              {bands.map((band: IBand, i: number) => (
                <div key={i} className="h-full flex flex-col">
                  <div style={{ backgroundImage: `url(${band.image})` }} className="bg-center bg-cover grayscale h-64 mb-8 w-full" ></div>
                  <p className="text-xl font-migra-bold leading-6">{band.name}</p>
                  <p className="text-sm mb-1 font-bold">{band.location} · {band.style}</p>
                  {band.time &&
                    <div className="text-xs mb-4 font-bold text-white bg-cell rounded-md px-2 w-fit">{band.time}</div>}
                  <p className="text-xs font-light whitespace-pre-line mb-4">{band.description}</p>
                  <div className="flex-grow"></div>
                  {
                    band.video && (
                      <div className="mt-4">
                        <div className="relative w-full h-32">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={band.video}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )
                  }
                </div>
              ))}
            </div>
          </div>
        </main >
      </div >
    </Layout >
  );
};

export default Lineup;
