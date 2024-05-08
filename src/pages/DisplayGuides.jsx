import React from 'react'
import { useParams } from 'react-router-dom'
import { BeginnerList, CombatList, CraftingList } from '../components/guides/GuidesList';

function BeginnerGuides() {
  const {id} = useParams();
  const bGuides = BeginnerList[id]

  return (
    <div className='beginner-guides'>
      <h1>{bGuides.name}</h1>
      <p className='part1'>{bGuides.part1}</p>
      <p className='part2'>{bGuides.part2}</p>
      <p className='part3'>{bGuides.part3}</p>
      <p className='part4'>{bGuides.part4}</p>
      <p className='part5'>{bGuides.part5}</p>
      <p className='part6'>{bGuides.part6}</p>
      <p className='part7'>{bGuides.part7}</p>
      <p className='part8'>{bGuides.part8}</p>
      <p className='part9'>{bGuides.part9}</p>
      <p className='part10'>{bGuides.part10}</p>
      <p className='part11'>{bGuides.part11}</p>
      <p className='part12'>{bGuides.part12}</p>
      <p className='part13'>{bGuides.part13}</p>
      <p className='part14'>{bGuides.part14}</p>
      <p className='part15'>{bGuides.part15}</p>
      <p className='part16'>{bGuides.part16}</p>
      <p className='part17'>{bGuides.part17}</p>
    </div>
  )
}

function CombatGuides() {
  const {id} = useParams();
  const cGuides = CombatList[id]

  return (
    <div className='combat-guides'>
      <h1>{cGuides.name}</h1>
      <p className='part1'>{cGuides.part1}</p>
      <p className='part2'>{cGuides.part2}</p>
      <p className='part3'>{cGuides.part3}</p>
      <p className='part4'>{cGuides.part4}</p>
      <p className='part5'>{cGuides.part5}</p>
      <p className='part6'>{cGuides.part6}</p>
      <p className='part7'>{cGuides.part7}</p>
      <p className='part8'>{cGuides.part8}</p>
      <p className='part9'>{cGuides.part9}</p>
      <p className='part10'>{cGuides.part10}</p>
      <p className='part11'>{cGuides.part11}</p>
      <p className='part12'>{cGuides.part12}</p>
      <p className='part13'>{cGuides.part13}</p>
      <p className='part14'>{cGuides.part14}</p>
      <p className='part15'>{cGuides.part15}</p>
      <p className='part16'>{cGuides.part16}</p>
      <p className='part17'>{cGuides.part17}</p>
    </div>
  )
}

function CraftingGuides() {
  const {id} = useParams();
  const crGuides = CraftingList[id]

  return (
    <div className='crafting-guides'>
      <h1>{crGuides.name}</h1>
      <p className='part1'>{crGuides.part1}</p>
      <p className='part2'>{crGuides.part2}</p>
      <p className='part3'>{crGuides.part3}</p>
      <p className='part4'>{crGuides.part4}</p>
      <p className='part5'>{crGuides.part5}</p>
      <p className='part6'>{crGuides.part6}</p>
      <p className='part7'>{crGuides.part7}</p>
      <p className='part8'>{crGuides.part8}</p>
      <p className='part9'>{crGuides.part9}</p>
      <p className='part10'>{crGuides.part10}</p>
      <p className='part11'>{crGuides.part11}</p>
      <p className='part12'>{crGuides.part12}</p>
      <p className='part13'>{crGuides.part13}</p>
      <p className='part14'>{crGuides.part14}</p>
      <p className='part15'>{crGuides.part15}</p>
      <p className='part16'>{crGuides.part16}</p>
      <p className='part17'>{crGuides.part17}</p>
    </div>
  )
}

export { BeginnerGuides, CombatGuides, CraftingGuides };