
//blog listesi sayfdası
import Link from 'next/link'

import { tumBloglariGetir,kategorileriGetir } from '@/data/bloglar'

import { useState } from 'react'

export default function BlogListesi({bloglar,kategoriler}){
    const [seciliKategori,setSeciliKategori]=useState('Tümü')

    const filtrelenmisBloglar=seciliKategori==='Tümü'
    ? bloglar
    : bloglar.filter(blog=>blog.kategori===seciliKategori)

    return(
        <div className='py-16 container-custom animate-fade-in'>
            {/*başlık */}
            <div className='text-center mb-12'>
                <h1 className='text-5xl font-bold text-gray-900 mb-4'> 
                    Blog Yazılarım
                </h1>
                <p className='text-xl text-gray-600'> 
                    Yazılım,teknoloji ve hayat hakkında düşüncelerim,deneyimlerim.
                </p>
            </div>

            {/* katagori filtreleri */}
            <div className='flex flex-wrap gap-3 justify-center mb-12'>
                {/*tüm kategoriler btonu */}
                <button onClick={()=>setSeciliKategori('Tümü')}
                    className={`px-6 py-2 rounded-full font-medium transition-all
                    ${
                        seciliKategori==='Tümü'
                        ? 'bg-primary-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}>
                       Tümü ({bloglar.length}) 
                </button>

                {/*kategori butonları */}
                {kategoriler.map(kategori=>(
                    //her kategori için bir buton oluşturucam
                    <button
                    key={kategori}
                    onClick={()=>setSeciliKategori(kategori)}//tıklanınca bu kategoriyi sçe 
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                        seciliKategori===kategori
                        ? 'bg-primary-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    >
                        {kategori} ({bloglar.filter(b=>b.kategori===kategori).length})
                    </button>
                ))}
            </div>

            {/*blog kartları */}
            {filtrelenmisBloglar.length === 0 ? (
                //EĞER filtrelenmiş blog yoksa yani o kategoride blog yoksa
                <div className='text-center py-16'>
                    <p className='text-2xl text-gray-600 mb-4'>
                        Bu kategoride henüz bir yazı yok!
                    </p>
                    <button onClick={()=>setSeciliKategori('Tümü')} className='btn btn-primary'>
                        Tüm Yazılara Geri Dön
                    </button>
                </div>
            ) : (
                //filtrelenmiş bloglar varsa
                <div className='grid md:grid-cols-2 gap-8'>
                    {filtrelenmisBloglar.map(blog=>(
                        //her blog için bir kart
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.slug}`}
                            className='card hover-lift group'
                        >
                        {/*üst bilgi */}
                        <div className='flex items-center justify-between mb-4'>
                             {/*
                                justify-between = Sağa sola yasla
                            */}
                            <span className={`inline-block px-3 rounded-full text-sm font-medium ${
                                blog.kategori==='Teknoloji'
                                ? 'bg-blue-100 text-blue-800'
                                : blog.kategori==='Kariyer'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                                {blog.kategori}

                            </span>
                        </div>
                        {/*başlık */}
                        <h2 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors'>
                                {blog.baslik}
                        </h2>
                        {/*özet */}
                        <p className='text-gray-600 mb-4 leading-relaxed'>
                            {blog.ozet}
                        </p>
                        {/*alt bilgi */}
                        <div className='flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200'>
                            <span>{blog.tarih}</span>
                            <span className='text-primary-600 font-medium group-hover:translate-x-2 transition-transform'>
                                 {/*
                                    group-hover:translate-x-2 = Kart hover olunca 8px sağa kayar
                                    transition-transform = Kayma animasyonlu
                                */}
                                Devamını Oku →
                            </span>
                        </div>
                      </Link>
                    ))}
                </div>
            )
        
        }
        </div>
    )
}




//static site generation (SSG)

export async function getStaticProps() {
    //Build time'da çalışır, static HTML oluşturur
    
    const bloglar = tumBloglariGetir()
    const kategoriler = kategorileriGetir()

    return {
        props: {
            bloglar, //tüm blogları komponente gönderiyorum
            kategoriler //tüm kategorileri de komponente gönderiyorum
        },
        revalidate: 3600  // 1 saatte bir yeniden oluştur
    }
}

