import React from 'react'
import trap from './skillsImages/Barbed_Trap.png'
import blockade from './skillsImages/Blockade_of_Fire.png'
import cloak from './skillsImages/Cloak.png'
import dawnbreaker from './skillsImages/Flawless_Dawnbreaker.png'
import chunter from './skillsImages/Camouflaged_Hunter.png'
import fatecarver from './skillsImages/Fatecarver.png'
import frune from './skillsImages/Fulminating_Rune.png'
import srune from './skillsImages/Scalding_Rune.png'
import flail from './skillsImages/Fatecarver.png'
import eye from './skillsImages/Languid_Eye.png'
import scholar from './skillsImages/Scholarship.png'


function Stamarc() {
  return (
    <div className='display-class'>
        <h2>Stamina Arcanist</h2>
        
        <div className='intro'>
            <h3>Introduction</h3>
            <p>
                The Arcanist is the new class introduced with the Necrom Chapter. It requires fewer actions per minute than its predecessors and relies on generating Interpretation to cast a channeled spell dealing heavy damage. It also has several defensive tools, making it suitable for use in various environments.
            </p>
        </div>

        <div className='pros-cons'>
            <h3>Pros and Cons</h3>

            <div className='pros-container'>
                <h4>Pros</h4>
                <ul className='pros-list'>
                    <li>good single-target and Aoe damages</li>
                    <li>good burst damages</li>
                    <li>good sustain</li>
                </ul>
            </div>

            <div className='cons-container'>
                <h4>Cons</h4>
                <ul className='cons-list'>
                    <li>Channeled spell, which, if interrupted, causes a gap in the rotation.</li>
                    <li>The sets based on charges with short durations cannot be exploited due to the class's channeled spells.</li>   
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
                    <li>Essence of weapon power</li>
                    <li>Essence of spell power</li>
                </ul>
            </div>
        </div>

        <div className='builds'>
            <h3>builds</h3>
            <div className='build-1'>
                <h4>Build for all around damages</h4>
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
                            <td>Perfected Coral Riptide</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Chest</td>
                            <td>Perfected Coral Riptide</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Hands</td>
                            <td>Perfected Coral Riptide</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Belt</td>
                            <td>Perfected Coral Riptide</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Pants</td>
                            <td>Deadly Strike</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Shoes</td>
                            <td>Perfected Coral Riptide</td>
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
                            <td>Perfected Crushing Wall</td>
                            <td>Inferno staff</td>
                            <td>Infused</td>
                            <td>Weapon Damage Enchant</td>
                        </tr>
                    </table>       
                </div>
                
                <div className='skills'>
                    <h4>Skills</h4>
                    <div className='bar-1'>
                        <img src={fatecarver} alt="fatecarver"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={flail} alt="cephaliarch's flail"/>
                        <img src={cloak} alt="Quick Cloak"/>
                        <img src={chunter} alt="camouflaged hunter"/>
                        <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                    </div>
                    <div className='bar-2'>
                        <img src={blockade} alt="blocake of fire"/>
                        <img src={frune} alt="fulminating rune"/>
                        <img src={srune} alt="scalding rune"/>
                        <img src={scholar} alt="Inspired Scholarship"/>
                        <img src={chunter} alt="camouflaged hunter"/>
                        <img src={eye} alt="Languid eye"/>
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
  )
}

export default Stamarc