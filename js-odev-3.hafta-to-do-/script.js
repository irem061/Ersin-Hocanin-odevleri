// Sayfa yüklendiğinde listeyi ve temayı kontrol et
document.addEventListener('DOMContentLoaded', () => {
    loadList();
    if (localStorage.getItem('dark-theme') === 'true') {
        document.body.classList.add('dark-theme');
        document.getElementById('mode-trigger').checked = true;
    }
});

// Yeni Dizi/Film Ekleme Fonksiyonu
function addNewContent() {
    const input = document.getElementById('movie-name');
    const value = input.value.trim();

    if (value === '') {
        alert('Lütfen boş bir isim girmeyin!');
        return;
    }

    let list = JSON.parse(localStorage.getItem('myWatchList')) || [];
    list.push({ id: Date.now(), text: value });
    
    localStorage.setItem('myWatchList', JSON.stringify(list));
    
    input.value = ''; // Giriş alanını temizle
    loadList(); // Listeyi yenile
}

// Listeyi Ekrana Basma Fonksiyonu
function loadList() {
    const listContainer = document.getElementById('content-list');
    listContainer.innerHTML = ''; // Önce temizle
    
    let list = JSON.parse(localStorage.getItem('myWatchList')) || [];

    if (list.length === 0) {
        listContainer.innerHTML = `<li class="empty-state">Henüz bir şey eklemediniz.</li>`;
        return;
    }

    list.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <span>${item.text}</span>
            <div class="actions">
                <button class="delete-btn" onclick="deleteItem(${item.id})">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        `;
        listContainer.appendChild(li);
    });
}

// Tek Bir Elemanı Silme
function deleteItem(id) {
    let list = JSON.parse(localStorage.getItem('myWatchList')) || [];
    list = list.filter(item => item.id !== id);
    localStorage.setItem('myWatchList', JSON.stringify(list));
    loadList();
}

// Tüm Listeyi Sıfırlama
function wipeAll() {
    if (confirm('Tüm listeyi silmek istediğinize emin misiniz?')) {
        localStorage.removeItem('myWatchList');
        loadList();
    }
}

// Tema Değiştirme
function switchTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme', isDark);
}

// Enter tuşuna basınca ekleme yapması için tetikleyici
document.getElementById('movie-name').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addNewContent();
    }
});