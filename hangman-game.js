const Discord = require('discord.js');

const possible_words = ["medicine", "situation", "hall", "desk", "hotel", "president", "thought", "method", "village", "user", "blood", "math", "highway", "agency", "intention", "marriage", "poet", "student", "pollution", "office", "insurance", "person", "health", "session", "warning", "attitude", "analysis", "trainer", "paper", "attention", "currency", "chocolate", "depth", "dealer", "dinner", "night", "drawer", "tennis", "singer", "virus", "college", "oven", "uncle", "arrival", "recording", "sector", "flight", "emotion", "meaning", "moment", "elevator", "lab", "teaching", "ad", "sister", "artisan", "memory", "studio", "goal", "currency", "employer", "camera", "marketing", "quantity", "clothes", "tale", "leader", "solution", "cousin", "republic", "signature", "idea", "moment", "basket", "homework", "hospital", "direction", "potato", "death", "scene", "committee", "version", "childhood", "manager", "menu", "mud", "people", "love", "king", "drawing", "housing", "hearing", "insect", "lake", "gate", "category", "theory", "movie", "inflation", "media", "arrival", "week", "outcome", "health", "recipe", "payment", "oven", "inspector", "intention", "song", "apartment", "dirt", "food", "medicine", "growth", "funeral", "concept", "throat", "reality", "mud", "awareness", "sister", "context", "cancer", "actor", "bread", "uppity", "shallow", "wrist", "body", "develop", "ground", "snails", "squealing", "drug", "army", "sad", "cherries", "rabbit", "rock", "helpless", "flowers", "cows", "ready", "zany", "yellow", "save", "listen", "accidental", "tacky", "horrible", "flagrant", "nervous", "flock", "bear", "cure", "bag", "mom", "cup", "wed", "letter", "eggs", "illumine", "sheet", "dusty", "frogs", "aboard", "bed", "reply", "receipt", "grandiose", "shrill", "new", "dump", "painstaking", "journey", "month", "passenger", "scam", "tree", "determine", "town", "hinder", "book", "mammoth", "shun", "resemble", "face", "toys", "card", "act", "zonked", "ill", "foretell", "tame", "encouraging", "action", "possessive", "imperfect", "angle", "determined", "present", "contract", "waggish", "lazy", "produce", "mute", "spectacular", "restrain", "time", "horn", "thought", "special", "physical", "boil", "lock", "accurate", "bridge", "confuse", "fiction", "airplane", "placid", "team", "serious", "dependent", "crave", "girl", "burn", "blow", "separate", "person", "cower", "vomit", "run", "stretch", "handy", "efficient", "stitch", "hoax", "blush", "net", "far", "fax", "boy", "doctor", "cellar", "knotty", "compare", "view", "sew", "madly", "chubby", "damp", "touch", "numberless", "halting", "innocent", "glance", "insure", "cup", "crack", "mature", "instrument", "google", "engine", "damage", "burst", "rampant", "describe", "observant", "exchange", "penitent", "intelligent", "install", "courageous", "terrible", "agreeable", "system", "inspire", "pretty", "book", "bell", "teach", "step", "rend", "curve", "squealing", "act", "dispensable", "ants", "gabby", "jar", "pollute", "hair", "request", "omit", "conduct", "afterthought", "axiomatic", "earthquake", "convey", "fall", "irritating", "peep", "fortunate", "capture", "sever", "burn", "egg", "dusty", "aromatic", "stranger", "self", "compete", "busy", "sack", "vase", "conduct", "overtake", "colour", "appliance", "shut", "base", "history", "rot", "uptight", "contest", "clever", "dwell", "quince", "lunchroom", "carpenter", "animate", "fallacious", "evaporate", "mean", "present", "fertile", "painful", "window", "knotty", "complain", "willing", "spy", "bind", "stupendous", "nourish", "thinkable", "satisfying", "feigned", "superb", "makeshift", "ducks", "show", "warlike", "let", "brave", "convert", "resolute", "innovate", "irate", "limping", "omniscient", "conclude", "thing", "mind", "snakes", "finger", "whole", "brave", "existence", "bird", "obstruct", "snobbish", "acquire", "certain", "rough", "pay", "star", "squirrel", "sash", "alluring", "efficacious", "snobbish", "fierce", "lavish", "naughty", "crime", "insidious", "entertaining", "threatening", "tense", "abash", "nimble", "wiry", "disobey", "walk", "dwell", "greedy", "drop", "give", "parcel", "secret", "expect", "inscribe", "want", "hunt", "purring", "pastoral", "taste", "exchange", "dry", "many", "see", "sew", "laugh", "condition", "violate", "psychedelic", "pathetic", "fair", "cover", "cling", "greet", "pump", "boys", "sulky", "quickest", "hanging", "mammoth", "glance", "alarm", "engine", "grandiose", "guarded", "prohibit", "invite", "vigorous", "split", "agreeable", "modify", "nasty", "trousers", "sail", "defective", "shame", "", "pest", "friendly", "tap", "stimulating", "apply", "disuse", "education", "collect", "apply", "infamous", "chide", "grade", "fantastic", "educat", "touch", "carve", "conserve", "join", "appear", "quilt", "silly", "rewind", "smell", "ordinary", "historical", "wring", "frame", "lumpy", "powerful", "leap", "crowd", "ducks", "husky", "amazing", "invite", "thirsty", "fretful", "undesirable", "month", "racial", "marble", "erase", "love", "nutritious", "implant", "renounce", "shocking", "awake", "participate", "harsh", "satirise", "carry", "bored", "fortunate", "display", "light", "wilderness", "tacit", "distance", "enter", "inject", "comment", "rain", "type", "adamant", "steam", "taste", "mice", "grind", "sweltering", "debonair", "song", "fight", "idealize", "boil", "consort", "note", "grubby", "awesome", "ooze", "puzzling", "purify", "convict", "lyrical", "resolute", "tender", "imaginary", "catch", "chunky", "watch", "see", "climb", "behold", "spurious", "leg", "taboo", "overwrought", "furry", "tax", "amazing", "straight", "month", "review", "door", "obscene", "outstanding", "find", "ambitious", "distance", "next", "match", "wet", "blush", "berserk", "come", "super", "nutty", "urge", "snap", "tender", "verify", "airport", "nervous", "shed", "cave", "dwell", "dead", "boast", "territory", "fine", "love", "trade", "fragile", "station", "impose", "cough", "nappy", "shout", "colour", "change", "nifty", "vengeful", "scientific", "heat", "inflame", "giants", "toy", "imbibe", "women", "crack", "idea", "scale", "observation", "stereotyped", "shelf", "obsequious", "shock", "chin", "banish", "convey", "signify", "curve", "stingy", "jumbled", "stew", "corn", "instrument", "sew", "propose", "smite", "ruthless", "weep", "assert", "test", "shake", "knee", "burly", "head", "slam", "misty", "cattle", "goofy", "astonish", "cherry", "copper", "feet", "class", "prose", "perpetual", "common", "rewind", "place", "skillful", "sort", "join", "reduce", "country", "overflow", "placid", "respect", "clammy", "jewel", "milk", "park", "self", "smash", "die", "toy", "bloody", "romantic", "implode", "add", "change", "transfer", "fairies", "vast", "week", "sloppy", "transport", "pour", "protest", "boundary", "dispose", "degree", "inspire", "scabble", "highfalutin", "makeshift", "shut", "butter", "fail", "available", "behold", "bustling", "smash", "waste", "saunter", "poised", "yarn", "cower", "stink", "weak", "humor", "sharp", "relax", "spotty", "true", "closed", "jam", "ship", "damp", "nifty", "dock", "cast", "hydrant", "state", "thing", "gleaming", "bite", "invention", "left", "eager", "vex", "hurt", "imagine", "gamy", "zinc", "scam", "camera", "cracker", "bright", "teeny", "riddle", "acid", "choose", "man", "swell", "charge", "recast", "inflame", "living", "spiky", "man", "brush", "gainsay", "blow", "migrate", "sink", "terrify", "destroy", "normal", "steadfast", "insurance", "loving", "changeable", "pencil", "beautify", "compete", "pen", "roar", "marry", "glamorous", "rampant", "tree", "powerful", "love", "print", "macho", "implant", "example", "creepy", "vast", "death", "alert", "gullible", "scab", "delay", "jelly", "shake", "open", "dock", "rule", "robust", "corrod", "farmer", "faint", "jobless", "selection", "beg", "guide", "large", "police", "future", "vulgar", "complain", "color", "damaging", "blood", "oppress", "sulky", "lawyer", "wren", "sleep", "grade", "nimble", "direful", "cute", "exist", "chairs", "push", "discreet", "vex", "curtain", "counsel", "holiday", "discover", "limit", "measly", "love", "observe", "omit", "alcoholic", "wash", "meet", "far", "pencil", "redundant", "organic", "gamy", "tough", "warn", "linen", "beast", "fall", "expensive", "cannon", "kill", "flower", "illegal", "town", "functional", "whispering", "right", "relax", "quick", "detect", "mellow", "sassy", "lovely", "quince", "table", "guard", "ring", "tidy", "place", "cheap", "disgust", "quill", "unused", "decorous", "station", "purring", "store", "dapper", "separate", "trail", "push", "cause", "ready", "forbid", "relax", "legs", "rise", "save", "return", "stitch", "quartz", "brush", "female", "run", "flop", "grandmother", "healthy", "spring", "grain", "difficult", "incise", "fight", "abject", "voracious", "dapper", "sound", "pest", "greet", "writer", "enlighten", "store", "bet", "lyrical", "reuse", "ignore", "melt", "week", "relate", "curvy", "silent", "heavenly", "leather", "gabby", "endorse", "abrasive", "read", "son", "club", "coil", "bash", "godly", "ragged", "mould", "promise", "bait", "gainsay", "book", "dash", "clumsy", "gain", "disagreeable", "chat", "lacking", "scab", "shaggy", "resolve", "telling", "renew", "roar", "learning", "reduce", "piquant", "scale", "creator", "tart", "happy", "learned", "measure", "correct", "crush", "cope", "art", "country", "thump", "contrive", "elegant", "mailbox", "symptomatic", "scant", "letter", "lick", "conquer", "suppose", "exclude", "female", "bustling", "show", "needy", "beautiful", "representative", "imperil", "learning", "growth", "bashful", "kid", "carry", "retain", "set", "careless", "frantic", "touch", "wave", "dwell", "leap", "agree", "ball", "pardon", "beggar", "frame", "soda", "scared", "swim", "statement", "contribute", "dynamic", "fallacious", "install", "tiresome", "beseech", "abate", "fallacious", "bray", "cable", "cost", "foot", "chicken", "balloon", "sidewalk", "classify", "tough", "sheep", "bit", "tender", "beneficial", "flippant", "attractive", "magnificent", "pricey", "illegal", "fierce", "stitch", "like", "suffer", "break", "feast", "hill", "mammoth", "spotted", "wise", "stupid", "collapse", "sail", "plucky", "impinge", "expert", "flop", "harsh", "hammer", "concerned", "battle", "sag", "break", "honorable", "salvage", "aspiring", "abiding", "cautious", "breakable", "normal", "sleep", "assorted", "float", "medical", "birds", "adjustment", "hate", "contrive", "coast", "shiver", "invent", "exuberant", "fixed", "friends", "visitor", "motivate", "dolls", "tax", "subtract", "lazy", "crime", "disobey", "resonant", "ugliest", "daughter", "representative", "snow", "envious", "growth", "father", "racial", "persuade", "rich", "scan", "throw", "coil", "hapless", "paint", "elderly", "compare", "teach", "fetch", "winter", "hurried", "historical", "party", "comfortable", "saponify", "sink", "profit", "sticky", "heavenly", "aloof", "find", "encourage", "boorish", "impress", "force", "family", "fight", "handy", "stem", "far", "desk", "discreet", "five", "robust", "thrive", "murmur", "far", "obeisant", "venomous", "versed", "bash", "earsplitting", "beggar", "guarded", "disturbed", "solicit", "forlese", "great", "friend"];

