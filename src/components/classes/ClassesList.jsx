import arcanist from './images/arcanist.png'
import dragonknight from './images/dragonknight.png'
import necromancer from './images/necromancer.png'
import nightblade from './images/nightblade.png'
import sorcerer from './images/sorcerer.png'
import templar from './images/templar.png'
import warden from './images/warden.png'
import Stamsorc from "./sorcerer/Stamsorc"
import Magsorc from './sorcerer/Magsorc'
import Stamarc from './arcanist/Stamarc'
import Magarc from './arcanist/Magarc'
import Magden from './warden/Magden'
import Stamden from './warden/Stamden'
import Magplar from './templar/Magplar'
import Stamplar from './templar/Stamplar'
import Stamdk from './dragonknight/Stamdk'
import Magdk from './dragonknight/Magdk'
import Stamblade from './nightblade/Stamblade'
import Magblade from './nightblade/Magblade'
import Stamcro from './necromancer/Stamcro'
import Magcro from './necromancer/Magcro'

export const ClassesList = [
    {
        name: "Arcanist",
        image: arcanist,
        stamina: <Stamarc />,
        magicka: <Magarc />,
    },
    {
        name: "Dragonknight",
        image: dragonknight,
        stamina: <Stamdk />,
        magicka: <Magdk />,
    },
    {
        name: "Necromancer",
        image: necromancer,
        stamina: <Stamcro />,
        magicka: <Magcro />,
    },
    {
        name: "Nightblade",
        image: nightblade,
        stamina: <Stamblade />,
        magicka: <Magblade />,
    },
    {
        name: "Sorcerer",
        image: sorcerer,
        stamina: <Stamsorc />,
        magicka: <Magsorc />,
    },
    {
        name: "Templar",
        image: templar,
        magicka: <Magplar />,
        stamina: <Stamplar />
    },
    {
        name: "Warden",
        image: warden,
        stamina: <Stamden />,
        magicka: <Magden />,
    },
]