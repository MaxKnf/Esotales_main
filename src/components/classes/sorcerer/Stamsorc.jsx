import React from 'react'
import trap from './skillsImages/Barbed_Trap.png'
import blockade from './skillsImages/Blockade_of_Fire.png'
import fragment from './skillsImages/Crystal_Fragments.png'
import prey from './skillsImages/Daedric_Prey.png'
import dawnbreaker from './skillsImages/Flawless_Dawnbreaker.png'
import hurricane from './skillsImages/Hurricane.png'
import rstrikes from './skillsImages/Rapid_Strikes.png'
import stampede from './skillsImages/Stampede.png'
import atro from './skillsImages/Summon_Charged_Atronach.png'
import tormentor from './skillsImages/Summon_Twilight_Tormentor.png'
import volatile from './skillsImages/Summon_Volatile_Familiar.png'
import letharrow from './skillsImages/Lethal_Arrow.png'
import poisinjection from './skillsImages/Poison_Injection.png'
import endhail from './skillsImages/Endless_Hail.png'

function Stamsorc() {
  return (
    <div className='display-class'>
        <h2>Stamina Sorcerer</h2>
        
        <div className='intro'>
            <h3>Introduction</h3>
            <p>
                The Stamina Sorcerer is a class primarily focused on single-target combat. It can easily switch to a DPS-Support role and has a simple rotation with two familiars assisting in its role.
            </p>
        </div>

        <div className='pros-cons'>
            <h3>Pros and Cons</h3>

            <div className='pros-container'>
                <h4>Pros</h4>
                <ul className='pros-list'>
                    <li>Insane single-target damages</li>
                    <li>Give Major Berserk to his group and himself with atronach ultimate</li>
                    <li>Great for solo play</li>
                    <li>Pet dealing really good damage</li>
                    <li>Give Minor Prophecy to his group</li>
                    <li>Reduced cost of ultimates</li>
                </ul>
            </div>

            <div className='cons-container'>
                <h4>Cons</h4>
                <ul className='cons-list'>
                    <li>Less Aoe damages than the others classes</li>
                    <li>Overly powerful familiars leaving less room for other spells on your bars.</li>    
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
                    <li>Max stamina + stamina regen</li>
                    <li>Max stamina + Max health</li>
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
                <h4>Build for all around damages at melee</h4>
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
                            <td>Harpooner’s Wading Kilt</td>
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
                        <img src={prey} alt="crystal fragment"/>
                        <img src={fragment} alt="daedric prey"/>
                        <img src={rstrikes} alt="rapid strikes"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={dawnbreaker} alt="charged atronach"/>
                    </div>
                    <div className='bar-2'>
                        <img src={stampede} alt="stampede"/>
                        <img src={hurricane} alt="hurricane"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={atro} alt="charged atronach"/>
                    </div>
                </div>
            </div>

            <div className='build-2'>
                <h4>Build Aoe + single target at semi-range</h4>
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
                            <td>Harpooner’s Wading Kilt</td>
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
                        <img src={prey} alt="crystal fragment"/>
                        <img src={fragment} alt="daedric prey"/>
                        <img src={rstrikes} alt="rapid strikes"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={dawnbreaker} alt="charged atronach"/>
                    </div>
                    <div className='bar-2'>
                        <img src={blockade} alt="blockade"/>
                        <img src={hurricane} alt="hurricane"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={atro} alt="charged atronach"/>
                    </div>
                </div>    
            </div>

            <div className='build-3'>
            <h4>Build Aoe + single target at range</h4>
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
                            <td>Harpooner’s Wading Kilt</td>
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
                            <td>Ring</td>
                            <td>Pillar of nirn</td>
                            <td>Jewerly</td>
                            <td>Bloodthirsty</td>
                            <td>Weapon Damage</td>
                        </tr>
                        <tr>
                            <td>Weapon 1</td>
                            <td>Pillar of nirn</td>
                            <td>Bow</td>
                            <td>Precise</td>
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
                        <img src={prey} alt="crystal fragment"/>
                        <img src={fragment} alt="daedric prey"/>
                        <img src={letharrow} alt="lethal arrow"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={dawnbreaker} alt="charged atronach"/>
                    </div>
                    <div className='bar-2'>
                        <img src={endhail} alt="endless hail"/>
                        <img src={poisinjection} alt="poison injection"/>
                        <img src={trap} alt="barbed trap"/>
                        <img src={volatile} alt="volatile familiar"/>
                        <img src={tormentor} alt="twilight tormentor"/>
                        <img src={atro} alt="charged atronach"/>
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
  )
}

export default Stamsorc