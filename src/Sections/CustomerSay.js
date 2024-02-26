import React from 'react'

function Card({rating, name, review, link}) {
    return (
<div className="Component10" style={{width: 200}}>
    <div className="Rectangle57" style={{width: 200, height: 175, top: 0, position: 'absolute', background: 'white'}} />
    <div className="Rating" style={{marginLeft: '35px', top: 29, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>{rating} ⭐</div>
    <img alt={name} style={{marginLeft: '25px', width: 47, height: 46, top: 58, position: 'absolute', border: '1px black solid'}} src={link}></img>
    <div className="Name" style={{marginLeft: '80px', top: 68, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>{name}</div>
    <div className="ReviewRext" style={{marginLeft: '25px', width: 158.21, height: 46, top: 121, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>{review}</div>
    </div>)
}

export default function CustomersSay() {
  return (
    <div className="Testimonials" style={{width: '100%', height: 590, position: 'relative', marginTop: '5%'}}>
  <div className="Rectangle56" style={{width: '100%', height: 590, left: 4, top: 0, position: 'absolute', background: '#D9D9D9'}} />

    <div className="Testimonials" style={{color: '#333333', fontSize: 36, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word', position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '5%'}}>Testimonials</div>
    <div className="Cards" style={{ display: 'flex', justifyContent: 'space-around', width: '100%'  , position: 'absolute', marginTop: '15%'}}>
        <Card rating={5} name={'Jean'} review={'Très bon restaurant'} link='https://thispersondoesnotexist.com/?rand_number=0.48897726069054204'/>
        <Card rating={3} name={'Michel'} review={'Moyen mais passable'} link='https://thispersondoesnotexist.com/?rand_number=0.48069054204897726'/>
        <Card rating={2} name={'Brice'} review={'Nul'} link='https://thispersondoesnotexist.com/?rand_number=0.48897726069054204'/>
        <Card rating={5} name={'Chris'} review={'Très bon restaurant'} link='https://thispersondoesnotexist.com/?rand_number=0.48897726069054204'/>
  </div>
</div>
  )
}
