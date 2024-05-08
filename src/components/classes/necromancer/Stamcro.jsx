import React from 'react'
import trap from './skillsImages/Barbed_Trap.png'
import blockade from './skillsImages/Blockade_of_Fire.png'
import cloak from './skillsImages/Cloak.png'
import dawnbreaker from './skillsImages/Flawless_Dawnbreaker.png'
import srune from './skillsImages/Scalding_Rune.png'
import carve from './skillsImages/Carve.png'
import stampede from './skillsImages/Stampede.png'
import camouflage from "./skillsImages/Camouflaged_Hunter.png"
import caltrops from "./skillsImages/Anti-Cavalry_Caltrops.png"
import star from "./skillsImages/Shooting_Star.png"
import boneyard from "./skillsImages/Avid_Boneyard.png"
import dsiphon from "./skillsImages/Detonating_Siphon.png"
import archer from "./skillsImages/Skeletal_Archer.png"
import blastbones from "./skillsImages/Stalking_Blastbones.png"
import skull from "./skillsImages/Venom_Skull.png"

function Stamcro() {
  return (
    <div className='display-class'>
    <h2>Stamina Necromancer</h2>
    
    <div className='intro'>
        <h3>Introduction</h3>
        <p>
            The Stamina Necromancer is a versatile class with good damage in both single-target and multi-target scenarios. It also brings a benefit to its group with its Ultimate, which applies Major Vulnerability.
        </p>
    </div>

    <div className='pros-cons'>
        <h3>Pros and Cons</h3>

        <div className='pros-container'>
            <h4>Pros</h4>
            <ul className='pros-list'>
                <li>good single-target and Aoe damages</li>
                <li>high crit chance</li>
                <li>good sustain</li>
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
                    <img src={blastbones} alt="stalking blastbones"/>
                    <img src={skull} alt="venom skull"/>
                    <img src={boneyard} alt="avide boneyard"/>
                    <img src={dsiphon} alt="detonating siphon"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={stampede} alt="stampede"/>
                    <img src={carve} alt="carve"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={srune} alt="scalding rune"/>     
                    <img src={archer} alt="skeletal archer"/>
                    <img src={star} alt="shouting star"/>
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
                    <img src={cloak} alt="quick cloak"/>
                    <img src={blastbones} alt="stalking blastbones"/>
                    <img src={skull} alt="venom skull"/>
                    <img src={camouflage} alt="avide boneyard"/>
                    <img src={dsiphon} alt="detonating siphon"/>
                    <img src={dawnbreaker} alt="flawless dawnbreaker"/>
                </div>
                <div className='bar-2'>
                    <img src={blockade} alt="blockade of fire"/>
                    <img src={caltrops} alt="anti-cavalry caltrops"/>
                    <img src={trap} alt="barbed trap"/>
                    <img src={boneyard} alt="avide boneyard"/>    
                    <img src={archer} alt="skeletal archer"/>
                    <img src={star} alt="shouting star"/>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Stamcro
