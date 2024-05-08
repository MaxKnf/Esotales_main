import React from 'react'
import artic from './skillsImages/Arctic_Blast.png'
import trap from './skillsImages/Barbed_Trap.png'
import dive from './skillsImages/Cutting_Dive.png'
import reach from './skillsImages/Destructive_Reach.png'
import infection from './skillsImages/Fetcher_Infection.png'
import rune from './skillsImages/Scalding_Rune.png'
import subterranean from './skillsImages/Subterranean_Assault.png'
import wall from './skillsImages/Unstable_Wall_of_Frost.png'
import guardian from './skillsImages/Wild_Guardian.png'
import revenge from './skillsImages/Winter_Revenge.png'
import susceptility from './skillsImages/Elemental_Susceptibility.png'

function Magden() {
  return (
    <div className='display-class'>
        <h2>Magicka Warden</h2>
        
        <div className='intro'>
            <h3>Introduction</h3>
            <p>
            The Magicka Guardian is a good class for solo content thanks to the debuffs it can apply, and now proves to be more interesting in raids by leveraging its ice damage, contributing to an increase in its DPS while also bringing Minor Brittle to its group.
            </p>
        </div>

        <div className='pros-cons'>
            <h3>Pros and Cons</h3>

            <div className='pros-container'>
                <h4>Pros</h4>
                <ul className='pros-list'>
                    <li>good single-target and Aoe damages</li>
                    <li>Provide minor brittle for his group</li>
                    <li>Provide minor vulnerability for his group</li>
                </ul>
            </div>

            <div className='cons-container'>
                <h4>Cons</h4>
                <ul className='cons-list'>
                    <li>Can prove challenging for new players with the management of Damage over Time (DoTs) and its resources.</li>
                    <li>Lack of burst in short-duration fights.</li>
                    <li>Bad sustain</li>   
                </ul>
            </div>
   
        </div>

        <div className='character-stats'>
            <h3>Character stats</h3>
            <ul className='character-stats-item'>
                <li>Race : High elf  &gt; Dark elf &gt; Khajit</li>
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
                    <li>Essence of spell power</li>
                    <li>Essence of weapon power</li>
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
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Shoulder</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Chest</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Hands</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Belt</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Pants</td>
                            <td>Pillar of nirn</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
                        </tr>
                        <tr>
                            <td>Shoes</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Magicka</td>
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
                            <td>Pillar of nirn</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Ring</td>
                            <td>Pillar of nirn</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Weapon 1</td>
                            <td>Destructive Impact Set</td>
                            <td>Ice Staff</td>
                            <td>Charged</td>
                            <td>Poison Damage Enchant</td>
                        </tr>
                        <tr>
                            <td>Weapon 2</td>
                            <td>Pillar of nirn</td>
                            <td>Ice Staff</td>
                            <td>Infused</td>
                            <td>Weapon Damage Enchant</td>
                        </tr>
                    </table>       
                </div>
                
                <div className='skills'>
                    <h4>Skills</h4>
                    <div className='bar-1'>
                        <img src={subterranean} alt="subterranean assault"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={reach} alt="frost reach"/>
                        <img src={dive} alt="cutting dive"/>
                        <img src={infection} alt="fetcher infection"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                    <div className='bar-2'>
                        <img src={wall} alt="unstable wall of frost"/>
                        <img src={revenge} alt="winter's revenge"/>
                        <img src={artic} alt="artic blast"/>
                        <img src={susceptility} alt="elemental susceptibility"/>
                        <img src={rune} alt="scalding rune"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Magden