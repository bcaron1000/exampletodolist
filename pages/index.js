import Button from '../components/ui/button';
import GoogleProvider from '../components/auth/provider/google/google';

function Home() {


  return (
    <div>
      <GoogleProvider>Continue with Google</GoogleProvider>
    </div>
  )
}
export default Home