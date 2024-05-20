import React from 'react'
import trap from './skillsImages/Barbed_Trap.png'
import cloak from './skillsImages/Cloak.png'
import eweapon from "./skillsImages/Elemental_Weapon.png"
import carve from './skillsImages/Carve.png'
import stampede from './skillsImages/Stampede.png'
import dshade from "./skillsImages/Dark_Shade.png"
import debilitate from "./skillsImages/Debilitate.png"
import istrike from "./skillsImages/Incapacitating_Strike.png"
import impale from "./skillsImages/Impale.png"
import mresolve from "./skillsImages/Merciless_Resolve.png"
import star from "./skillsImages/Shooting_Star.png"
import tpath from "./skillsImages/Twisting_Path.png"
import caltrops from "./skillsImages/Anti-Cavalry_Caltrops.png"
import blockade from "./skillsImages/Blockade_of_Fire.png"

function Magblade() {
  return (
    <div className='display-class'>
    <h2>Magicka Nightblade</h2>
    
    <div className='intro'>
        <h3>Introduction</h3>
        <p>
            The Magicka Nightblade originally was a competitive class in PvE due to its execution phase and possesses an interesting single-target kit. It has the advantage of generating Ultimate points with the use of potions and now has a more advantageous multi-target kit.

            However, it lags behind other classes in terms of pure damage and contribution to optimized groups, especially with the recent change to the concealed weapon, which is not in favor of the class.
        </p>
    </div>

    <div className='pros-cons'>
        <h3>Pros and Cons</h3>

        <div className='pros-container'>
            <h4>Pros</h4>
            <ul className='pros-list'>
                <li>good single-target and Aoe damages</li>
                <li>good burst damages</li>
                <li>insane execute</li>
                <li>give minor savagery to his group</li>
                <li>lot of crit chance</li>
            </ul>
        </div>

        <div className='cons-container'>
            <h4>Cons</h4>
            <ul className='cons-list'>
                <li>hard to play</li>  
            </ul>
        </div>

    </div>

    <div className='character-stats'>
        <h3>Character stats</h3>
        <ul className='character-stats-item'>
            <li>Race : Dark elf &gt; Orc &gt; Khajit</li>
            <li>Mundus stone: the Thief</li>
            <li>Stats : 64 in Magicka</li>
        </ul>
    </div>

    <div className='consumables'>
        <h3>Consumable</h3>
        <div className='food'>
            <h4>Food</h4>
            <ul>
                <li>Max magicka</li>
                <li>Max magicka + Max health</li>
                <li>Max magicka + magicka regen</li>
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
                        <td>Zaan</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>Zaan</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Hands</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Belt</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Light</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Perfected Arms of Relequen</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
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
                        <td>Perfected Merciless Charge</td>
                        <td>2H Sword</td>
                        <td>Infused</td>
                        <td>Weapon Damage Enchant</td>
                    </tr>
                </table>       
            </div>
            
            <div className='skills'>
                <h4>Skills</h4>
                <div className='bar-1'>
                    <img src={cloak} alt="quick cloak"/>
                    <img src={debilitate} alt="debilitate"/>
                    <img src={eweapon} alt="Elemental weapon"/>
                    <img src={impale} alt="Impale"/>
                    <img src={mresolve} alt="Merciless Resolve"/>
                    <img src={istrike} alt="incapacitating strike"/>
                </div>
                <div className='bar-2'>
                    <img src={stampede} alt="stampede"/>
                    <img src={carve} alt="carve"/>
                    <img src={tpath} alt="twisting path"/>
                    <img src={dshade} alt="dark shade"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={star} alt="shooting star"/>
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
                        <td>Zaan</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>Zaan</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Hands</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Belt</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>Aegis Caller</td>
                        <td>Light</td>
                        <td>Divine</td>
                        <td>Magicka</td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Aegis Caller</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Magicka</td>
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
                        <td>Inferno Staff</td>
                        <td>Infused</td>
                        <td>Weapon Damage Enchant</td>
                    </tr>
                </table>       
            </div>
            
            <div className='skills'>
                <h4>Skills</h4>
                <div className='bar-1'>
                    <img src={debilitate} alt="debilitate"/>
                    <img src={cloak} alt="quick cloak"/>
                    <img src={eweapon} alt="Elemental weapon"/>
                    <img src={impale} alt="Impale"/>
                    <img src={mresolve} alt="Merciless Resolve"/>
                    <img src={istrike} alt="incapacitating strike"/>
                </div>
                <div className='bar-2'>
                    <img src={blockade} alt="blockade of fire"/>
                    <img src={caltrops} alt="anti-cavalry caltrops"/>
                    <img src={tpath} alt="twisting path"/>
                    <img src={dshade} alt="dark shade"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={star} alt="shooting star"/>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Magblade