<<<<<<< HEAD
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>

         </Head>
         <body>
            <Main />
            <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-MDWHQ1SXMK"></script>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
               dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MDWHQ1SXMK');
          `,
               }}
            />
         </body>
      </Html>
   )
=======
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>

         </Head>
         <body>
            <Main />
            <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-MDWHQ1SXMK"></script>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
               dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MDWHQ1SXMK');
          `,
               }}
            />
         </body>
      </Html>
   )
>>>>>>> 9efee23f61af58f0afb6d8b5ca4875a9e985641b
}