import React from 'react';

const UrunCard = ({ ad, fiyat, stokAdedi, kategori }) => {
  // Stok bittiyse soluk koyu gri, bitmediyse derin lacivert/siyah kart rengi
  const isStokYok = stokAdedi === 0;

  const kartStili = {
    backgroundColor: isStokYok ? '#1e222b' : '#0a0e17',
    border: `1px solid ${isStokYok ? '#3a3f4d' : '#00d2ff'}`,
    padding: '25px',
    borderRadius: '16px',
    width: '300px',
    color: '#fff',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    transition: 'all 0.3s ease',
    boxShadow: isStokYok ? 'none' : '0 8px 24px rgba(0, 210, 255, 0.12)',
    opacity: isStokYok ? 0.7 : 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: '800',
    margin: '5px 0',
    background: isStokYok ? 'none' : 'linear-gradient(90deg, #00d2ff, #3a7bd5)',
    WebkitBackgroundClip: isStokYok ? 'none' : 'text',
    WebkitTextFillColor: isStokYok ? 'none' : 'transparent',
    color: isStokYok ? '#777' : '#fff'
  };

  return (
    <div style={kartStili}>
      {/* KATEGORİ ETİKETİ */}
      <span style={{ 
        fontSize: '11px', 
        color: isStokYok ? '#777' : '#00d2ff', 
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontWeight: 'bold'
      }}>
        {kategori}
      </span>

      {/* ÜRÜN ADI */}
      <h3 style={{ margin: '5px 0 15px 0', fontSize: '20px', fontWeight: '600' }}>{ad}</h3>
      
      {/* SEPARATÖR ÇİZGİSİ */}
      <div style={{ height: '1px', backgroundColor: isStokYok ? '#333' : '#1a2333', marginBottom: '10px' }}></div>

      {/* MANTIKSAL KOŞUL: Stok varsa fiyatı göster, yoksa uyarıyı bas */}
      {!isStokYok ? (
        <div>
          <p style={priceStyle}>{fiyat.toLocaleString('tr-TR')} ₺</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#aaa', marginTop: '10px' }}>
            <span style={{ color: '#00d2ff' }}>●</span> 
            <span>Stokta: <strong>{stokAdedi} adet</strong></span>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '10px' }}>
          <p style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '16px', margin: '0 0 5px 0' }}>
            🚫 BU ÜRÜN TÜKENDİ
          </p>
          <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
            Geçici olarak temin edilemiyor.
          </p>
        </div>
      )}
    </div>
  );
};

export default UrunCard;