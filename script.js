// 1. ELEMENTLERİ SEÇELİM (HTML'deki input ve listeyi JavaScript'e bağlarız)

// Input kutusunu seçiyoruz (kullanıcı görev yazacak)
const girisKutusu = document.getElementById("veri-kutusu");

// UL listesini seçiyoruz (görevler burada görünecek)
const listeKutusu = document.getElementById("liste");


// 2. ELEMAN EKLEME FONKSİYONU
function elemanEkle() {

    // Kullanıcının yazdığı metni bir değişkene alıyoruz
    let gorevMetni = girisKutusu.value;

    // KONTROL: Kullanıcı boş bir şey yazdı mı?
    // trim() baştaki ve sondaki boşlukları siler
    if (gorevMetni.trim() === '') {

        // Eğer boşsa kullanıcıya uyarı göster
        alert("Lütfen bir görev yazın!");

    } else {

        // A. YENİ BİR LİSTE ELEMANI OLUŞTUR
        let li = document.createElement("li");

        // B. INPUT'TAKİ YAZIYI Lİ'NİN İÇİNE KOY
        li.innerHTML = gorevMetni;

        // C. ÖNCELİK KONTROLÜ (ACİL GÖREV)
        // Eğer yazıda "Acil" kelimesi geçiyorsa
        if (gorevMetni.includes("Acil")) {

            // Arka plan rengini açık kırmızı yap
            li.style.backgroundColor = "#ffb3b3";

        }

        // D. Lİ'Yİ UL LİSTESİNE EKLE
        listeKutusu.appendChild(li);

        // E. SİLME BUTONU OLUŞTUR
        let span = document.createElement("span");

        // FontAwesome çöp kutusu ikonu ekliyoruz
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';

        // Span'i li'nin içine ekliyoruz
        li.appendChild(span);
    }

    // F. INPUT KUTUSUNU TEMİZLE
    girisKutusu.value = "";

    // G. İMLECİ TEKRAR INPUT'A GETİR (kullanıcı kolaylığı)
    girisKutusu.focus();
}


// 3. ENTER TUŞU İLE EKLEME ÖZELLİĞİ

// Input kutusunda bir tuşa basıldığında çalışacak event
girisKutusu.addEventListener("keyup", function(event) {

    // Eğer basılan tuş Enter ise
    if (event.key === "Enter") {

        // elemanEkle fonksiyonunu çalıştır
        elemanEkle();

    }

});


// 4. LİSTEDEKİ TIKLAMA OLAYLARI (EVENT DELEGATION)

listeKutusu.addEventListener("click", function(olay) {

    // Eğer kullanıcı doğrudan bir LI'ye tıkladıysa
    if (olay.target.tagName === "LI") {

        // "yapildi" class'ını aç/kapat (toggle)
        // Bu class CSS'te genelde üstü çizili yapar
        olay.target.classList.toggle("yapildi");
    }

    // Eğer kullanıcı çöp kutusuna tıkladıysa
    else if (olay.target.tagName === "SPAN" || olay.target.tagName === "I") {

        // closest("li") en yakın li elementini bulur
        // ve remove() ile siler
        olay.target.closest("li").remove();

    }

}, false);