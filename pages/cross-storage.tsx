import type { NextPage } from 'next'
import Script from 'next/script';

interface CallbackParameter {
    onSuccess: (idToken: string) => void
    onFailure: (err: Error) => void
}

const HubPage: NextPage = () => {
    return <>
        <div id='pass3-signin-button'>Login with PASS3</div>

        <Script id='fa' src="/js/hub.js" onReady={() => {
            CrossStorageHub.init([
                {origin: /\.beto-beto-salamander.github.io$/, allow: ['get', 'set', 'del']}
              ]);
            
        }}>
        </Script>
    </>
}

export async function getServerSideProps() {
    console.log('abc');
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default HubPage

class CrossStorageHub {
    static init(allowedOrigins: any) {
        console.log('init');
    }
}


