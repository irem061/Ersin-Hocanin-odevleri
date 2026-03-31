import React from 'react';

const StudentList = ({ students, onDeleteStudent }) => {
  return (
    <div>
      <h3>Kayıtlı Öğrenciler</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px' }}>İsim</th>
            <th style={{ padding: '10px' }}>Bölüm</th>
            <th style={{ padding: '10px' }}>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="3" style={{ padding: '10px', textAlign: 'center' }}>Henüz kayıt yok.</td></tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td style={{ padding: '10px' }}>{s.name}</td>
                <td style={{ padding: '10px' }}>{s.department}</td>
                <td style={{ padding: '10px' }}>
                  <button 
                    onClick={() => onDeleteStudent(s.id)}
                    style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;