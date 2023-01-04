import type { NextPage } from 'next'
import Script from 'next/script';

interface CallbackParameter {
    onSuccess: (idToken: string) => void
    onFailure: (err: Error) => void
}

const HostPage: NextPage = () => {
    return <>
        <div id='pass3-signin-button'>Login with PASS3</div>

        <Script id='fa' src="../js/hub.js" onReady={() => {
           
        }}>
        </Script>
    </>
}

export async function getServerSideProps(context : any) {
    console.log("IINI CONTEXT",context);
    return {
      props: {}, 
    }
  }

export default HostPage
