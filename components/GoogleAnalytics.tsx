import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      defer
      src="https://www.googletagmanager.com/gtag/js?id=G-EJ15BC1R3Q"
      strategy="afterInteractive"
    />
    <Script defer id="ga" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', 'G-EJ15BC1R3Q');
        `}
    </Script>
  </>
);

export default GoogleAnalytics;
