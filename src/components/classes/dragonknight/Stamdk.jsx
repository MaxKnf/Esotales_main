import React from 'react'
import trap from './skillsImages/Barbed_Trap.png'
import blockade from './skillsImages/Blockade_of_Fire.png'
import cloak from './skillsImages/Cloak.png'
import dawnbreaker from './skillsImages/Flawless_Dawnbreaker.png'
import srune from './skillsImages/Scalding_Rune.png'
import pinjection from "./skillsImages/Poison_Injection.png"
import ehail from "./skillsImages/Endless_Hail.png"
import btalons from "./skillsImages/Burning_Talons.png"
import eflames from "./skillsImages/Engulfing_Flames.png"
import eruption from "./skillsImages/Eruption.png"
import foblivion from "./skillsImages/Flames_of_Oblivion.png"
import mwhip from "./skillsImages/Molten_Whip.png"
import smight from "./skillsImages/Standard_of_Might.png"
import vclaw from "./skillsImages/Venomous_Claw.png"


function Stamdk() {
  return (
    <div className='display-class'>
    <h2>Stamina Dragonknight</h2>
    
    <div className='intro'>
        <h3>Introduction</h3>
        <p>
          The Stamina Dragonknight is a good class for multi-target fights. It excels, especially in solo content or 4-player dungeons. Its spell kit consists of many area-of-effect damages, favoring this aspect.
        </p>
    </div>

    <div className='pros-cons'>
        <h3>Pros and Cons</h3>

        <div className='pros-container'>
            <h4>Pros</h4>
            <ul className='pros-list'>
                <li>good single-target and Aoe damages</li>
                <li>give minor brutality to his group</li>
                <li>Performs very well with a bow</li>
                <li>Give himself major savagery and major prophety when flames of oblivions is slotted</li>
            </ul>
        </div>

        <div className='cons-container'>
            <h4>Cons</h4>
            <ul className='cons-list'>
                <li>Class dependent on it's ultimate.</li>
                <li>no burst damage</li>  
            </ul>
        </div>

    </div>

    <div className='character-stats'>
        <h3>Character stats</h3>
        <ul className='character-stats-item'>
            <li>Race : Dark elf &gt; Orc &gt; Khajit</li>
            <li>Mundus stone: the Thief</li>
            <li>Stats : 64 in Stamina</li>
        </ul>
    </div>

    <div className='consumables'>
        <h3>Consumable</h3>
        <div className='food'>
            <h4>Food</h4>
            <ul>
                <li>Max stamina</li>
                <li>Max stamina + Max health</li>
                <li>Max stamina + stamina regen</li>
            </ul>
        </div>

        <div className='potion'>
            <h4>Potion</h4>
            <ul>
                <li>Essence of heroism</li>
                <li>Essence of spell power</li>
                <li>Essence of weapon power</li>
            </ul>
        </div>
    </div>

    <div className='builds'>
        <h3>builds</h3>
        <div className='build-1'>
            <h4>Build for single target</h4>
            <div className='gear-sets'>
                <table>
                    <tr>
                        <th>Gear</th>
                        <th>Set</th>
                        <th>Weight</th>
                        <th>Trait</th>
                        <th>Enchantment</th>
                    </tr>
                    <tr>
                        <td>Head</td>
                        <td>Slimecraw</td>
                        <td>Light</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Hands</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Belt</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>Harpooner Wading Kilt</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Necklace</td>
                        <td>Aegis Caller</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Aegis Caller</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Aegis Caller</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Aegis Caller</td>
                        <td>Dagger</td>
                        <td>Nirnhoned</td>
                        <td>Poison Damage Enchant</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Aegis Caller</td>
                        <td>Dagger</td>
                        <td>Charged</td>
                        <td>Fire Damage Enchant</td>
                    </tr>
                    <tr>
                        <td>Weapon 2</td>
                        <td>Perfected Caustic Arrow</td>
                        <td>Bow</td>
                        <td>Infused</td>
                        <td>Weapon Damage Enchant</td>
                    </tr>
                </table>       
            </div>
            
            <div className='skills'>
                <h4>Skills</h4>
                <div className='bar-1'>
                    <img src={btalons} alt="burning talons"/>
                    <img src={vclaw} alt="venomous claw"/>
                    <img src={mwhip} alt="molten whip"/>
                    <img src={cloak} alt="Quick Cloak"/>
                    <img src={foblivion} alt="flames of oblivion"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={ehail} alt="endless hail"/>
                    <img src={pinjection} alt="poison injection"/>
                    <img src={eruption} alt="eruption"/>
                    <img src={trap} alt="barbed trap"/>     
                    <img src={eflames} alt="engulfing flames"/>
                    <img src={smight} alt="standard of might"/>
                </div>
            </div>
        </div>

        <div className='build-2'>
            <h4>Build for single target + aoe</h4>
            <div className='gear-sets'>
                <table>
                    <tr>
                        <th>Gear</th>
                        <th>Set</th>
                        <th>Weight</th>
                        <th>Trait</th>
                        <th>Enchantment</th>
                    </tr>
                    <tr>
                        <td>Head</td>
                        <td>Slimecraw</td>
                        <td>Light</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Hands</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Belt</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>Harpooners Wading Kilt</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Necklace</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Dagger</td>
                        <td>Nirnhoned</td>
                        <td>Poison Damage Enchant</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Dagger</td>
                        <td>Charged</td>
                        <td>Fire Damage Enchant</td>
                    </tr>
                    <tr>
                        <td>Weapon 2</td>
                        <td>Perfected Crushing Wall</td>
                        <td>Staff</td>
                        <td>Infused</td>
                        <td>Weapon Damage Enchant</td>
                    </tr>
                </table>       
            </div>
            
            <div className='skills'>
                <h4>Skills</h4>
                <div className='bar-1'>
                    <img src={btalons} alt="burning talons"/>
                    <img src={vclaw} alt="venomous claw"/>
                    <img src={mwhip} alt="molten whip"/>
                    <img src={cloak} alt="Quick Cloak"/>
                    <img src={foblivion} alt="flames of oblivion"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={blockade} alt="blockade of fire"/>
                    <img src={srune} alt="scalding rune"/>
                    <img src={eruption} alt="eruption"/>
                    <img src={trap} alt="barbed trap"/>     
                    <img src={eflames} alt="engulfing flames"/>
                    <img src={smight} alt="standard of might"/>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Stamdk