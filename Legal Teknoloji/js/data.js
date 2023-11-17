        let translations;

        // Dil dosyasını yükle
        fetch('translations.json')
            .then(response => response.json())
            .then(data => {
                translations = data;
                // Tarayıcı dilini al
                const userLanguage = navigator.language || navigator.userLanguage;
                // Sayfayı kullanıcının tarayıcı diline göre güncelle
                changeLanguage(userLanguage.toLowerCase());
            });

        function changeLanguage(languageCode) {
            // Set the document language attribute
            document.documentElement.lang = languageCode;

            // Çevirileri al ve içeriği güncelle
            document.getElementById('slogan').innerText = translations[languageCode].slogan;
            document.getElementById('about').innerText = translations[languageCode].about;
        }