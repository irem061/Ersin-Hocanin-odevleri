import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  // Yeni öğrenci ekleme fonksiyonu
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  // Öğrenci silme fonksiyonu
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Öğrenci Kayıt Paneli</h1>
      
      <div style={{ display: 'flex', gap: '50px', marginTop: '30px' }}>
        {/* Sol Taraf: Form */}
        <div style={{ flex: 1 }}>
          <StudentForm onAddStudent={addStudent} />
        </div>

        {/* Sağ Taraf: Liste */}
        <div style={{ flex: 2 }}>
          <StudentList students={students} onDeleteStudent={deleteStudent} />
        </div>
      </div>
    </div>
  );
};

export default App;