//unicode fun...
const letterEmojisMap = {
    "🅰️": "A", "🇦": "A", "🅱️": "B", "🇧": "B", "🇨": "C", "🇩": "D", "🇪": "E",
    "🇫": "F", "🇬": "G", "🇭": "H", "ℹ️": "I", "🇮": "I", "🇯": "J", "🇰": "K", "🇱": "L",
    "Ⓜ️": "M", "🇲": "M", "🇳": "N", "🅾️": "O", "⭕": "O", "🇴": "O", "🅿️": "P",
    "🇵": "P", "🇶": "Q", "🇷": "R", "🇸": "S", "🇹": "T", "🇺": "U", "🇻": "V", "🇼": "W",
    "✖️": "X", "❎": "X", "❌": "X", "🇽": "X", "🇾": "Y", "💤": "Z", "🇿": "Z"
}

// class HangmanGame
class HangmanGame {
    constructor() {
        this.gameEmbed = null;
        this.inGame = false;
        this.word = "";
        this.guesssed = [];
        this.wrongs = 0;
    }

    newGame(msg) {
        if (this.inGame)
            return;

        this.inGame = true;
        this.word = possible_words[Math.floor(Math.random() * possible_words.length)].toUpperCase();
        this.guesssed = [];
        this.wrongs = 0;


        const Hangman = new Discord.MessageEmbed()
            .setColor(0x851CC5)
            .setTitle('ஹேங்மேன்')
            .setDescription(this.getDescription(), 'Credits go to TurkeyDev')
            .addField('கடிதங்கள் யூகிக்கப்பட்டன', '\u200b')
            .addField('எப்படி விளையாடுவது', "எழுத்துக்களைப் போல இருக்கும் ஈமோஜிகளைப் பயன்படுத் இந்தச் செய்தியை எதிர்கொள்ளவும் (🅰️, 🇹, )")
            .setTimestamp();

        msg.channel.send(Hangman).then(emsg => {
            this.gameEmbed = emsg;
            this.waitForReaction();
        });
    }

