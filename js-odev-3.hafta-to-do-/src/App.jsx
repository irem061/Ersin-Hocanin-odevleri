import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. LocalStorage'dan verileri çekiyoruz (Başarılı mantığınız korundu)
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('muhammed_todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState('');

  // 2. State her değiştiğinde LocalStorage'ı güncelliyoruz
  useEffect(() => {
    localStorage.setItem('muhammed_todos', JSON.stringify(todos));
  }, [todos]);

  // 3. Yeni görev ekleme fonksiyonu
  const handleAdd = () => {
    if (text.trim() === '') return;
    
    // Yeni özelliğimiz: Her görevin artık bir de "tamamlandı" (completed) durumu var
    setTodos([...todos, { id: Date.now(), gorev: text, completed: false }]);
    setText('');
  };

  // 4. Görevi silme fonksiyonu
  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // 5. YENİ: Görevin durumunu tamamlama/geri alma fonksiyonu
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // İstatistik için tamamlanan görevleri sayalım
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="main-wrapper">
      <div className="todo-card">
        <header>
          <span className="label">Hafta 3: Todo App</span>
          <h1>Yapılacaklar</h1>
          
          {/* YENİ: Dinamik sayaç */}
          {todos.length > 0 && (
            <span className="todo-count">
              {completedCount} / {todos.length} Tamamlandı
            </span>
          )}
        </header>

        <div className="input-box">
          <input
            type="text"
            placeholder="Görev yaz ve enter'a bas..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            // GÜNCELLEME: onKeyPress yerine modern standart olan onKeyDown kullanıldı
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button onClick={handleAdd}>Ekle</button>
        </div>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              {/* Metne tıklandığında üstünü çizip açma özelliği */}
              <span 
                onClick={() => toggleComplete(todo.id)} 
                className="todo-text"
                style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none', opacity: todo.completed ? 0.5 : 1 }}
              >
                {todo.completed ? '✓ ' : '○ '} {todo.gorev}
              </span>
              <button onClick={() => handleDelete(todo.id)} className="del-btn">Sil</button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <div className="empty-state">
            <p className="empty">🎉 Harika! Tüm görevleri tamamladın veya henüz hiç görev eklemedin.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;