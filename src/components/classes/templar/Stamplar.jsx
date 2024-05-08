import React from 'react'
import trap from "./skillsImages/Barbed_Trap.png"
import carve from "./skillsImages/Carve.png"
import cloak from "./skillsImages/Cloak.png"
import dawnbreaker from "./skillsImages/Flawless_Dawnbreaker.png"
import ehail from "./skillsImages/Endless_Hail.png"
import jabs from "./skillsImages/Biting_Jabs.png"
import potl from "./skillsImages/POTL.png"
import rglory from "./skillsImages/Radiant_Glory.png"
import ritual from "./skillsImages/Ritual_of_Retribution.png"
import sbarrage from "./skillsImages/Solar_Barrage.png"
import star from "./skillsImages/Shooting_Star.png"
import stampede from "./skillsImages/Stampede.png"
import vbane from "./skillsImages/Vampire's_Bane.png"
import bspear from "./skillsImages/Blazing_Spear.png"
import pinjection from "./skillsImages/Poison_Injection.png"



function Stamplar() {
  return (
    <div className='display-class'>
    <h2>Stamina Templar</h2>
    
    <div className='intro'>
        <h3>Introduction</h3>
        <p>
          The Stamina Templar is a good class for multi-target fights. It excels, especially in solo content or 4-player dungeons. Its spell kit consists of many area-of-effect damages, favoring this aspect.
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
                <li>give minor sorcery to his group</li>
                <li>Performs very well with a bow</li>
            </ul>
        </div>

        <div className='cons-container'>
            <h4>Cons</h4>
            <ul className='cons-list'>
                <li>bad sustain</li>
                <li>Less effective than other classes in an optimized raid.</li>  
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
                        <td>Medium</td>
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
                        <td>Deadly Strike</td>
                        <td>Light</td>
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
                        <td>Velothi Ur-Mage's Amulet</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Deadly Strike</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Deadly Strike</td>
                        <td>Jewerly</td>
                        <td>Bloodthirsty</td>
                        <td>Weapon Damage</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Deadly Strike</td>
                        <td>Dagger</td>
                        <td>Nirnhoned</td>
                        <td>Poison Damage Enchant</td>
                    </tr>
                    <tr>
                        <td>Weapon 1</td>
                        <td>Deadly Strike</td>
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
                    <img src={potl} alt="power of the light"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={jabs} alt="bitting jabs"/>
                    <img src={cloak} alt="Quick Cloak"/>
                    <img src={rglory} alt="radiant glory"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={stampede} alt="stampede"/>
                    <img src={carve} alt="carve"/>
                    <img src={sbarrage} alt="solar barrage"/>
                    <img src={vbane} alt="vampire bane"/>
                    <img src={ritual} alt="ritual of retribution"/>
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
                        <td>Slimecraw</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>Deadly Strike</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>Deadly Strike</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Hands</td>
                        <td>Deadly Strike</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Belt</td>
                        <td>Deadly Strike</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>Perfected Whorl of Depths</td>
                        <td>Light</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Deadly Strike</td>
                        <td>Medium</td>
                        <td>Divine</td>
                        <td>Stamina</td>
                    </tr>
                    <tr>
                        <td>Necklace</td>
                        <td>Velothi Ur-Mage's Amulet</td>
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
                        <td>Perfected Thunderous Volley</td>
                        <td>Bow</td>
                        <td>Infused</td>
                        <td>Weapon Damage Enchant</td>
                    </tr>
                </table>       
            </div>
            
            <div className='skills'>
                <h4>Skills</h4>
                <div className='bar-1'>
                    <img src={potl} alt="power of the light"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={jabs} alt="bitting jabs"/>
                    <img src={cloak} alt="Quick Cloak"/>
                    <img src={rglory} alt="radiant glory"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={ehail} alt="endless hail"/>
                    <img src={bspear} alt="blazing spear"/>
                    <img src={sbarrage} alt="solar barrage"/>
                    <img src={vbane} alt="vampire bane"/>
                    <img src={ritual} alt="ritual of retribution"/>
                    <img src={star} alt="shooting star"/>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Stamplar