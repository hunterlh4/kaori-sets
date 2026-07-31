import type { Item } from '../types/database'

export const mockItems: Item[] = [
  // 2018-II - axe, brewmaster, broodmother, chen, phoenix, nyx, ember, meepo
  {
    id: 1,
    heroe_id: 6, // axe
    cofre_id: 2,
    nombre: "Axe Set 2018",
    precio: 250.00,
    slug: "axe-set-2018",
    imagen_url: ["/sets/2018/axe.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    heroe_id: 12, // brewmaster
    cofre_id: 2,
    nombre: "Brewmaster Set 2018",
    precio: 300.00,
    slug: "brewmaster-set-2018",
    imagen_url: ["/sets/2018/brewmaster.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 3,
    heroe_id: 14, // broodmother
    cofre_id: 2,
    nombre: "Broodmother Set 2018",
    precio: 280.00,
    slug: "broodmother-set-2018",
    imagen_url: ["/sets/2018/broodmother.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 4,
    heroe_id: 17, // chen
    cofre_id: 2,
    nombre: "Chen Set 2018",
    precio: 270.00,
    slug: "chen-set-2018",
    imagen_url: ["/sets/2018/chen.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 5,
    heroe_id: 79, // phoenix
    cofre_id: 2,
    nombre: "Phoenix Set 2018",
    precio: 320.00,
    slug: "phoenix-set-2018",
    imagen_url: ["/sets/2018/phoenix1.jpg", "/sets/2018/phoenix2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 6,
    heroe_id: 71, // nyx_assassin
    cofre_id: 2,
    nombre: "Nyx Assassin Set 2018",
    precio: 290.00,
    slug: "nyx-assassin-set-2018",
    imagen_url: ["/sets/2018/nyx.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 7,
    heroe_id: 33, // ember_spirit
    cofre_id: 2,
    nombre: "Ember Spirit Set 2018",
    precio: 310.00,
    slug: "ember-spirit-set-2018",
    imagen_url: ["/sets/2018/ember.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 8,
    heroe_id: 62, // meepo
    cofre_id: 2,
    nombre: "Meepo Set 2018",
    precio: 330.00,
    slug: "meepo-set-2018",
    imagen_url: ["/sets/2018/meepo.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2018-I - necrophos, queen of pain, venomancer, weaver
  {
    id: 9,
    heroe_id: 69, // necrophos
    cofre_id: 1,
    nombre: "Necrophos Set 2018",
    precio: 260.00,
    slug: "necrophos-set-2018",
    imagen_url: ["/sets/2018/necrophos.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 10,
    heroe_id: 84, // queen_of_pain
    cofre_id: 1,
    nombre: "Queen of Pain Set 2018",
    precio: 300.00,
    slug: "queen-of-pain-set-2018",
    imagen_url: ["/sets/2018/queenofpain.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 11,
    heroe_id: 117, // venomancer
    cofre_id: 1,
    nombre: "Venomancer Set 2018",
    precio: 280.00,
    slug: "venomancer-set-2018",
    imagen_url: ["/sets/2018/venomancer1.jpg", "/sets/2018/venomancer2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 12,
    heroe_id: 122, // weaver
    cofre_id: 1,
    nombre: "Weaver Set 2018",
    precio: 270.00,
    slug: "weaver-set-2018",
    imagen_url: ["/sets/2018/weaver.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2019 - The International 2019 Collector's Cache
  {
    id: 13,
    heroe_id: 1, // abaddon
    cofre_id: 3,
    nombre: "Abaddon Set 2019",
    precio: 260.00,
    slug: "abaddon-set-2019",
    imagen_url: ["/sets/2019/abaddon.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 14,
    heroe_id: 17, // chen
    cofre_id: 3,
    nombre: "Chen Set 2019",
    precio: 270.00,
    slug: "chen-set-2019",
    imagen_url: ["/sets/2019/chen.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 15,
    heroe_id: 22, // dark willow
    cofre_id: 3,
    nombre: "Dark Willow Set 2019",
    precio: 290.00,
    slug: "dark-willow-set-2019",
    imagen_url: ["/sets/2019/darkwillow.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 16,
    heroe_id: 24, // dazzle
    cofre_id: 3,
    nombre: "Dazzle Set 2019",
    precio: 280.00,
    slug: "dazzle-set-2019",
    imagen_url: ["/sets/2019/dazzle.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 17,
    heroe_id: 25, // death prophet
    cofre_id: 3,
    nombre: "Death Prophet Set 2019",
    precio: 300.00,
    slug: "death-prophet-set-2019",
    imagen_url: ["/sets/2019/death.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 18,
    heroe_id: 26, // disruptor
    cofre_id: 3,
    nombre: "Disruptor Set 2019",
    precio: 280.00,
    slug: "disruptor-set-2019",
    imagen_url: ["/sets/2019/disruptor.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 19,
    heroe_id: 28, // dragon knight
    cofre_id: 3,
    nombre: "Dragon Knight Set 2019",
    precio: 310.00,
    slug: "dragon-knight-set-2019",
    imagen_url: ["/sets/2019/dk1.jpg", "/sets/2019/dk2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 20,
    heroe_id: 29, // drow ranger
    cofre_id: 3,
    nombre: "Drow Ranger Set 2019",
    precio: 290.00,
    slug: "drow-ranger-set-2019",
    imagen_url: ["/sets/2019/drow.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 21,
    heroe_id: 30, // earth spirit
    cofre_id: 3,
    nombre: "Earth Spirit Set 2019",
    precio: 270.00,
    slug: "earth-spirit-set-2019",
    imagen_url: ["/sets/2019/earthspirit.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 22,
    heroe_id: 35, // enigma
    cofre_id: 3,
    nombre: "Enigma Set 2019",
    precio: 320.00,
    slug: "enigma-set-2019",
    imagen_url: ["/sets/2019/enigma1.jpg", "/sets/2019/enigma2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 23,
    heroe_id: 37, // grimstroke
    cofre_id: 3,
    nombre: "Grimstroke Set 2019",
    precio: 300.00,
    slug: "grimstroke-set-2019",
    imagen_url: ["/sets/2019/grim.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 24,
    heroe_id: 40, // huskar
    cofre_id: 3,
    nombre: "Huskar Set 2019",
    precio: 280.00,
    slug: "huskar-set-2019",
    imagen_url: ["/sets/2019/huskar.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 25,
    heroe_id: 74, // oracle
    cofre_id: 3,
    nombre: "Oracle Set 2019",
    precio: 290.00,
    slug: "oracle-set-2019",
    imagen_url: ["/sets/2019/oracle.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 26,
    heroe_id: 77, // phantom assassin
    cofre_id: 3,
    nombre: "Phantom Assassin Set 2019",
    precio: 320.00,
    slug: "phantom-assassin-set-2019",
    imagen_url: ["/sets/2019/pa.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 27,
    heroe_id: 96, // slark
    cofre_id: 3,
    nombre: "Slark Set 2019",
    precio: 300.00,
    slug: "slark-set-2019",
    imagen_url: ["/sets/2019/slark.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 28,
    heroe_id: 106, // tidehunter
    cofre_id: 3,
    nombre: "Tidehunter Set 2019",
    precio: 280.00,
    slug: "tidehunter-set-2019",
    imagen_url: ["/sets/2019/tide.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 29,
    heroe_id: 114, // undying
    cofre_id: 3,
    nombre: "Undying Set 2019",
    precio: 290.00,
    slug: "undying-set-2019",
    imagen_url: ["/sets/2019/undying1.jpg", "/sets/2019/undying2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2020 - The International 2020 Collector's Cache
  {
    id: 30,
    heroe_id: 3, // ancient apparition
    cofre_id: 4,
    nombre: "Ancient Apparition Set 2020",
    precio: 260.00,
    slug: "ancient-apparition-set-2020",
    imagen_url: ["/sets/2020/ancient.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 31,
    heroe_id: 11, // bounty hunter
    cofre_id: 4,
    nombre: "Bounty Hunter Set 2020",
    precio: 270.00,
    slug: "bounty-hunter-set-2020",
    imagen_url: ["/sets/2020/bountry.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 32,
    heroe_id: 26, // disruptor
    cofre_id: 4,
    nombre: "Disruptor Set 2020",
    precio: 280.00,
    slug: "disruptor-set-2020",
    imagen_url: ["/sets/2020/disruptor.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 33,
    heroe_id: 34, // enchantress
    cofre_id: 4,
    nombre: "Enchantress Set 2020",
    precio: 270.00,
    slug: "enchantress-set-2020",
    imagen_url: ["/sets/2020/enchantress.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 34,
    heroe_id: 37, // grimstroke
    cofre_id: 4,
    nombre: "Grimstroke Set 2020",
    precio: 290.00,
    slug: "grimstroke-set-2020",
    imagen_url: ["/sets/2020/grim.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 35,
    heroe_id: 40, // huskar
    cofre_id: 4,
    nombre: "Huskar Set 2020",
    precio: 280.00,
    slug: "huskar-set-2020",
    imagen_url: ["/sets/2020/huskar.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 36,
    heroe_id: 43, // jakiro
    cofre_id: 4,
    nombre: "Jakiro Set 2020",
    precio: 270.00,
    slug: "jakiro-set-2020",
    imagen_url: ["/sets/2020/jakiro.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 37,
    heroe_id: 60, // mars
    cofre_id: 4,
    nombre: "Mars Set 2020",
    precio: 300.00,
    slug: "mars-set-2020",
    imagen_url: ["/sets/2020/mars.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 38,
    heroe_id: 68, // nature prophet
    cofre_id: 4,
    nombre: "Nature's Prophet Set 2020",
    precio: 280.00,
    slug: "natures-prophet-set-2020",
    imagen_url: ["/sets/2020/nature.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 39,
    heroe_id: 70, // night stalker
    cofre_id: 4,
    nombre: "Night Stalker Set 2020",
    precio: 290.00,
    slug: "night-stalker-set-2020",
    imagen_url: ["/sets/2020/night1.jpg", "/sets/2020/night2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 40,
    heroe_id: 82, // pudge
    cofre_id: 4,
    nombre: "Pudge Set 2020",
    precio: 310.00,
    slug: "pudge-set-2020",
    imagen_url: ["/sets/2020/pudge.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 41,
    heroe_id: 93, // silencer
    cofre_id: 4,
    nombre: "Silencer Set 2020",
    precio: 270.00,
    slug: "silencer-set-2020",
    imagen_url: ["/sets/2020/silencer.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 42,
    heroe_id: 109, // tiny
    cofre_id: 4,
    nombre: "Tiny Set 2020",
    precio: 280.00,
    slug: "tiny-set-2020",
    imagen_url: ["/sets/2020/tiny.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 43,
    heroe_id: 113, // underlord
    cofre_id: 4,
    nombre: "Underlord Set 2020",
    precio: 290.00,
    slug: "underlord-set-2020",
    imagen_url: ["/sets/2020/underlord.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 44,
    heroe_id: 121, // warlock
    cofre_id: 4,
    nombre: "Warlock Set 2020",
    precio: 300.00,
    slug: "warlock-set-2020",
    imagen_url: ["/sets/2020/warlock1.jpg", "/sets/2020/warlock2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2021 - Aghanim's 2021 Collector's Cache
  {
    id: 45,
    heroe_id: 1, // abaddon
    cofre_id: 5,
    nombre: "Abaddon Set 2021",
    precio: 260.00,
    slug: "abaddon-set-2021",
    imagen_url: ["/sets/2021/abaddon.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 46,
    heroe_id: 2, // alchemist
    cofre_id: 5,
    nombre: "Alchemist Set 2021",
    precio: 270.00,
    slug: "alchemist-set-2021",
    imagen_url: ["/sets/2021/alche.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 47,
    heroe_id: 3, // ancient apparition
    cofre_id: 5,
    nombre: "Ancient Apparition Set 2021",
    precio: 280.00,
    slug: "ancient-apparition-set-2021",
    imagen_url: ["/sets/2021/ancient.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 48,
    heroe_id: 14, // broodmother
    cofre_id: 5,
    nombre: "Broodmother Set 2021",
    precio: 270.00,
    slug: "broodmother-set-2021",
    imagen_url: ["/sets/2021/broodmother.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 49,
    heroe_id: 17, // chen
    cofre_id: 5,
    nombre: "Chen Set 2021",
    precio: 290.00,
    slug: "chen-set-2021",
    imagen_url: ["/sets/2021/chen.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 50,
    heroe_id: 19, // clockwerk
    cofre_id: 5,
    nombre: "Clockwerk Set 2021",
    precio: 280.00,
    slug: "clockwerk-set-2021",
    imagen_url: ["/sets/2021/clock.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 51,
    heroe_id: 23, // dawnbreaker
    cofre_id: 5,
    nombre: "Dawnbreaker Set 2021",
    precio: 300.00,
    slug: "dawnbreaker-set-2021",
    imagen_url: ["/sets/2021/dawnbreaker.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 52,
    heroe_id: 37, // grimstroke
    cofre_id: 5,
    nombre: "Grimstroke Set 2021",
    precio: 280.00,
    slug: "grimstroke-set-2021",
    imagen_url: ["/sets/2021/grim.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 53,
    heroe_id: 60, // mars
    cofre_id: 5,
    nombre: "Mars Set 2021",
    precio: 290.00,
    slug: "mars-set-2021",
    imagen_url: ["/sets/2021/mars.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 54,
    heroe_id: 78, // phantom lancer
    cofre_id: 5,
    nombre: "Phantom Lancer Set 2021",
    precio: 270.00,
    slug: "phantom-lancer-set-2021",
    imagen_url: ["/sets/2021/pl.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 55,
    heroe_id: 85, // razor
    cofre_id: 5,
    nombre: "Razor Set 2021",
    precio: 280.00,
    slug: "razor-set-2021",
    imagen_url: ["/sets/2021/razor.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 56,
    heroe_id: 88, // rubick
    cofre_id: 5,
    nombre: "Rubick Set 2021",
    precio: 290.00,
    slug: "rubick-set-2021",
    imagen_url: ["/sets/2021/rubick.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2022 - Diretide 2022 Collector's Cache
  {
    id: 57,
    heroe_id: 17, // chen
    cofre_id: 6,
    nombre: "Chen Set 2022",
    precio: 260.00,
    slug: "chen-set-2022",
    imagen_url: ["/sets/2022/chen.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 58,
    heroe_id: 19, // clockwerk
    cofre_id: 6,
    nombre: "Clockwerk Set 2022",
    precio: 270.00,
    slug: "clockwerk-set-2022",
    imagen_url: ["/sets/2022/clock.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 59,
    heroe_id: 23, // dawnbreaker
    cofre_id: 6,
    nombre: "Dawnbreaker Set 2022",
    precio: 280.00,
    slug: "dawnbreaker-set-2022",
    imagen_url: ["/sets/2022/dawnbreaker.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 60,
    heroe_id: 36, // faceless void
    cofre_id: 6,
    nombre: "Faceless Void Set 2022",
    precio: 290.00,
    slug: "faceless-void-set-2022",
    imagen_url: ["/sets/2022/facelessvoid.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 61,
    heroe_id: 39, // hoodwink
    cofre_id: 6,
    nombre: "Hoodwink Set 2022",
    precio: 270.00,
    slug: "hoodwink-set-2022",
    imagen_url: ["/sets/2022/hoodwink.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 62,
    heroe_id: 41, // invoker
    cofre_id: 6,
    nombre: "Invoker Set 2022",
    precio: 300.00,
    slug: "invoker-set-2022",
    imagen_url: ["/sets/2022/invoker.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 63,
    heroe_id: 59, // marci
    cofre_id: 6,
    nombre: "Marci Set 2022",
    precio: 280.00,
    slug: "marci-set-2022",
    imagen_url: ["/sets/2022/marci.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 64,
    heroe_id: 64, // monkey king
    cofre_id: 6,
    nombre: "Monkey King Set 2022",
    precio: 270.00,
    slug: "monkey-king-set-2022",
    imagen_url: ["/sets/2022/mono.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 65,
    heroe_id: 74, // oracle
    cofre_id: 6,
    nombre: "Oracle Set 2022",
    precio: 280.00,
    slug: "oracle-set-2022",
    imagen_url: ["/sets/2022/oracle.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 66,
    heroe_id: 79, // phoenix
    cofre_id: 6,
    nombre: "Phoenix Set 2022",
    precio: 290.00,
    slug: "phoenix-set-2022",
    imagen_url: ["/sets/2022/phoenix1.jpg", "/sets/2022/phoenix2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 67,
    heroe_id: 80, // primal beast
    cofre_id: 6,
    nombre: "Primal Beast Set 2022",
    precio: 300.00,
    slug: "primal-beast-set-2022",
    imagen_url: ["/sets/2022/primal.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 68,
    heroe_id: 86, // riki
    cofre_id: 6,
    nombre: "Riki Set 2022",
    precio: 270.00,
    slug: "riki-set-2022",
    imagen_url: ["/sets/2022/riki.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 69,
    heroe_id: 97, // snapfire
    cofre_id: 6,
    nombre: "Snapfire Set 2022",
    precio: 280.00,
    slug: "snapfire-set-2022",
    imagen_url: ["/sets/2022/snap.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 70,
    heroe_id: 99, // spectre
    cofre_id: 6,
    nombre: "Spectre Set 2022",
    precio: 290.00,
    slug: "spectre-set-2022",
    imagen_url: ["/sets/2022/spectre.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 71,
    heroe_id: 115, // ursa
    cofre_id: 6,
    nombre: "Ursa Set 2022",
    precio: 280.00,
    slug: "ursa-set-2022",
    imagen_url: ["/sets/2022/ursa.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 72,
    heroe_id: 125, // witch doctor
    cofre_id: 6,
    nombre: "Witch Doctor Set 2022",
    precio: 270.00,
    slug: "witch-doctor-set-2022",
    imagen_url: ["/sets/2022/witch1.jpg", "/sets/2022/witch2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2023 - August 2023 Collector's Cache
  {
    id: 73,
    heroe_id: 1, // abaddon
    cofre_id: 7,
    nombre: "Abaddon Set 2023",
    precio: 260.00,
    slug: "abaddon-set-2023",
    imagen_url: ["/sets/2023/abaddon.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 74,
    heroe_id: 2, // alchemist
    cofre_id: 7,
    nombre: "Alchemist Set 2023",
    precio: 270.00,
    slug: "alchemist-set-2023",
    imagen_url: ["/sets/2023/alche.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 75,
    heroe_id: 23, // dawnbreaker
    cofre_id: 7,
    nombre: "Dawnbreaker Set 2023",
    precio: 280.00,
    slug: "dawnbreaker-set-2023",
    imagen_url: ["/sets/2023/dawnbreaker.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 76,
    heroe_id: 24, // dazzle
    cofre_id: 7,
    nombre: "Dazzle Set 2023",
    precio: 270.00,
    slug: "dazzle-set-2023",
    imagen_url: ["/sets/2023/dazzle.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 77,
    heroe_id: 25, // death prophet
    cofre_id: 7,
    nombre: "Death Prophet Set 2023",
    precio: 290.00,
    slug: "death-prophet-set-2023",
    imagen_url: ["/sets/2023/dp.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 78,
    heroe_id: 39, // hoodwink
    cofre_id: 7,
    nombre: "Hoodwink Set 2023",
    precio: 280.00,
    slug: "hoodwink-set-2023",
    imagen_url: ["/sets/2023/hoodwink.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 79,
    heroe_id: 43, // jakiro
    cofre_id: 7,
    nombre: "Jakiro Set 2023",
    precio: 270.00,
    slug: "jakiro-set-2023",
    imagen_url: ["/sets/2023/jakiro.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 80,
    heroe_id: 47, // kunkka
    cofre_id: 7,
    nombre: "Kunkka Set 2023",
    precio: 280.00,
    slug: "kunkka-set-2023",
    imagen_url: ["/sets/2023/kunka.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 81,
    heroe_id: 49, // legion commander
    cofre_id: 7,
    nombre: "Legion Commander Set 2023",
    precio: 290.00,
    slug: "legion-commander-set-2023",
    imagen_url: ["/sets/2023/lc.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 82,
    heroe_id: 59, // marci
    cofre_id: 7,
    nombre: "Marci Set 2023",
    precio: 280.00,
    slug: "marci-set-2023",
    imagen_url: ["/sets/2023/marci.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 83,
    heroe_id: 80, // primal beast
    cofre_id: 7,
    nombre: "Primal Beast Set 2023",
    precio: 300.00,
    slug: "primal-beast-set-2023",
    imagen_url: ["/sets/2023/primal.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 84,
    heroe_id: 97, // snapfire
    cofre_id: 7,
    nombre: "Snapfire Set 2023",
    precio: 270.00,
    slug: "snapfire-set-2023",
    imagen_url: ["/sets/2023/snap.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 85,
    heroe_id: 99, // spectre
    cofre_id: 7,
    nombre: "Spectre Set 2023",
    precio: 290.00,
    slug: "spectre-set-2023",
    imagen_url: ["/sets/2023/spectre.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 86,
    heroe_id: 101, // storm spirit
    cofre_id: 7,
    nombre: "Storm Spirit Set 2023",
    precio: 280.00,
    slug: "storm-spirit-set-2023",
    imagen_url: ["/sets/2023/storm.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 87,
    heroe_id: 126, // wraith king
    cofre_id: 7,
    nombre: "Wraith King Set 2023",
    precio: 300.00,
    slug: "wraith-king-set-2023",
    imagen_url: ["/sets/2023/wk.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  
  // 2024 - Crownfall 2024 Collector's Cache
  {
    id: 88,
    heroe_id: 4, // antimage
    cofre_id: 8,
    nombre: "Anti-Mage Set 2024",
    precio: 260.00,
    slug: "anti-mage-set-2024",
    imagen_url: ["/sets/2024/am.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 89,
    heroe_id: 37, // grimstroke
    cofre_id: 8,
    nombre: "Grimstroke Set 2024",
    precio: 270.00,
    slug: "grimstroke-set-2024",
    imagen_url: ["/sets/2024/grim.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 90,
    heroe_id: 44, // juggernaut
    cofre_id: 8,
    nombre: "Juggernaut Set 2024",
    precio: 280.00,
    slug: "juggernaut-set-2024",
    imagen_url: ["/sets/2024/jugger.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 91,
    heroe_id: 56, // luna
    cofre_id: 8,
    nombre: "Luna Set 2024",
    precio: 270.00,
    slug: "luna-set-2024",
    imagen_url: ["/sets/2024/luna.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 92,
    heroe_id: 59, // marci
    cofre_id: 8,
    nombre: "Marci Set 2024",
    precio: 280.00,
    slug: "marci-set-2024",
    imagen_url: ["/sets/2024/marci.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 93,
    heroe_id: 62, // meepo
    cofre_id: 8,
    nombre: "Meepo Set 2024",
    precio: 290.00,
    slug: "meepo-set-2024",
    imagen_url: ["/sets/2024/meepo.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 94,
    heroe_id: 66, // muerta
    cofre_id: 8,
    nombre: "Muerta Set 2024",
    precio: 280.00,
    slug: "muerta-set-2024",
    imagen_url: ["/sets/2024/muerta.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 95,
    heroe_id: 67, // naga siren
    cofre_id: 8,
    nombre: "Naga Siren Set 2024",
    precio: 270.00,
    slug: "naga-siren-set-2024",
    imagen_url: ["/sets/2024/naga.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 96,
    heroe_id: 70, // night stalker
    cofre_id: 8,
    nombre: "Night Stalker Set 2024",
    precio: 290.00,
    slug: "night-stalker-set-2024",
    imagen_url: ["/sets/2024/night1.jpg", "/sets/2024/night2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 97,
    heroe_id: 71, // nyx assassin
    cofre_id: 8,
    nombre: "Nyx Assassin Set 2024",
    precio: 280.00,
    slug: "nyx-assassin-set-2024",
    imagen_url: ["/sets/2024/nyx.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 98,
    heroe_id: 77, // phantom assassin
    cofre_id: 8,
    nombre: "Phantom Assassin Set 2024",
    precio: 300.00,
    slug: "phantom-assassin-set-2024",
    imagen_url: ["/sets/2024/pa.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 99,
    heroe_id: 82, // pudge
    cofre_id: 8,
    nombre: "Pudge Set 2024",
    precio: 290.00,
    slug: "pudge-set-2024",
    imagen_url: ["/sets/2024/pudge.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 100,
    heroe_id: 84, // queen of pain
    cofre_id: 8,
    nombre: "Queen of Pain Set 2024",
    precio: 280.00,
    slug: "queen-of-pain-set-2024",
    imagen_url: ["/sets/2024/queen.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 101,
    heroe_id: 97, // snapfire
    cofre_id: 8,
    nombre: "Snapfire Set 2024",
    precio: 270.00,
    slug: "snapfire-set-2024",
    imagen_url: ["/sets/2024/snap.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 102,
    heroe_id: 104, // templar assassin
    cofre_id: 8,
    nombre: "Templar Assassin Set 2024",
    precio: 280.00,
    slug: "templar-assassin-set-2024",
    imagen_url: ["/sets/2024/templar.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 103,
    heroe_id: 105, // terrorblade
    cofre_id: 8,
    nombre: "Terrorblade Set 2024",
    precio: 300.00,
    slug: "terrorblade-set-2024",
    imagen_url: ["/sets/2024/terro1.jpg", "/sets/2024/terro2.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 104,
    heroe_id: 109, // tiny
    cofre_id: 8,
    nombre: "Tiny Set 2024",
    precio: 270.00,
    slug: "tiny-set-2024",
    imagen_url: ["/sets/2024/tiny.jpg"],
    rareza: 1, // común
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  }
]