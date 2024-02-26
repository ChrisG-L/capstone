
import React from 'react'
import { useNavigate } from 'react-router'

export default function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className="Hero" style={{display: 'flex', height: 451, position: 'relative' }}>
            <div className="Rectangle33" style={{ width: '100%', height: 358, left: 0, top: 0, background: '#495E57' }} />
            <img className="Image1" alt='RestauImg' style={{ width: 398, height: 428, right: 345, top: 23, position: 'absolute', borderRadius: 15 }} src="/icons_assets/restauranfood.jpg" />
            <div className="Content" style={{ width: 422, height: 250, left: 315, top: 47, position: 'absolute' }}>
                <div className="ButtonPrimary" style={{ width: 200, height: 41, left: 0, top: 209, position: 'absolute', background: '#F4CE14', borderRadius: 15 }}>
                    <button onClick={() => navigate("/booking")}>
                    <div className="Background" style={{ width: 200, height: 41, left: 0, top: 0, position: 'absolute', background: '#F4CE14', borderRadius: 15 }} />
                    <div className="Text" style={{ width: 151, left: 25, top: 10, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word' }}>Reserve a Table</div>
                    </button>
                </div>
                <div className="Subtitle" style={{ width: 422, height: 79, left: 0, top: 120, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Karla', fontWeight: '500', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="Title" style={{ width: 399, left: 0, top: 0, position: 'absolute' }}>
                    <span style={{ color: '#F4CE14', fontSize: 64, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word' }}>Little Lemon</span>
                    <span style={{ color: '#F4CE14', fontSize: 56, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}> </span>
                    <span style={{ color: '#EDEFEE', fontSize: 40, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word' }}>Chicago</span>
                </div>
            </div>
        </div>
    )
}
