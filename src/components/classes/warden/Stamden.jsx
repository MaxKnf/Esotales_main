import React from 'react'
import artic from './skillsImages/Arctic_Blast.png'
import trap from './skillsImages/Barbed_Trap.png'
import cloak from './skillsImages/Cloak.png'
import rstrikes from './skillsImages/Rapid_Strikes.png'
import infection from './skillsImages/Fetcher_Infection.png'
import carve from './skillsImages/Carve.png'
import subterranean from './skillsImages/Subterranean_Assault.png'
import stampede from './skillsImages/Stampede.png'
import guardian from './skillsImages/Wild_Guardian.png'
import revenge from './skillsImages/Winter_Revenge.png'
import executioner from './skillsImages/Executioner.png'

function Stamden() {
  return (
    <div className='display-class'>
        <h2>Stamina Warden</h2>
        
        <div className='intro'>
            <h3>Introduction</h3>
            <p>
                The Stamina Guardian is a good class for solo content thanks to the debuffs it can apply, and now proves to be more interesting in raids by leveraging its ice damage, contributing to an increase in its DPS while also bringing Minor Brittle to its group.
            </p>
        </div>

        <div className='pros-cons'>
            <h3>Pros and Cons</h3>

            <div className='pros-container'>
                <h4>Pros</h4>
                <ul className='pros-list'>
                    <li>good single-target and Aoe damages</li>
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
                <li>Race : Dark elf  &gt; Orc &gt; Khajit</li>
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
                    <li>Essence of weapon power</li>
                    <li>Essence of spell power</li>
                </ul>
            </div>
        </div>

        <div className='builds'>
            <h3>builds</h3>
            <div className='build-1'>
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
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Chest</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Hands</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Belt</td>
                            <td>Perfected Arm of Relequen</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Pants</td>
                            <td>Aegis Caller</td>
                            <td>Medium</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Shoes</td>
                            <td>Perfected Arm of Relequen</td>
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
                            <td>Charged</td>
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
                        <img src={subterranean} alt="subterranean assault"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={rstrikes} alt="rapid strikes"/>
                        <img src={cloak} alt="quick cloak"/>
                        <img src={revenge} alt="winter's revenge"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                    <div className='bar-2'>
                        <img src={stampede} alt="stampede"/>
                        <img src={carve} alt="carve"/>
                        <img src={artic} alt="artic blast"/>
                        <img src={infection} alt="fetcher infection"/>
                        <img src={executioner} alt="executioner"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                </div>
            </div>

            <div className='build-2'>
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
                            <td>Zaan</td>
                            <td>Light</td>
                            <td>Divine</td>
                            <td>Stamina</td>
                        </tr>
                        <tr>
                            <td>Shoulder</td>
                            <td>Zaan</td>
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
                            <td>Perfected Coral Riptide</td>
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
                            <td>Advancing Yokeda</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Ring</td>
                            <td>Advancing Yokeda</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Ring</td>
                            <td>Advancing Yokeda</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Weapon 1</td>
                            <td>Advancing Yokeda</td>
                            <td>Dagger</td>
                            <td>Charged</td>
                            <td>Poison Damage Enchant</td>
                        </tr>
                        <tr>
                            <td>Weapon 1</td>
                            <td>Advancing Yokeda</td>
                            <td>Dagger</td>
                            <td>Charged</td>
                            <td>Fire Damage Enchant</td>
                        </tr>
                        <tr>
                            <td>Weapon 2</td>
                            <td>Perfected Merciless Charge</td>
                            <td>2H Sword</td>
                            <td>Infused</td>
                            <td>Ice Damage Enchant</td>
                        </tr>
                    </table>       
                </div>
                
                <div className='skills'>
                    <h4>Skills</h4>
                    <div className='bar-1'>
                        <img src={subterranean} alt="subterranean assault"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={rstrikes} alt="rapid strikes"/>
                        <img src={cloak} alt="quick cloak"/>
                        <img src={revenge} alt="winter's revenge"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                    <div className='bar-2'>
                        <img src={stampede} alt="stampede"/>
                        <img src={carve} alt="carve"/>
                        <img src={artic} alt="artic blast"/>
                        <img src={infection} alt="fetcher infection"/>
                        <img src={executioner} alt="executioner"/>
                        <img src={guardian} alt="wild guardian"/>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Stamden