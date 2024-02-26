import React from 'react'

function Card({ title, link, price, desc }) {
    return (
        <div className="Card" >
            <img className="GreekSalad1" style={{ width: 265, height: 185, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src={link} />
            <div className="Rectangle13" style={{ width: 264.67, height: 253.74, top: 185.26, position: 'absolute', background: '#EDEFEE' }} />
            <div className="GreekSalad" style={{ marginLeft: '25px', width: 163.59, height: 25.46, top: 204.57, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word' }}>{title}</div>
            <div className="Fa" style={{ marginLeft: '25px', width: 216.74, height: 120.29, top: 252.86, position: 'absolute', color: '#495E57', fontSize: 16, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word' }}>{desc}</div>
            <div className="1299" style={{ marginLeft: '200px', width: 59.39, height: 16.68, top: 205.45, position: 'absolute', color: '#EE9972', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word' }}>{price}</div>
            <div className="Group4" style={{ marginLeft: '25px', width: 147.96, height: 28.10, top: 390.71, position: 'absolute' }}>
                <div className="OrderADelivery" style={{ width: 142.75, height: 28.10, top: 0, position: 'absolute', color: '#333333', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word' }}>Order a delivery</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" style={{ marginLeft: 150 }}>
                    <path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z" fill="black" />
                    <path d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z" fill="black" />
                    <path d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z" fill="black" />
                </svg>
            </div>
        </div>
    )
}

export default function Specials() {
    return (
        <div className="Highlights" style={{ width: '100%', height: 555, position: 'relative', marginTop: '50px' }}>
            <div className="ButtonPrimary" style={{ width: 200, height: 60, right: 458, top: 8, position: 'absolute' }}>
                <div className="Background" style={{ width: 200, height: 60, left: 0, top: 0, position: 'absolute', background: '#F4CE14', borderRadius: 15 }} />
                <div className="Text" style={{ width: 151, left: 25, top: 19, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word' }}>Online Menu</div>
            </div>
            <div className="Title" style={{ position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word', marginLeft: '15%' }}>This Weeks Specials!</div>
            <div className="Cards" style={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: 439, left: 0, top: 116, position: 'absolute', marginTop: '2%' }}>
                <Card link='/icons_assets/greek salad.jpg' title='Greek salad' desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' price='$12.99'/>
                <Card link='/icons_assets/bruchetta.svg' title='Bruchetta' desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ' price='$ 5.99' />
                <Card link='/icons_assets/lemon dessert.jpg' title='Lemon Dessert' desc='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' price='$ 5.00' />
            </div>
        </div>
    )
}
