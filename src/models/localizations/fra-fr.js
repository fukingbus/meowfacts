const facts = [
  "En 2021, la France compte plus de 14 millions de chats contre seulement 8 millions de chiens.",
  "Les chats vivant dans le même foyer se frottent tête contre tête pour montrer leurs intentions pacifistes. Les chatons le font encore plus souvent, surtout quand ils sont excités.",
  "La maman chat apprend à ses chatons à utiliser la litière.",
  "La façon de traiter des chatons les premiers mois affectera leurs personnalités tout au long de leurs vies.",
  "Contrairement à une croyance populaire, le chat est un animal sociable. Il réagit à la parole et apprécie la compagnie.",
  "Bien traité, un chat peut vivre au delà de 20 ans. Mais l'espérance de vie d'un chat domestique se situe plus vers les 14 ans.",
  "Castrer un chat augmente sa durée de vie de 2 ou 3 ans.",
  "Les chats, surtout vieux, peuvent avoir le cancer. La plupart peuvent cependant se guérir.",
  "Les chats ne peuvent pas ressentir le goût du sucré.",
  "Les lipides représentent la première source d’énergie pour les chats. De même, les acides gras, comme les Oméga 3 et Oméga 6, améliorent la qualité des poils, de la peau et de la santé du système nerveux de l'animal",
  "Plusieurs plantes domestiques sont un poison pour les chats, comme par exemple: le lierre, les iris, le gui, le philodendron ou le boid d'if.",
  "Comme pour le chien, le chocolat est un poison pour le chat.",
  "La plupart des chats ne digèrent pas le lait de vache. Les produits laitiers leurs donnent la diarée.",
  "Le repas moyen servi à un chat dans sa gamelle est équivalent à environ 5 souris.",
  "Les chats peuvent attraper le ténia (ver solitaire) en avalant des puces. Ce ver vit à l'intérieur de l'intestin et doit être supprimé médicalement. Il se nourrit de la nourriture ingurgitée par le chat. Il peut vivre jusqu'à 30 ans et atteindre 10 mètres de long.",
  "Les chats peuvent attraper le ténia (ver solitaire) en croquant une souris. Si votre chat en attrape une, il est préférable de lui prendre avant qu'il ne la mange.",
  "Une forme de SIDA existe chez le chat.",
  "Tous les chatons siamois, bien qu'intégralement blancs à la naissance, développent des colorations visibles dès les premiers jours sur les parties les moins chaudes du corps.",
  "Les chattons siamois naissent intégralement blancs en raison de la chaleur à l'intérieur du corps de leur mère. Elle empêche les poils de foncer aux pointes.",
  "Les personnes allergiques aux chats sont sensibles à sa salive et son sebum. Si un chat est baigné régulièrement, cela sera bien plus tolérable pour ces personnes.",
  "Les glandes salivaires et sébacées (glandes de la peau) du chat sécrètent une substance allergène. La production de la protéine étant stimulée par les hormones sexuelles, des études ont montré que les chattes stérilisées et chats castrés étaient moins « allergisants » en raison de leur faible taux de testostérones et de progestérones.",
  "Les chats ne pensent pas qu'ils sont petits mais que nous sommes de très grands chats. Cela influence leur comportement de beaucoup de façons.",
  "Le chat est sujet à la gengivite et aux carries. Il doit avoir ses dents détartrées par le vétérinaire une fois par an.",
  "La toxoplasmose peut se transmettre du chat à l'homme, c'est pourquoi il est déconseillé aux femmes enceintes de changer la litière de leur animal de compagnie. Cette maladie du chat n'est pas dangereuse pour l'être humain en général.",
  "L'ancêtre de tous les chats domestiques est un chat sauvage d'Afrique qui existe toujours aujourd'hui.",
  "Dans l'ancienne Egypte, tuer un chat était passible de la peine de mort.",
  "Dans l'ancienne Egypte, les chats étaient mommifiés et des souris embaumées étaient placées dans leur tombe. Dans une ancienne ville, près de 300 000 mommies de chat ont été retrouvées.",
  "Au moyen age, pendant le festival de Saint John, les chats étaient brulés vivants en places publiques.",
  "Le premier spectacle de chats dâte de 1871 au Crystal Palace de Londres.",
  "De nos jours, on dénombre environ 100 races distinctes de chat domestique.",
  "Comme les oiseaux, les chats ont une capacité à retrouver leur maison. Cela fait appel à leur horloge biologique, l'angle du soleil et le champ magnétique terrestre. Un chat éloigné de sa maison peut y retourner. En revanche, si le propriétaire d'un chat part loin de sa maison, le chat ne pourra pas le trouver.",
  "Les chats enterrent leurs excréments pour se protéger des prédateurs.",
  "Le chat peut dormir 16 à 18 heures par jour. Quand il dort, il reste sensible aux stimulis. Si on touche le bout de la queue d'un chat endormi, il réagira.",
  "Avec plus de 67 millions de cellules, le système olfactif du chat est bien supérieur à celui des humains.",
  "Comme tous les mammifères, le chat est doté de l'organe de Jacobson mais il est bien plus développé chez celui ci. C’est par cet organe qu’il perçoit les phéromones.",
  "Le chlore contenu dans l'eau du robinet irrite les cellules olfactives du chat. Laissez l'eau reposer 24 heures à l'air libre avant de le donner à votre chat.",
  "Abraham Lincoln adorait les chats. Il en avait quatre à la maison blanche durant sa présidence.",
  "Julius Ceasar, Henri II, Charles XI, and Napoleon étaient tous effrayés par les chats",
  "Le chat a en moyenne 24 moustaches, disposées en 4 lignes horizontales de chaque côté.",
  "Le mot chat dans différentes langues: Allemand: katze; Italien: gatto; Espagnol/Portugais: gato; Yiddish: kats; Maltais: qattus; Suèdois/Norvègien: katt; Hollandais: kat; Islandique: kottur; Grecques: catta; Hindou: katas; Japanais:neko; Polonais: kot; Ukranien: kotuk; Hawiien: popoki; Russe: koshka; Latin: cattus; Egyptien: mau; Turques: kedi; Armenien: Gatz; Chinois: mio; Arabe: biss; Indonesien: qitta; Bulgare: kotka; Malay: kucing; Thai/Vietnamien: meo; Roumain: pisica; Lithuanien: katinas; Tchèque: kocka; Slovaque: macka; Armenien: gatz; Basque: catua; Estonien: kass; Finlandais: kissa; Swahili: paka.",
  "Les statistiques récentes indiquent que parmi les personnes appréciant les animaux, il y avait une préférence pour les chats par rapport aux chiens.",
  "On peut apprendre à un chat à marcher en laisse, mais beaucoup de temps et de patience sont nécessaires. Plus le chat commence jeune, plus il sera facile pour lui d'apprendre.",
  "Ronronner ne signifie pas forcemment un contentement. Cela peut aussi signifier que le chat souffre fortement, comme par exemple pendant la mise-bas. Les chattons ronronneront pour signifier à leur mère qu'ils reçoivent assez de lait. Le ronronnement est un processus d'expiration/inspiration pratiqué généralement la bouche fermée. Mais ne vous inquiétez pas, si votre chat ronronne en le caressant près de vous, c'est une marque de bonheur!",
  "L'herbe à chat contient une huile appelée hepetalactone qui agit sur le chat comme la marijuana agit sur les gens. Seulement certains chats y sont sensibles et semblent entrer dans un état de transe: reniflements, éternuements, léchages, machouillage...",
  "De toutes les espèces de chats, seul le chat domestique est capable de tenir sa queue verticalement pendant qu'il marche. Pour tous les autres, celle ci est horizontale et placée entre leurs pattes pendant qu'ils marchent.",
  "Un chat heureux tient sa queue droite et immobile.",
  "Presque 10% des os du chat se situe au niveau de sa queue. Elle est utilisée pour maintenir son équilibre.",
  "Les familles de chat fonctionnent souvent mieux en nombre paire. Les chats et les chattons doivent être acheté par paire autant que possible.",
  "Le chocolat pour patisserie est le plus dangereux pour votre chat.",
  "Le pouls d'un chat se contrôle au niveau de l'arrière de la cuisse, là où la patte rejoint le corps. Une valeur normale est de 110-170 battements par minute.",
  "Le champ de vision d'un chat est d'environ 185 degrés.",
  "Les chats ont chacun leurs préférences pour faire leurs griffes. Certains aiment les surfaces horizontales, d'autres préfèrent la verticalité.",
  "Le Maine Coone est la seule race originaire d'Amérique avec les poils longs.",
  "Le Maine Coone est 4 à 5 fois plus gros que le Singapura, la plus petite espèce de chat au monde.",
  "On pense que les chats tigrés (Tabby en anglais) tiennent leurs noms d'un quartier de Baghdad, Attab.",
  "Les griffes rentrables est une caractéristique physique qui place le chat à part dans le monde des animaux. Seuls le guépard n'est pas pourvu de cette caractéristique.",
  "Seulement certains chats deviennent stone avec l'herbe à chat. Cela dépend de la présence ou non d'un gène.",
  "Un chat peut sprinter à une vitesse proche des 50 km/h.",
  "Dans l'ancienne Egypte, quand le chat d'une famille mourrait, tous les membres se rasaient les sourcils en signe de deuil.",
  "Les chats sont domestiqués par l'Homme depuis moitié moins longtemps que les chiens.",
  "Les moustaches d'un chat sont comme une sorte de radar,qui l'aide à jauger de l'espace lorsqu'il se déplace.",
  "Un chat peut passer 5 heures ou plus à se laver par jour.",
  "Tous les chats ont 3 types de longs poils sensibles à la pression: les moustaches, les sourcils et les poils entre les coussinets.",
  "La même région du cerveau est responsable des émotions chez l'Hommme et le chat.",
  "Le cerveau d'un chat est plus proche de celui d'un Homme que d'un chien.",
  "Un chat dénombre davantage d'os qu'un Homme: 230 contre 206.",
  "Un chat a 30 vertèbres. 5 de plus que l'Homme.",
  "Le chat est l'animal de compagnie le plus populaire des Etats Unis. Il y a 88 millions de chats et 74 millions de chiens aux US.",
  "Le chat a plus de 20 muscles lui servant à controller ses oreilles.",
  "Il y a des témoignages de chats ayant survécu à une chute jusqu'à 32 étages sur du béton.",
  "Le chat dort 70% de sa vie.",
  "Un chat a été maire d'une ville d'Alaska, Talkeetna, pendant 15 ans. Son nom est Stubbs.",
  "Un chat s'est présenté pour l'élection du maire de Mexico city en 2013.",
  "La langue des chats contient 300 petites papilles creuses et rigides en forme de cuillère qui leur permettent de mouiller avec leur salive la base des poils.",
  "Si votre chat ouvre parfois légèrement la bouche, le nez plissé et les lèvres retroussées, c’est à cause de ce que l’on appelle la réponse de Flehmen. Un réflexe qui pousse le chat à ouvrir la bouche pour aspirer l’air et permettre à l’odeur d’atteindre plus rapidement l’organe de Jacobson, qui se situe sur le palais et qui est relié à la cavité nasale.",
  "Avoir un chat peu réduire le risque d'infarctus et d'arrêt cardiaque d'un tiers.",
  "Il y a un enregistrement d'un miaulement de chat sur le site Wikipedia. Et pourquoi pas?",
  "Le plus grand chat du monde mesure 1m23. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "Des indices suggèrent que les chats domestiques sont apparus dès 3600 avant J.C, soit 2000 ans avant l'Egypte des pharaons.",
  "Le ronronnement d'un chat peut être une forme d'auto médication, traduisant aussi bien un signe de nervosité que de contentement.",
  "Les ronronnements sont émis à de très basses fréquences, comprises entre 20 et 140 Hertz (Hz), soit à peu près les mêmes que celles du ronflement humain (de 30 à 200 Hz).",
  "Les chats adultes miaulent seulement pour communiquer avec des humains.",
  "Le chat le plus riche du monde a un capital de 13 millions de dollars. Il a hérité de son ancien propriétaire décédé.",
  "Votre chat sait reconnaître votre voix. Il préfère simplement l'ignorer quand ça l'arrange.",
  "Les chats peuvent sauter jusqu'à 6 fois leur longueur.",
  "Les chats ont contribué à l'extrinction de 33 espèces différentes.",
  "Les chats peuvent boire de l'eau de mer si nécessaire pour survivre.",
];

const langName = "french",
  langISO = "fra",
  langLocale = "fr",
  langLocaleName = "France";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
