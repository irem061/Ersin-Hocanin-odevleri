import React, { useState, useEffect } from 'react';

// Şehir verilerini buraya sabitliyoruz (Obje formatında)
const sehirVakitleri = {
  "İstanbul": { imsak: "05:41", ogle: "13:21", ikindi: "16:40", aksam: "19:07", yatsi: "20:25" },
  "Ankara": { imsak: "05:27", ogle: "13:06", ikindi: "16:26", aksam: "18:53", yatsi: "20:11" },
  "İzmir": { imsak: "05:48", ogle: "13:28", ikindi: "16:49", aksam: "19:15", yatsi: "20:32" },
  "Gaziantep": { imsak: "05:13", ogle: "12:51", ikindi: "16:11", aksam: "18:37", yatsi: "19:54" },
  "Bursa": { imsak: "05:41", ogle: "13:21", ikindi: "16:41", aksam: "19:07", yatsi: "20:25" },
  "Antalya": { imsak: "05:41", ogle: "13:17", ikindi: "16:39", aksam: "19:02", yatsi: "20:18" }
};

const Ramazan = () => {
  const [seciliSehir, setSeciliSehir] = useState("İstanbul");
  const [kalanSure, setKalanSure] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const simdi = new Date();
      const vakit = sehirVakitleri[seciliSehir].aksam;
      const [saat, dakika] = vakit.split(":");
      
      const iftarVakti = new Date();
      iftarVakti.setHours(parseInt(saat), parseInt(dakika), 0);

      const fark = iftarVakti - simdi;

      if (fark > 0) {
        const h = Math.floor((fark / (1000 * 60 * 60)) % 24);
        const m = Math.floor((fark / 1000 / 60) % 60);
        const s = Math.floor((fark / 1000) % 60);
        setKalanSure(`${h}s ${m}d ${s}s`);
      } else {
        setKalanSure("İftar Vakti Geldi!");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seciliSehir]);

  // CSS'i doğrudan JS içinde tanımlıyoruz (Inline Style)
  const styles = {
    container: { backgroundColor: '#f0f4f8', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' },
    card: { backgroundColor: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '350px' },
    header: { color: '#2d3436', textAlign: 'center', marginBottom: '1.5rem' },
    select: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #dfe6e9', marginBottom: '1.5rem', fontSize: '16px' },
    timerDisplay: { backgroundColor: '#e17055', color: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center', marginBottom: '1.5rem' },
    vakitRow: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f2f6' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>🌙 İmsakiye 2026</h2>
        
        {/* HATA BURADAYDI: Object.keys kullanarak objeyi döngüye sokuyoruz */}
        <select 
          style={styles.select} 
          value={seciliSehir} 
          onChange={(e) => setSeciliSehir(e.target.value)}
        >
          {Object.keys(sehirVakitleri).map((sehir) => (
            <option key={sehir} value={sehir}>{sehir}</option>
          ))}
        </select>

        <div style={styles.timerDisplay}>
          <div style={{fontSize: '12px', opacity: 0.8}}>İFTARA KALAN</div>
          <div style={{fontSize: '22px', fontWeight: 'bold'}}>{kalanSure}</div>
        </div>

        <div style={styles.vakitRow}><span>İmsak</span> <b>{sehirVakitleri[seciliSehir].imsak}</b></div>
        <div style={styles.vakitRow}><span>Öğle</span> <b>{sehirVakitleri[seciliSehir].ogle}</b></div>
        <div style={styles.vakitRow}><span>İkindi</span> <b>{sehirVakitleri[seciliSehir].ikindi}</b></div>
        <div style={{...styles.vakitRow, color: '#d63031', fontWeight: 'bold'}}><span>İftar</span> <span>{sehirVakitleri[seciliSehir].aksam}</span></div>
        <div style={styles.vakitRow}><span>Yatsı</span> <b>{sehirVakitleri[seciliSehir].yatsi}</b></div>
      </div>
    </div>
  );
};

export default Ramazan;