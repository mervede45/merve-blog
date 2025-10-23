import Link from 'next/link'

export default function Layout({children}){
    //children bu layout içine koyacağımız sayfalar

    return(
        <div className='min-h-screen flex flex-col bg-gray-50'>
            {/*
                min-h-screen = Minimum yükseklik ekranın %100'ü
                flex = Flexbox kullan
                flex-col = Dikey yerleştir (header, content, footer)
            */}

            {/*header kısmı */}
            <header className='bg-white shadow-md sticky top-0 z-50'>
                {/*
                sticky = Scroll yapınca yukarıda sabitle
                z-50 = Z-index yüksek (diğer elementlerin üstünde)
                */}
                <nav className='container-custom'>
                    <div className='flex items-center justify-between py-6'>
                        {/*
                            items-center = Dikeyde ortala
                            justify-between = Sağa sola yasla (logo sol, menü sağ)
                        */}

                        {/*logo kısmı */}
                        <Link href="/" className='group'>
                        {/* group alt elementlerden hoverdan etkilensin diye*/}
                            <h1 className='text-3xl font-bold gradient-text group-hover:scale-105 transition-transform'>
                                {/*

                                    gradient-text = globals.css'ten özel class (turkuaz-turuncu gradient)
                                    group-hover:scale-105 = Ana element hover olunca %5 büyüt
                                    transition-transform = Büyütme animasyonlu
                                */}
                                Merve Doğru
                            </h1>
                            <p className='text-sm text-gray-600'>
                                Yazılım Mühendisi
                            </p>
                        </Link>

                        {/*menü linkleri */}
                        <div className='flex gap-8'>
                            <Link href="/" className='text-gray-700 hover:text-primary-500 font-medium transition-colors relative group'>
                            {/*
                                
                                transition-colors = Renk değişimi yumuşak
                                relative = Pozisyon relative (alt çizgi için gerekli)
                                group = Alt element'ler hover'dan etkilenir
                                */}

                                Ana Sayfa

                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
                                {/*
                                    ALTTAN ÇİZGİ ANİMASYONU:
                                    absolute = Mutlak konumlandırma
                                    bottom-0 = Alttan 0px
                                    left-0 = Soldan 0px
                                    w-0 = Başlangıçta genişlik 0 (görünmez)
                                    h-0.5 = Yükseklik 2px (ince çizgi)
                                    bg-primary-500 = Turkuaz renk
                                    group-hover:w-full = Hover olunca genişlik %100 (tüm yazının altını çiz)
                                    transition-all = Tüm değişiklikler animasyonlu
                                    duration-300 = 300ms sürsün
                                    */}
                            </Link>
                            <Link href="/blog" className='text-gray-700 hover:text-primary-500 font-medium transition-colors relative group' >
                                Blog
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* main(içerik kısmı) */}
            <main className='flex-1'>
                {/*
                flex-1 = Kalan tüm alanı kapla (header ve footer arasındaki boşluğu doldur)
                */}
                {children} {/*sayfalrın içerği buraya gelece */}
            </main>

            {/*footer alanı */}
            <footer className='bg-gray-900 text-gray-300 py-12 mt-20'>
                <div className='container-custom'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div> {/*hakkımızda sütunun */}
                            <h3 className='text-white text-lg font-bold mb-4'>
                                Merve Doğru
                            </h3>
                            <p className='leading-relaxed'>
                                Yazılım Mühendisi. Yazılım, teknoloji ve hayat hakkında yazıyorum.
                            </p>
                        </div>

                        <div> {/*hızlı lnkler */}
                            <h3 className='text-white text-lg font-bold mb-4'>Hızlı Linkler</h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link href="/" className='hover:text-primary-400 transition-colors'>
                                    Ana Sayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:text-primary-400 transition-colors">
                                    Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*copyrıght */}
                    <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500'>
                        <p>&copy; 2025 Merve Doğru. Tüm hakları saklıdır</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}