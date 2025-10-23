import Link from 'next/link'
import { tumBloglariGetir } from '@/data/bloglar'

export default function Home({sonBlogs}){
  //sonBlogs getserverside dan gelecek en son 3 blog 
  return(
    <div className='animate-fade-in'>
        <section className='bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 text-white py-20'>

             {/*
              gradient arka plan içim
              bg-gradient-to-br = Sol üstten sağ alta gradient
              from-primary-500 = Başlangıç: turkuaz
              via-primary-600 = Orta: koyu turkuaz
              to-accent-500 = Bitiş: turuncu
            */}
            <div className='container-custom'>
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*
                      flex flex-col = Mobilde dikey (fotoğraf üstte, yazı altta)
                      md:flex-row = Orta ekranlarda yatay (yan yana)
                      items-center = Dikeyde ortala
                      gap-12 = Aralarında 3rem boşluk
                  */}
                  {/*profil fotosu için */}
                  <div className='flex-shrink-0'> 
                        {/*
                          flex-shrink-0 = Küçülmesin (fotoğraf hep aynı boyutta klsın diye)
                      */}

                      <div className='w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300'>
                          {/*
                            
                              rounded-full = Tam yuvarlak
                              overflow-hidden = Taşan kısmı gizle (fotoğraf yuvarlak görünsün)
                              border-4 = 4px kalınlığında beyaz kenarlık
                              shadow-2xl = Çok büyük gölge
                              hover:scale-110 = Hover'da %10 büyüt
                              transition-transform = Sadece transform değişikliklerini animasyonlu yap
                              duration-300 = 300ms sürsün
                        */}
                        <img src="/merve.jpg" alt="Merve Doğru" className='w-full h-full object-cover'/>
                        {/*
                          object-cover = Kırparak sığdır (oran bozulmz)
                        */}


                      </div>
                  </div>
                  {/*metin kısmı */}
                  <div className='flex-1 text-center md:text-left'>
                          {/*
                          flex-1 = Kalan alanı kapla
                          text-center = Mobilde ortala
                          md:text-left = Orta ekranlarda sola yasla
                        */}

                        <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                            Merhaba, ben Merve
                        </h1>

                        <p className='text-xl md:text-2xl mb-6 opacity-90'>
                              Yazılım Mühendisi ve Yazılım Geliştirici
                        </p>

                        <p className='text-lg mb-8 leading-relaxed'>
                            Yazılım, teknoloji ve hayat hakkında düşüncelerimi paylaşıyorum.
                        </p>

                        {/*butonlar */}
                        <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                              {/*
                                flex = Yan yana
                                flex-wrap = Sığmazsa alta geç
                                gap-4 = Aralarında 1rem boşluk
                                justify-center = Mobilde ortala
                                md:justify-start = Orta ekranlarda sola yasla
                              */}
                              <Link href="/blog" className='btn btn-secondary hover-lift'>
                                 Blogumu Oku
                              </Link>
                        </div>
                  </div>
                </div>
            </div>
        </section>

        {/*hakkımda detay bölümü */}
        <section className='py-16 container-custom'>
            <div className='grid md:grid-cols-1 gap-12'>
                {/*biyografi sol sütüun*/}
                <div className='space-y-6'>
                      <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                            Hakkımda
                      </h2>

                      <p className='text-lg text-gray-700 leading-relaxed'>
                            Merhaba! Ben Merve, yazılım mühendisiyim.Yazılım Mühendisliği bölümünden üçüncülük derecesiyle mezun olarak akademik başarımı profesyonel kariyerime taşıma azmiyle yola çıktım.
                      </p>

                      <p className='text-lg text-gray-700 leading-relaxed'>
                          Üniversite yıllarım kolay geçmedi. Algoritma derslerinde çok zorlandım, 
                          ilk projelerimde hata üstüne hata yaptım. Ama <strong>pes etmedim</strong>. 
                          Her gün biraz daha öğrendim, pratik yaptım ve sonunda başardım! 
                      </p>

                       <p className="text-lg text-gray-700 leading-relaxed">
                        Şu an bir şirkette yazılımcı olarak çalışıyorum ve bu blogda 
                        hem teknik konuları hem de kişisel deneyimlerimi paylaşıyorum.
                      </p>
                </div>                 
            </div>
        </section>

        {/*en son blog yazıları */}
        <section className='py-16 bg-gray-100'>
              <div className='container-custom'>
                  {/*başlık */}
                  <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                            Son Blog Yazılarım
                        </h2>
                        <p className='text-lg text-gray-600'>
                              Yazılım, teknoloji ve hayat hakkında düşüncelerim
                        </p>
                  </div>
                  {/*blog kartları */}
                  <div className='grid md:grid-cols-3 gap-8'>
                        {sonBlogs.map(blog => (
                            <Link 
                              key={blog.id}
                              href={`/blog/${blog.slug}`}
                              className="card hover-lift group"
                            >
                              <div className='mb-4'>
                                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                    blog.kategori === 'Kariyer'
                                    ? 'bg-blue-100 text-blue-800'
                                    : blog.kategori === 'Teknoloji'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-purple-100 text-purple-800'
                                  }`}>
                                    {blog.kategori}
                                  </span>
                              </div>

                              <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors'> 
                                {blog.baslik}
                              </h3>

                              <p className='text-gray-600 mb-4 line-clamp-3'>
                                    {/*
                                  line-clamp-3 = Maksimum 3 satır göster, kalanı "..." yap
                                */}
                                    {blog.ozet}
                              </p>
                              
                              {/*alt bilgi */}
                              <div className='flex items-center justify-between text-sm text-gray-500 mt-auto'>
                                    {/*
                                    mt-auto = Yukarıdan otomatik margin (kartın altına yapışsın)
                                  */}
                                  <span> {blog.tarih}</span>
                                  <span> {blog.okumaSuresi}</span>
                              </div>
                            </Link>
                        ))}
                  </div>

                  {/*tüm bloglar butonu */}
                  <div className='text-center mt-12'>
                        <Link href="/blog" className='btn btn-primary hover-lift'>
                          Tüm Yazıları Gör →
                        </Link>
                  </div>
              </div>
        </section>
    </div>
  )
}


//server side rendering

//static site generation (SSG)

export async function getStaticProps() {
    //bu fonksiyon buid time'DA bir kez çalışır (npm run build)
    //oluşturulan static HTML CDN'den serve edilir (çok hızlı!)
    
    const tumBloglar = tumBloglariGetir()
    const sonBlogs = tumBloglar.slice(0, 3)
    
    return {
      props: {
        sonBlogs
        // En son 3 blogu component'e gönder
      },
      revalidate: 3600  // ISR: 1 saat sonra yeniden oluşturur
      //revalidate sayesinde 1 saatte bir otomatik güncellcez
    }
}