import type { NextPage } from 'next'
import Script from 'next/script';
import CrossStorageHub from '../public/js/hub'

interface CallbackParameter {
    onSuccess: (idToken: string) => void
    onFailure: (err: Error) => void
}

const HubPage: NextPage = () => {
    return <>
        <div id='pass3-signin-button'>Login with PASS3</div>

        <Script id='fa' src="../js/hub.js" onReady={() => {
            CrossStorageHub.init([
                {origin: /https:\/\/beto-beto-salamander.github.io/, allow: ['get', 'set', 'del']},
              ]);
            
        }}>
        </Script>
    </>
}

export async function getServerSideProps(context : any) {
    console.log(context);
    return {
      props: {}, 
    }
  }

export default HubPage

// class CrossStorageHub {
//     static init(allowedOrigins: any) {

//         console.log(allowedOrigins);
//     }
// }


