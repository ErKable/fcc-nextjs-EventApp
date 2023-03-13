import Link from "next/link"
import Image from "next/image"

export const Header = () => (
    <header>
      <div>
        <div className="topNav">
        <Image src={'/img/logo.png'} width={50} height={50} />
        <nav>   
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/events'>Events</Link></li>
            <li><Link href='/about-us'>About Us</Link></li>
          </ul> 
        </nav>
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet</h1>
    </header>
)