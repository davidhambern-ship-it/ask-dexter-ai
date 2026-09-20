export interface KnowledgeRecord {
  id: string;
  title: string;
  aliases: string[];
  category: string;
  summary: string;
  facts: string[];
}

export const PUBLIC_PROFILE = {
  name: "Berna",
  site: "https://hireberna.app",
  email: "hello@hireberna.app",
  youtube: "@BernATune",
  bigo: "DaBerna | TexasNomad",
  instagram: "@nomadiclibra",
  tiktok: "@iamamericinc",
  discord: "tx_nomad",
};

export const MARKET_VEGGIES_AMAZON =
  "https://www.amazon.com/dp/B0D54PQC7N?binding=paperback&ref=dbs_dp_rwt_sb_pc_tpbk";

export const KNOWLEDGE: KnowledgeRecord[] = [
  {
    id: "berna-master-brand",
    title: "BERNA",
    aliases: ["berna", "berna brand", "the berna brand", "master brand", "parent brand"],
    category: "brand",
    summary:
      "BERNA is the master creative identity behind Berna's wider ecosystem of technology, media, games, software, publishing, music, brands, and creative ventures.",
    facts: [
      "BERNA is bigger than any one project, product, or persona.",
      "HireBerna is the professional portfolio and services-facing expression of Berna's work.",
      "TexasNomad is one identity and brand family inside BERNA rather than the whole thing.",
      "A useful hierarchy Berna has established is: TexasNomad is BERNA, but BERNA is not TexasNomad.",
      "The BERNA crown is a five-point crown and is treated as a recognizable brand element.",
      "The BernaVerse idea connects projects, characters, products, games, media, software, books, and experiments without requiring every project to share the same visual identity."
    ]
  },
  {
    id: "bernaverse",
    title: "BernaVerse",
    aliases: ["bernaverse", "berna verse", "berna universe", "ecosystem"],
    category: "brand universe",
    summary:
      "The BernaVerse is the connected creative ecosystem around Berna's projects, characters, products, shows, games, software, books, media, and experiments.",
    facts: [
      "Projects can stand on their own while still crossing over through characters, tools, branding, or shared systems.",
      "Dexter is a recurring BernaVerse personality rather than a character that belongs to only one product.",
      "Examples inside the broader ecosystem include HireBerna, CREAPD, TexasNomad Games, TexasNomad Network, Ripe Realms, Market Veggies, music projects, shows, software, and business concepts."
    ]
  },
  {
    id: "texasnomad",
    title: "TexasNomad",
    aliases: ["texasnomad", "texas nomad", "txnomad", "who is texasnomad", "who is texas nomad"],
    category: "identity / media / technology brand",
    summary:
      "TexasNomad is a major public identity and brand family inside BERNA, used across live entertainment, media, technology, and games.",
    facts: [
      "TexasNomad has been used as Berna's public identity and handle in live entertainment and media contexts.",
      "TexasNomad Games is the gaming branch.",
      "TexasNomad Network is the broadcast/media network side.",
      "TexasNomad Productions is the content-production side.",
      "TexasNomad is BERNA, but BERNA is not TexasNomad."
    ]
  },
  {
    id: "hireberna",
    title: "HireBerna",
    aliases: ["hireberna", "hire berna", "hireberna.app"],
    category: "portfolio / services",
    summary:
      "HireBerna is Berna's public portfolio and business-facing hub for projects, services, experiments, writing, and creative systems.",
    facts: [
      "Public site: https://hireberna.app",
      "Public areas include About, Work, Lab, Services, The Brain/Blog, and Contact.",
      "Public email: hello@hireberna.app",
      "HireBerna showcases both Berna-owned projects and selected client or legacy work.",
      "Ask Dexter is intended to act as a knowledgeable public guide to Berna's work rather than a generic chatbot."
    ]
  },
  {
    id: "dexter",
    title: "Dexter",
    aliases: ["dexter", "ask dexter", "who is dexter"],
    category: "character / AI guide",
    summary:
      "Dexter is a recurring BernaVerse personality and the public-facing AI guide for HireBerna.",
    facts: [
      "Dexter is used as the Ask Dexter portfolio guide on HireBerna.",
      "Dexter also appears in TexasNomad Games and media concepts.",
      "Dexter's locked visual identity is bald, bearded, glasses, athletic build, and often BERNA-branded clothing.",
      "Dexter should never invent facts about Berna or his projects.",
      "Dexter can be playful and conversational while staying grounded in confirmed public information."
    ]
  },
  {
    id: "texasnomad-games",
    title: "TexasNomad Games",
    aliases: ["texasnomad games", "texas nomad games", "tng", "texasnomadgames.com"],
    category: "games / connected platform",
    summary:
      "TexasNomad Games is Berna's connected game and live-game ecosystem, built around multiple titles, host/player experiences, viewer participation, and a broader arcade identity.",
    facts: [
      "Public site: https://www.texasnomadgames.com",
      "TexasNomad Games is not one game; it is a family of game titles and systems.",
      "Known titles and concepts include BFF, Square Biz!, Hangman, Spades, Word Wrangler, VIRAL!, SEE THAT?!, and other evolving games.",
      "A recurring platform design separates host controls from player participation.",
      "The broader vision includes rooms, teams, scoring, leaderboards, profiles, achievements, shared identity, and cross-game rewards."
    ]
  },
  {
    id: "tng-arcade-hall",
    title: "TexasNomad Games Arcade Hall",
    aliases: ["arcade hall", "tng arcade", "texasnomad arcade", "game cabinets"],
    category: "games / ecosystem",
    summary:
      "The Arcade Hall is the connected front door envisioned for TexasNomad Games, with individual games represented as arcade cabinets inside one larger family.",
    facts: [
      "Discussed cabinets include Word Wrangler, SEE THAT?!, Square Biz!, VIRAL!, TXD, and future TNG games.",
      "A cabinet can represent a playable game or act as a portal to another TNG title.",
      "The concept supports shared identity, achievements, cosmetics, profiles, and rewards across games over time."
    ]
  },
  {
    id: "bff",
    title: "BFF",
    aliases: ["bff", "bigo family feud", "family feud"],
    category: "game",
    summary:
      "BFF means BIGO Family Feud, a TexasNomad Games livestream game-show experience built around survey-answer gameplay and host/viewer participation.",
    facts: [
      "Gameplay uses categories or questions, hidden and revealed answers, strikes, scoring, and steals.",
      "The host controls the board while players or viewers participate.",
      "BFF is one of the established TexasNomad Games titles."
    ]
  },
  {
    id: "square-biz",
    title: "Square Biz!",
    aliases: ["square biz", "square biz!", "trivia tactics"],
    category: "game",
    summary:
      "Square Biz! is a TexasNomad Games Trivia + Tactics game that combines trivia with a tic-tac-toe-style board and strategic X/O placement.",
    facts: [
      "Players answer trivia and use correct answers to influence the board.",
      "The design combines trivia knowledge with tactical choices such as wins, blocks, center control, and corners.",
      "It was designed for live host and viewer participation."
    ]
  },
  {
    id: "hangman",
    title: "Hangman",
    aliases: ["hangman", "tng hangman"],
    category: "game",
    summary:
      "TexasNomad Games Hangman is a livestream word-guessing game where a host sets the secret word, category, and hint while players try to solve it.",
    facts: [
      "Host controls include the hidden word, category, hint, reveal controls, and reset controls.",
      "Gameplay includes alphabet guessing and wrong-letter tracking.",
      "The design supports audience participation during live sessions."
    ]
  },
  {
    id: "spades",
    title: "Spades",
    aliases: ["spades", "tng spades"],
    category: "game",
    summary:
      "Spades is one of the TexasNomad Games card-game projects, with gameplay systems built around hands, suits, bids/books, legal plays, and winning-card logic.",
    facts: [
      "Spades has been part of the TexasNomad Games title lineup.",
      "CPU and gameplay logic has been discussed around reading hands, suits, winning cards, books, bids, and legal choices.",
      "Dexter should not invent a current version number or release status unless a newer public record supplies it."
    ]
  },
  {
    id: "word-wrangler",
    title: "Word Wrangler",
    aliases: ["word wrangler", "wordwrangler"],
    category: "game",
    summary:
      "Word Wrangler is a TexasNomad Games word game built around connecting adjacent letters, clearing words, cascades, time pressure, progression, and special tiles.",
    facts: [
      "Core play connects adjacent letters horizontally, vertically, or diagonally to make words.",
      "Completed words remove tiles, then letters cascade and refill.",
      "Longer words can earn more points or time.",
      "A browser Lab Edition has used an 8x8 board, 180-second rounds, and a 20-word goal.",
      "Special tiles discussed include Gold Bean, Diamond, Dexter, Microphone, and Ruby Bomb.",
      "The broader design includes progression, achievements, events, leaderboards, community challenges, creator support, offline modes, cloud sync, accessibility, and the TNG Arcade Hall.",
      "The product vision avoids pay-to-win and energy systems; monetization is intended to lean toward cosmetics and respectful player value."
    ]
  },
  {
    id: "see-that",
    title: "SEE THAT?!",
    aliases: ["see that", "see that!", "see that?!", "seethat", "hidden object game", "hidden objects"],
    category: "game",
    summary:
      "SEE THAT?! is TexasNomad Games' hidden-object game concept, where players inspect visual scenes and find target objects hidden in the environment.",
    facts: [
      "The core mechanic is visual searching: find designated objects inside a scene.",
      "The design uses clickable object or detection zones so the visual scene itself becomes interactive.",
      "Replayability concepts have included reusable scenes or backgrounds with different or randomized object placement.",
      "SEE THAT?! is part of the wider TNG ecosystem and has been envisioned as an Arcade Hall cabinet alongside games such as Word Wrangler, Square Biz!, and VIRAL!.",
      "Dexter should not invent a release date unless a current public project record supplies one."
    ]
  },
  {
    id: "viral",
    title: "VIRAL!",
    aliases: ["viral", "viral!", "viral game", "creator mansion", "stream strength", "ssp"],
    category: "game",
    summary:
      "VIRAL! is a TexasNomad Games creator-career board game where players build a fictional creator career by gaining followers, equipment, sponsorships, and Stream Strength while surviving challenges, setbacks, and viral moments.",
    facts: [
      "The master design uses a panoramic 120-space board for 1 to 12 players.",
      "Every board space triggers an effect.",
      "Space types include Followers Gain/Loss, Viral, Equipment, Challenge, Risk It, PAY, PLAY, Event, Sponsor, Progress Review, SAFE, and the final Creator Mansion.",
      "The win condition is at least one sponsorship, all required equipment, and 1,000,000 followers.",
      "Space 120 is Creator Mansion.",
      "Reaching Creator Mansion without meeting the win requirements moves the player into Endgame Mode until the missing conditions are completed.",
      "Stream Strength or SSP functions as a defensive shield resource.",
      "The locked AI roster in the master design is Dexter, Lemonade, Carlos, and Skie.",
      "The game follows the climb of a creator career through followers, equipment, sponsorships, challenges, viral events, and creator-industry pressure.",
      "The last confirmed project state treated VIRAL! as in development rather than one of the already-live TNG titles."
    ]
  },
  {
    id: "txd",
    title: "TXD",
    aliases: ["txd", "txd game"],
    category: "game",
    summary:
      "TXD is a named future or connected TexasNomad Games title that has appeared in planned TNG Arcade Hall concepts.",
    facts: [
      "Dexter knows TXD belongs to the TexasNomad Games family.",
      "Current confirmed public knowledge is not detailed enough to safely explain its gameplay without guessing."
    ]
  },
  {
    id: "creapd",
    title: "CREAPD",
    aliases: ["creapd", "create research produce present"],
    category: "software / AI production",
    summary:
      "CREAPD stands for Create. Research. Produce. Present. It is Berna's multi-format creative production platform for taking a project from idea through research, production, and presentation.",
    facts: [
      "Public site: https://www.creapd.com/",
      "CREAPD supports multiple creator and show formats rather than being limited to one type of content.",
      "Formats discussed include news, podcasts or talk, radio or music, sports, cooking, research, spirituality or religion, beauty or cosmetology, and other creator workflows.",
      "The product has been developed as a live public prototype while deeper research, generation, automation, and production functions continue to evolve.",
      "CREAPD is part production workflow and part creative operating system."
    ]
  },
  {
    id: "market-veggies",
    title: "Market Veggies",
    aliases: ["market veggies", "adventures of produce", "gary saves the market", "carrie's special recipe", "artie's cool energy", "gary", "carrie", "artie"],
    category: "books / children",
    summary:
      "Market Veggies is Berna's children's bedtime-story series where vegetable characters save the market using their natural nutritional benefits, with a family recipe at the end of every book.",
    facts: [
      "The educational idea is to teach kids why vegetables matter through story rather than a lecture.",
      "The Market is a shared world: different books can spotlight different vegetable heroes and characters may return later.",
      "Book 1 is Market Veggies Adventures of Produce: Book 1 - Gary Saves The Market.",
      "Gary is garlic. The Market gets sick; Gary gathers the garlics and uses garlic juice to help everyone get better, tying the story to garlic as an immune-supporting food.",
      "Book 1 end recipe: guacamole.",
      "Book 2 is Market Veggies Adventures of Produce: Book 2 - Carrie's Special Recipe.",
      "Carrie is a carrot. A thick fog hits the Market; Carrie makes carrot soup to help people through the fog, tying the story to carrots and vision.",
      "Book 2 end recipe: carrot soup.",
      "Zinat helped with illustrations on Book 2; Berna otherwise handles the project.",
      "Book 3 is Artie's Cool Energy. Artie is an artichoke.",
      "In Book 3, a heat wave hits the Market and Artie makes a cool artichoke refresher or smoothie to keep everyone cool and energized.",
      "Book 3 is already written and currently in production. No release date has been announced.",
      "Book 3 end recipe is Artie's Cool Refresher using artichoke, mint, ginger, honey, lemon, water, and ice.",
      "Both currently published books are $12 each on Amazon.",
      "Berna receives $3 from each $12 Market Veggies sale.",
      "Amazon series link: https://www.amazon.com/dp/B0D54PQC7N?binding=paperback&ref=dbs_dp_rwt_sb_pc_tpbk",
      "Future plans include stuffed plush versions of characters associated with the books."
    ]
  },
  {
    id: "ripe-realms",
    title: "Ripe Realms",
    aliases: ["ripe realms", "ripe realm", "pyren", "thistlem", "sporella", "helico", "swarmation", "naturamancy"],
    category: "novel / fantasy",
    summary:
      "Ripe Realms is Berna's first fantasy novel and first attempt at building a fully original fantasy world from scratch, with new creatures, characters, cultures, systems, conflicts, and enough worldbuilding to support a saga.",
    facts: [
      "Berna expects the world may become a saga because the setting is massive and supports many side stories and character arcs.",
      "A graphic-novel adaptation is also planned.",
      "Previously developed world and story material includes a transformative event involving three moons.",
      "The world includes Nature Beings and Shadow Shifters.",
      "The Harvest Council is part of the governing and political structure.",
      "Prejudice and conflict involving Shifters are important parts of the world.",
      "Helico Caterp and the Swarmation movement are part of the larger conflict.",
      "Recurring characters discussed include Pyren Pinegrove, Thistlem Thornkeep, and Sporella Mirthstone.",
      "World-specific systems include Naturamancy and Sporella's sporecery.",
      "No confirmed public release date is currently stored in Dexter's knowledge."
    ]
  },
  {
    id: "i-am-america",
    title: "I AM America",
    aliases: ["i am america", "iam america", "iamamericainc", "cie", "civic information engine"],
    category: "civic / community platform",
    summary:
      "I AM America is Berna's civic-information and community platform for helping people understand local information, organize resources, participate in community action, and build local self-sufficiency.",
    facts: [
      "Public site: https://www.iamamericainc.com",
      "The platform includes programs, events, resources, educational material, and local or city-focused information.",
      "A major site concept is the Civic Information Engine or CIE, intended to make city budgets, meetings, forms, events, and local civic data easier to understand and act on.",
      "The project emphasizes civic education, community development, voluntary cooperation, and citizen participation."
    ]
  },
  {
    id: "community-power-move",
    title: "Community Power Move",
    aliases: ["community power move", "citizen power move", "power move"],
    category: "I AM America initiative",
    summary:
      "Community Power Move is an I AM America citizen-action concept centered on temporarily redirecting work, spending, transportation, skills, and attention toward neighbors and local communities to demonstrate practical community power.",
    facts: [
      "The planned dates discussed were October 31 through November 2, 2026.",
      "The participation target discussed was 50,000 people.",
      "The initiative has been framed around voluntary community and citizen action."
    ]
  },
  {
    id: "citizens-currency",
    title: "Citizens Currency",
    aliases: ["citizens currency", "citizen currency", "cc", "cce"],
    category: "economic / exchange concept",
    summary:
      "Citizens Currency is Berna's proposed peer-exchange currency concept for enabling people to trade goods, services, and productivity by mutual agreement outside ordinary dollar-only exchange.",
    facts: [
      "The current name is Citizens Currency or CC; the earlier CCE name was discontinued.",
      "Participants start at zero with a baseline spending capacity of 1,000 CC.",
      "The concept treats productivity as a way to increase spending capacity, including goods made, services performed, creative work, and entertainment.",
      "If a participant spends down to the negative limit without contributing, access halts until they contribute again.",
      "The design aims for stable pricing on existing designs rather than automatic inflation.",
      "The long-term ambition is for CC to be useful for increasingly ordinary transactions when both sides agree."
    ]
  },
  {
    id: "american-creative-ventures",
    title: "American Creative Ventures",
    aliases: ["american creative ventures", "acv"],
    category: "business builder",
    summary:
      "American Creative Ventures or ACV is Berna's business-builder and solutions company concept, with business services, founder incubation, and longer-term real-estate and acquisition ambitions.",
    facts: [
      "Discussed divisions include Business Solutions, the ACV Founders Program, and Real Estate or Acquisition.",
      "The Founders Program has been designed to help people build businesses, with special interest in people who have faced instability or barriers.",
      "The broader concept includes practical product and business incubation."
    ]
  },
  {
    id: "tactalk",
    title: "TacTalk",
    aliases: ["tactalk", "tac talk"],
    category: "social app",
    summary:
      "TacTalk is Berna's playful classic-chat-room app concept built around themed rooms, deliberately ridiculous jargon, social interaction, and a virtual currency called tacs.",
    facts: [
      "Discussed areas include Lobby, Rooms, My Board, and themed spaces such as Zen Room.",
      "Pinned notes can use the virtual currency tac.",
      "The project intentionally leans into comedic jargon and a silly social atmosphere.",
      "The logo concept has used a cork-board idea."
    ]
  },
  {
    id: "bernaplan",
    title: "BernAPlan",
    aliases: ["bernaplan", "berna plan"],
    category: "software / productivity",
    summary:
      "BernAPlan is Berna's local desktop planning command center for goals, priorities, work blocks, weekly goals, non-negotiables, progress, and deciding what needs attention right now.",
    facts: [
      "BernAPlan is designed as local desktop software rather than a cloud subscription product.",
      "Beta v0.4.2 was publicly released on September 16, 2026 as BernAPlan_Setup_Studio_v0.4.2.zip.",
      "GitHub repo: davidhambern-ship-it/BernAPlan",
      "The initial free beta offer was time-limited, so Dexter must not claim the current price or free status without a newer public record."
    ]
  },
  {
    id: "bernaqr",
    title: "BernAQR",
    aliases: ["bernaqr", "berna qr", "qr generator"],
    category: "software / lab",
    summary:
      "BernAQR is a Berna-built QR generation and customization station featured in the HireBerna Lab.",
    facts: [
      "The public Lab concept has included generate, customize, brand, CTA, scan-safety estimate, and PNG or SVG export.",
      "It is intended as a usable public demonstration rather than only a static design mockup."
    ]
  },
  {
    id: "texasnomad-network",
    title: "TexasNomad Network",
    aliases: ["texasnomad network", "texas nomad network", "tnn"],
    category: "media network",
    summary:
      "TexasNomad Network or TNN is the broadcast and media-network side of TexasNomad, centered on music, news, live programming, interviews, creator content, and recurring shows.",
    facts: [
      "TNN is the network or broadcast side, while TexasNomad Productions creates the shows and content.",
      "Programming concepts have included morning or news briefs, midday and evening updates, music blocks, creator spotlights, state spotlights, Made in America, interviews, weekend specials, breaking-news coverage, podcasts, documentaries, livestreams, and music sessions.",
      "The network has been envisioned as a digital media destination rather than only one show."
    ]
  },
  {
    id: "texasnomad-productions",
    title: "TexasNomad Productions",
    aliases: ["texasnomad productions", "texas nomad productions"],
    category: "production company",
    summary:
      "TexasNomad Productions is the content-production arm in the TexasNomad and BERNA ecosystem.",
    facts: [
      "A simple relationship used in the brand architecture is: Productions creates; Network broadcasts.",
      "Shows, livestreams, documentaries, interviews, music sessions, and other media concepts can sit under the Productions umbrella."
    ]
  },
  {
    id: "bernatune",
    title: "BernATune",
    aliases: ["bernatune", "berna tune", "@bernatune", "youtube", "youtube channel"],
    category: "music / channel",
    summary:
      "BernATune is Berna's public music identity and channel. The confirmed YouTube handle is @BernATune.",
    facts: [
      "Confirmed YouTube and music handle: @BernATune.",
      "Dexter should not invent subscriber counts because those can change."
    ]
  },
  {
    id: "the-come-up",
    title: "The Come Up pt.1",
    aliases: ["the come up", "the come up pt.1", "the come up pt 1", "rap album", "hip hop album"],
    category: "music",
    summary:
      "The Come Up pt.1 is Berna's confirmed rap and hip-hop project title.",
    facts: [
      "Confirmed title: The Come Up pt.1.",
      "Dexter should not invent a track list, release date, platform, sales, or streaming numbers unless a current public record supplies them."
    ]
  },
  {
    id: "rock-album",
    title: "BERNA Rock Album",
    aliases: ["rock album", "berna rock", "dexter band", "skie rock song"],
    category: "music",
    summary:
      "Berna has been developing a rock-album visual universe with Dexter as the frontman and primary guitarist, a recurring band, and Skie as the featured female performer when songs call for female vocals.",
    facts: [
      "The visual direction uses the claymation-style universe established in earlier BERNA visuals.",
      "The sound and visual tone is emo-leaning and scream-heavy while the band should look like stylish normal musicians rather than exaggerated rock stereotypes.",
      "The band setup includes Dexter as frontman and primary guitarist, plus drummer, second guitarist, and bassist."
    ]
  },
  {
    id: "404",
    title: "404",
    aliases: ["404", "human not found", "reality not found", "sanity not found"],
    category: "series / media",
    summary:
      "404 is a BernaVerse series concept organized around themed seasons such as Human Not Found, Reality Not Found, and Sanity Not Found.",
    facts: [
      "Confirmed season subtitles discussed include Human Not Found, Reality Not Found, and Sanity Not Found.",
      "Dexter should not invent episode plots or release schedules."
    ]
  },
  {
    id: "shows",
    title: "Berna Shows & Live Concepts",
    aliases: ["shows", "podcasts", "podcast", "live shows", "bigo shows", "berean truth project", "smoke drinks and side eyes", "98.8 berna radio"],
    category: "media",
    summary:
      "Berna has developed multiple distinct show and live-media concepts across civic, religious, variety, music, news, and interactive entertainment formats.",
    facts: [
      "I AM America is the civic, current-events, and community-focused media concept tied to the broader I AM America platform.",
      "The Berean Truth Project is a religion, spirituality, and truth-focused discussion and study concept.",
      "Smoke, Drinks & Side Eyes is a free-for-all variety and live-hangout concept combining dark humor, relationships, comedy, games, music, cooking, reactions, and controlled chaos.",
      "98.8 BERNA radio is a comedic radio-ID and smooth-jazz-style media running concept.",
      "TexasNomad Network also contains news, music, interviews, spotlights, livestreams, and other programming."
    ]
  },
  {
    id: "stoner-bunnies",
    title: "Stoner Bunnies",
    aliases: ["stoner bunnies"],
    category: "book / creative",
    summary:
      "Stoner Bunnies is a confirmed Berna creative and book property.",
    facts: [
      "Dexter has the project title confirmed.",
      "Current confirmed public knowledge is not sufficient to safely invent or summarize the plot."
    ]
  },
  {
    id: "twilight-of-tomorrow",
    title: "Twilight of Tomorrow",
    aliases: ["twilight of tomorrow"],
    category: "book",
    summary:
      "Twilight of Tomorrow is a confirmed Berna book project.",
    facts: [
      "Dexter should identify it as part of Berna's creative catalog.",
      "Dexter should not invent plot, publication status, or release timing."
    ]
  },
  {
    id: "the-takeover",
    title: "The Takeover",
    aliases: ["the takeover"],
    category: "book",
    summary:
      "The Takeover is a confirmed Berna book project.",
    facts: [
      "Dexter should identify it as part of Berna's creative catalog.",
      "Dexter should not invent plot, publication status, or release timing."
    ]
  },
  {
    id: "bernascent",
    title: "BernAScent Candles",
    aliases: ["bernascent", "berna scent", "bernascent candles"],
    category: "product / brand",
    summary:
      "BernAScent is Berna's custom-candle and product-brand project.",
    facts: [
      "BernAScent belongs to Berna's broader creative and business catalog.",
      "Dexter should not invent active inventory, scents, prices, or purchase links without a current public record."
    ]
  },
  {
    id: "movingberna",
    title: "MovingBerna",
    aliases: ["movingberna", "moving berna"],
    category: "service business / portfolio",
    summary:
      "MovingBerna was Berna's DFW moving-service business and project combining moving, packing, cleaning, and related services with a Berna-built brand and website.",
    facts: [
      "Berna developed brand and logo concepts, website, collateral, messaging, and service presentation.",
      "Historical pricing exists in older portfolio records, but Dexter should prefer current live HireBerna records before quoting old prices."
    ]
  },
  {
    id: "mata",
    title: "Miss A's Tutoring Academy",
    aliases: ["miss a's tutoring academy", "miss as tutoring academy", "mata", "m.a.t.a."],
    category: "education / client project",
    summary:
      "Miss A's Tutoring Academy or M.A.T.A. is a tutoring-service project centered on small, hands-on learning in a comfortable environment with fewer classroom distractions.",
    facts: [
      "Berna's portfolio includes website and online work for the academy.",
      "The service concept emphasized a hands-on, smaller learning environment."
    ]
  },
  {
    id: "youre-ministries",
    title: "YOURE Ministries",
    aliases: ["youre ministries", "you're ministries"],
    category: "ministry / client project",
    summary:
      "YOURE Ministries is a Christian outreach organization and project focused especially on homelessness, incarceration, and practical help for people in need.",
    facts: [
      "Discussed programs include Home-Less Outreach, Convicted, Not Condemned, and YOUR Needs.",
      "Berna also built branding and web materials for the organization."
    ]
  },
  {
    id: "client-legacy-work",
    title: "Additional Client & Legacy Work",
    aliases: ["gorgeous joy", "christianexplosive", "christian explosive", "dane promotions", "habits smoke shop", "workingberna"],
    category: "portfolio / client work",
    summary:
      "HireBerna's broader history includes earlier websites, branding, and creative projects such as Gorgeous Joy, ChristianExplosive, Dane Promotions, Habits Smoke Shop, and WorkingBerna.",
    facts: [
      "These projects are part of the broader record of Berna's website, brand, and creative work.",
      "Dexter should not invent client outcomes, revenue, dates, or current business status unless the current site supplies them."
    ]
  },
  {
    id: "services",
    title: "Berna Services & Skills",
    aliases: ["skills", "talents", "services", "what can berna do", "what does berna do", "hire berna for"],
    category: "skills / services",
    summary:
      "Berna works across strategy, branding, marketing, AI workflows, websites, product planning, creative direction, business systems, games, media, and communication.",
    facts: [
      "Public skill areas include brand positioning, messaging systems, campaign and growth strategy, content systems, AI use-case design, prompt systems, internal tools, workflow and process automation, creative direction, short-form video, launch assets, and business operating systems.",
      "Other recurring capabilities include UX and UI planning, website building, graphic design, copywriting, product planning, game and experience design, and music or media concepts.",
      "Berna's working style often connects strategy, creativity, and execution instead of treating them as isolated services."
    ]
  }
];
