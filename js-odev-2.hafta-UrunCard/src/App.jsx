import React from 'react';

// 1. ÖDEV BİLEŞENİ: UrunCard (Yenilenmiş Tasarım)
const UrunCard = ({ ad, fiyat, stokAdedi, kategori }) => {
  // Dinamik Koşul
  const isStokYok = stokAdedi === 0;

  // --- YENİLENMİŞ STİLLER (Dinamik) ---
  const cardStyle = {
    // Stok yoksa koyu gri, varsa lacivert-siyah arka plan
    backgroundColor: isStokYok ? '#2d2d2d' : '#0a0e17',
    // Stok yoksa gri border, varsa parlak siber mavi border
    border: `1px solid ${isStokYok ? '#555' : '#00d2ff'}`,
    padding: '30px',
    borderRadius: '20px', // Daha oval köşeler
    width: '320px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', // Boşluklar biraz artırıldı
    opacity: isStokYok ? 0.6 : 1, // Stok yoksa daha sönük
    transition: 'all 0.3s ease', // Hafif geçiş efekti
    boxShadow: isStokYok ? 'none' : '0 10px 20px rgba(0, 210, 255, 0.15)', // Mavi parlama efekti
    color: '#fff' // Varsayılan metin rengi beyaz
  };

  const badgeStyle = {
    color: isStokYok ? '#aaa' : '#00d2ff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '-5px'
  };

  const priceStyle = {
    color: isStokYok ? '#888' : '#fff',
    fontSize: '28px',
    fontWeight: '800',
    margin: '10px 0',
    background: isStokYok ? 'none' : 'linear-gradient(90deg, #00d2ff, #3a7bd5)', // Fiyata gradyan efekti
    WebkitBackgroundClip: isStokYok ? 'none' : 'text',
    WebkitTextFillColor: isStokYok ? 'none' : 'transparent',
  };

  return (
    <div style={cardStyle}>
      <small style={badgeStyle}>{kategori}</small>
      <h2 style={{ margin: '0', fontSize: '22px', fontWeight: '600' }}>{ad}</h2>
      
      {/* SEPARATÖR ÇİZGİSİ (YENİ EKLEDİK) */}
      <div style={{ height: '1px', backgroundColor: isStokYok ? '#444' : '#222', margin: '5px 0' }}></div>

      {/* MANTIKSAL KOŞULLAR (İçerik Değişimi) */}
      {!isStokYok ? (
        <>
          <p style={priceStyle}>{fiyat.toLocaleString('tr-TR')} ₺</p> {/* Fiyat formatlandı */}
          
          {/* Fiyat ve Stok Bilgisini Aynı Satıra Aldık */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#ccc', fontSize: '14px' }}>
            <span>✅ Stokta Mevcut</span>
            <span style={{ color: '#555' }}>|</span>
            <span style={{ fontWeight: 'bold', color: '#fff' }}>{stokAdedi} adet</span>
          </div>
        </>
      ) : (
        // Stok Yoksa Gösterilecek Alan (Farklı metin ve renk)
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#ff4444', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
            🚫 ÜRÜN TÜKENDİ
          </p>
          <p style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>
            Yeni stoklar için takipte kalın.
          </p>
        </div>
      )}
    </div>
  );
};

// 2. ANA UYGULAMA (Yenilenmiş Arka Plan)
export default function App() {
  return (
    <div style={{ 
      // Çok koyu lacivert-siyah gradyan arka plan
      background: 'radial-gradient(circle, #101520 0%, #050505 100%)',
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '40px', // Kartlar arası boşluk artırıldı
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" // Daha modern yazı tipi
    }}>
      
      {/* Ürün 1: Stokta Var */}
      <UrunCard 
        ad="Süper Güçlü Oyun Bilgisayarı" 
        fiyat={45999.90} // Fiyatı biraz küsuratlı yaptık
        stokAdedi={12} 
        kategori="Elektronik" 
      />

      {/* Ürün 2: Stokta Yok (Hocanın istediği kritik test) */}
      <UrunCard 
        ad="Pro Kablosuz Kulaklık" 
        fiyat={3200} 
        stokAdedi={0} 
        kategori="Aksesuar" 
      />

    </div>
  );
}