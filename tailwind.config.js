/** @type {import('tailwindcss').Config} */  //otomatik tamamlama için 


module.exports={
    //tailwind hangi dosyalarda classs arayacak
    content:[
        "./pages/**/*.{js,ts,jsx,tsx}", //pages klasöründeki tüm alt dosyalarında
        "./components/**/*.{js,ts,jsx,tsx}" , //componet klasöründeki tüm dosyalarda

    ],

    theme:{
        extend:{
            //özel renkler ekliycez
            colors:{
                //ana renk paleti belirlicem turkuaz olarak belirliyorum
                primary:{
                    50: '#f0fdfa',   // Çok açık turkuaz
                    100: '#ccfbf1',  // Açık turkuaz
                    200: '#99f6e4',  
                    300: '#5eead4',  
                    400: '#2dd4bf',  
                    500: '#14b8a6',  // Ana turkuaz (en çok kullanacağımız)
                    600: '#0d9488',  // Koyu turkuaz
                    700: '#0f766e',  
                    800: '#115e59',  
                    900: '#134e4a',  // Çok koyu turkuaz
                },
                //vurgu renleri olarak amber/turuncu olacak
                accent:{
                    400: '#fbbf24',  // Açık turuncu
                    500: '#f59e0b',  // Ana turuncu
                    600: '#d97706',  // Koyu turuncu
                }
            },

            //özel fontolar belirleyelim
            fontFamily:{
                //genel kullanım için sans
                sans:['Inter','system-ui','sans-serif'],
                //kod blokları içimn
                mono:['Fira Code', 'monospace'],

            },
            //özel animasyonlar
            animation:{
                //yavaş yavaş beiren fonk
                'fade-in':'fadeIn 0.6s ease-in', //ease-in yavaş başla sonra hızlan
                //yukarıdan aşağı doğru kayan animasyon
                'slide-down': 'slideDown 0.4s ease-out', //ease-out hızlı başla sonra yavaşla
            },
            keyframes:{ //keyframes animasyonun nasıl yapılacağını adım adım tanımlar
                fadeIn:{
                    '0%':{opacity:'0',transform:'translateY(10px)'}, //başlangıçta görünmez 10 px aşağıda
                    '100%': { opacity: '1', transform: 'translateY(0)' },//Bitiştr görünür, normal konumda
                    },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' }, // Başlangıç: 10px yukarıda, görünmez
                    '100%': { transform: 'translateY(0)', opacity: '1' },   // Bitiş: normal konumda, görünür
                    },
                },

            },
        },
        plugins:[],
    }