    makeGuess(reaction) {
        if (Object.keys(letterEmojisMap).includes(reaction)) {
            const letter = letterEmojisMap[reaction];
            if (!this.guesssed.includes(letter)) {
                this.guesssed.push(letter);

                if (this.word.indexOf(letter) == -1) {
                    this.wrongs++;

                    if (this.wrongs == 6) {
                        this.gameOver(false);
                    }
                }
                else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
                    this.gameOver(true);
                }
            }
        }

        if (this.inGame) {
            const HMEmbed = new Discord.MessageEmbed()
                .setColor(0x851CC5)
                .setTitle('ஹேங்மேன்', 'Credits go to TurkeyDev')
                .setDescription(this.getDescription())
                .addField('கடிதங்கள் யூகிக்கப்பட்டன', this.guesssed.length == 0 ? '\u200b' : this.guesssed.join(" "))
                .addField('எப்படி விளையாடுவது', "எழுத்துக்களைப் போல இருக்கும் ஈமோஜிகளைப் பயன்படுத்தி இந்தச் செய்தியை எதிர்கொள்ளவும் (🅰️, 🇹, )")
                .setTimestamp();
            this.gameEmbed.edit(HMEmbed);
            this.waitForReaction();
        }
    }

    gameOver(win) {
        this.inGame = false;
        const ChatHMEmbed = new Discord.MessageEmbed()
            .setColor(0x851CC5)
            .setTitle('ஹேங்மேன்')
            .setDescription((win ? "அரட்டை வென்றது!" : "அரட்டை இழக்கிறது") + "\n\nஎன்ற வார்த்தை இருந்தது:\n" + this.word, 'Credits go to TurkeyDev')
            .setTimestamp();
        this.gameEmbed.edit(ChatHMEmbed);

        this.gameEmbed.reactions.removeAll();
    }

    getDescription() {
        return "```"
            + "|‾‾‾‾‾‾|   \n|     "
            + (this.wrongs > 0 ? "🎩" : " ")
            + "   \n|     "
            + (this.wrongs > 1 ? "😟" : " ")
            + "   \n|     "
            + (this.wrongs > 2 ? "👕" : " ")
            + "   \n|     "
            + (this.wrongs > 3 ? "🩳" : " ")
            + "   \n|    "
            + (this.wrongs > 4 ? "👞👞" : " ")
            + "   \n|     \n|__________\n\n"
            + this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").join(" ")
            + "```";
    }

    waitForReaction() {
        this.gameEmbed.awaitReactions(() => true, { max: 1, time: 300000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                this.makeGuess(reaction.emoji.name);
                reaction.remove();
            })
            .catch(collected => {
                this.gameOver(false);
            });
    }
}

module.exports = HangmanGame;
