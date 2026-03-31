import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({ name: '', department: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.department) return alert("Lütfen tüm alanları doldurun!");
    
    onAddStudent(formData);
    setFormData({ name: '', department: '' }); // Formu temizle
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h3>Yeni Kayıt</h3>
      <input
        type="text"
        placeholder="Öğrenci Adı"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={{ padding: '10px' }}
      />
      <input
        type="text"
        placeholder="Bölüm"
        value={formData.department}
        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        style={{ padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
        Ekle
      </button>
    </form>
  );
};

export default StudentForm;