import { blogGetir,tumBloglariGetir } from "@/data/bloglar";

import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetay({blog,ilgiliBloglar}){
    //blog bu sayfanın blok yazısı yani içeriği deiyeiblriz
    //ilgiliBloglar aynı kategorideki diğer bloglar
    if(!blog){
        return(
            <div className="container-custom py-16 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                    Üzgünüz,aradığınız blog yazısı bulunamadı.
                </h1>
                <Link href="/blog" className="btn btn-primary">
                    Blog Sayfasına Dön
                </Link>
            </div>
        )
    }


    return(
        <article className="animate-fade-in">
            {/*
                article = HTML5 semantic tag (makale için klanılıyor)
                animate-fade-in = globals.cssten (yavaşça beliriyor)
            */}
            {/*hero bölümü 8başlık alanı yani */}
            <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16">
                <div className="container-custom">
                    {/*kategori etiketi */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                            {blog.kategori}
                        </span>
                    </div>
                    {/*başlık */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {/*
                            leading-tight = Satır aralığı dar (başlık için uygun)
                        */}
                        {blog.baslik}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-lg">
                        <div className="flex items-center gap-2">
                            
                            <span>{blog.tarih}</span>
                        </div>
                        <div className="flex items-center gap-2">
                     
                             <span>Merve Doğru</span>
                        </div>
                    </div>
                </div>
            </section>


            {/*içerik bölümü */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/*blog içeriği */}
                        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{__html:blog.icerik}}>
                             {/*
                                prose = globals.css'ten(tailwindin özellikleri arasında paragraf metin stilleri) (blog içeriği stilleri)
                                prose-lg = Büyük boyut (18px paragraflar)
                                max-w-none = Genişlik sınırı yok
                            */}
                            
                            {/*dangerouslySetInnerHTML !!!!
                             normalde html render edilmez ancak biz bu html ye güvendiğimiz
                            için bu html yi render ediyoruz ekranda gösteriyorz
                            dangerouslysetınnerhtml ile başlıklar büyük yazılar fontlar vs
                            düzgün gelir çünkü biz bloglar.js de içerik kısmını htmlk
                            şeklinde yazmıştık bu da onu düzgünce çalıştırı
                            eğer o olmasaydı normal "<h1>...</h1> gibi gidecekti ama şimdfi başlık
                            şleklinde gicedek"*/}
                        </div>
                    </div>
                </div>
            </section>

            {/*ilgili yazılar */}
            {ilgiliBloglar.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container-custom">
                        {/*başlık */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            İlgini Çekebilecek Diğer Yazılara Göz At
                        </h2>

                        {/*ilgili blog kartları */}

                        <div className="grid md:grid-cols-3 gap-6">
                            {ilgiliBloglar.map(ilgiliBlog=>(
                                //her ilgi blog için bir kart
                                <Link
                                    key={ilgiliBlog.id}
                                    href={`/blog/${ilgiliBlog.slug}`}
                                    className="card hover-lift group"
                                >
                                    {/*kategori */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                                        ilgiliBlog.kategori==='Teknoloji'
                                        ? 'bg-blue-100 text-blue-800'
                                        : ilgiliBlog.kategori ==='Kariyer'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-purple-100 text-purple-800' 
                                    }`}>
                                        {ilgiliBlog.kategori}
                                    </span>
                                    {/*başlık */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {ilgiliBlog.baslik}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {/*
                                        line-clamp-2 = Maksimum 2 satır göster, kalanı "..." yap
                                        */}
                                        {ilgiliBlog.ozet}
                                    </p>
                                    <div className="text-sm text-gray-500">
                                            {ilgiliBlog.tarih}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    )
}


//getStaticPaths
export async function getStaticPaths() {
    //BUILD TIME'DA tüm blog sayfalarını oluştur
    
    const bloglar = tumBloglariGetir()
    
    //Her blog için bir path (yol) oluştur
    const paths = bloglar.map(blog => ({
        params: { slug: blog.slug }
        //Örnek: { params: { slug: 'yazilim-dunyasina-giris' } }
    }))
    
    return {
        paths,  // [{ params: { slug: '...' } }, { params: { slug: '...' } }, ...]
        fallback: false  
        //fallback: false = Listede olmayan slug'lar 404 döner
    }
}


export async function getStaticProps({params}){
    //BUILD TIME'DA her slug için bu fonksiyon çalışır
    
    //params URL'den gelen değişkenler mesela params.slug yani slug değerini aldık
    const slug = params.slug
    // URL: /blog/yazilim-dunyasina-giris
    // slug = 'yazilim-dunyasina-giris'

    
    const blog = blogGetir(slug)

    
    //Eğer blog bulunamadıysa 404
    if(!blog){
        return {
            notFound: true  //Next.js otomatik 404 sayfası gösterir
        }
    }

    //İlgili blogları bul (aynı kategoriden, kendisi hariç)
    const tumBloglar = tumBloglariGetir()
    const ilgiliBloglar = tumBloglar
        .filter(b => b.kategori === blog.kategori && b.id !== blog.id)
        .slice(0, 3)
    
    
    return {
        props: {
            blog,  //Ana blog yazısı
            ilgiliBloglar  //Aynı kategoriden diğer bloglar (max 3 tane)
        },
        revalidate: 3600  //ISR - 1 saatte bir yeniden oluştur
    }
}
