const nines = [
  "abandoned",
  "abhorrent",
  "abounding",
  "absorbing",
  "acoustics",
  "adaptable",
  "adjoining",
  "adventure",
  "aftermath",
  "afternoon",
  "agonizing",
  "agreeable",
  "agreement",
  "alcoholic",
  "ambiguous",
  "ambitious",
  "amusement",
  "apathetic",
  "apologise",
  "apparatus",
  "appliance",
  "authority",
  "automatic",
  "available",
  "axiomatic",
  "barbarous",
  "beautiful",
  "befitting",
  "boundless",
  "breakable",
  "calculate",
  "carpenter",
  "ceaseless",
  "celebrate",
  "challenge",
  "childlike",
  "chocolate",
  "cluttered",
  "combative",
  "committee",
  "concerned",
  "condemned",
  "condition",
  "conscious",
  "consonant",
  "dangerous",
  "deafening",
  "defective",
  "delicious",
  "delirious",
  "dependent",
  "depressed",
  "different",
  "difficult",
  "digestion",
  "dinosaurs",
  "direction",
  "disappear",
  "discovery",
  "disgusted",
  "disturbed",
  "divergent",
  "draconian",
  "education",
  "efficient",
  "embarrass",
  "enchanted",
  "encourage",
  "endurable",
  "energetic",
  "entertain",
  "excellent",
  "exclusive",
  "existence",
  "expansion",
  "expensive",
  "exuberant",
  "fanatical",
  "fantastic",
  "foregoing",
  "forgetful",
  "fortunate",
  "furniture",
  "garrulous",
  "glamorous",
  "grandiose",
  "grotesque",
  "guarantee",
  "guiltless",
  "happiness",
  "hilarious",
  "honorable",
  "imaginary",
  "impartial",
  "imperfect",
  "important",
  "influence",
  "insidious",
  "insurance",
  "interfere",
  "interrupt",
  "introduce",
  "invention",
  "jellyfish",
  "judicious",
  "knowledge",
  "laughable",
  "ludicrous",
  "lunchroom",
  "luxuriant",
  "maddening",
  "makeshift",
  "malicious",
  "marvelous",
  "miniature",
  "miscreant",
  "momentous",
  "necessary",
  "noiseless",
  "nostalgic",
  "obnoxious",
  "observant",
  "overjoyed",
  "overrated",
  "panoramic",
  "passenger",
  "perpetual",
  "plausible",
  "pointless",
  "political",
  "pollution",
  "psychotic",
  "quicksand",
  "quizzical",
  "rainstorm",
  "receptive",
  "recognise",
  "recondite",
  "redundant",
  "reproduce",
  "repulsive",
  "righteous",
  "scarecrow",
  "scattered",
  "secretary",
  "secretive",
  "selection",
  "selective",
  "shivering",
  "sparkling",
  "spiritual",
  "squealing",
  "squeamish",
  "statement",
  "steadfast",
  "structure",
  "substance",
  "tasteless",
  "telephone",
  "temporary",
  "territory",
  "thinkable",
  "toothsome",
  "transport",
  "treatment",
  "truculent",
  "unadvised",
  "uncovered",
  "underwear",
  "unequaled",
  "unhealthy",
  "unnatural",
  "unsightly",
  "unwritten",
  "uttermost",
  "vegetable",
  "vivacious",
  "voiceless",
  "voracious",
  "wandering",
  "wednesday",
  "whimsical",
  "wholesale",
  "woebegone",
  "wonderful",
  "worthless",
];

function getWord() {
  return nines[Math.floor(Math.random() * nines.length)];
}

export default getWord;
