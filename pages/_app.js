import "@/styles/globals.css";

import Layout from "@/components/Layout";

export default function App({Component,pageProps}){
  //component:aktif gelen sayfa indej.js blog/index.js gibi
  //pageProps ise sayfaya gönderilen propslar
  return(
    <Layout>
      <Component {...pageProps}/>  {/*propsları sayfaya ajkatarıyoruz */}

      {/*
        örnek akış
        export async function getStaticProps({ params }) {
        const blog = bloglar.find(b => b.slug === params.slug);
        return { props: { blog } };  // ← pageProps oluştu!
      }
        ↓
      // 3) _app.js'e gönderdi:
      Component = pages/blog/[slug].js'teki default export
      pageProps = { blog: {...blog verisi...} }
        ↓
      // 4) _app.js render etti:
      <Layout>
        <Component {...pageProps} />
        {/* Yani: <BlogDetay blog={...} /> */}

    </Layout>
  )
}