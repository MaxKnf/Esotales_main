import React from 'react'
import BeginnerItem from '../components/guides/BeginnerItem'
import CombatItem from '../components/guides/CombatItem'
import CraftingItem from '../components/guides/CraftingItem'
import { BeginnerList, CombatList, CraftingList } from '../components/guides/GuidesList'

function Guides() {
  return (
    <div className='guides'>
      <h1>Guides</h1>
      
      <div className='beginnerList'>
        <h2>ESO Starter guide</h2>
        {BeginnerList.map((bGuides, idx) =>{
          return <BeginnerItem id={idx} name={bGuides.name}  />
        })}
      </div>

      <div className='combatList'>
        <h2>ESO Combat</h2>
        {CombatList.map((cGuides, idx) =>{
          return <CombatItem id={idx} name={cGuides.name}  />
        })}
      </div>

      <div className='craftingList'>
        <h2>ESO Crafting</h2>
        {CraftingList.map((crGuides, idx) =>{
          return <CraftingItem id={idx} name={crGuides.name}  />
        })}
      </div>
    </div>
  )
}

export default Guides