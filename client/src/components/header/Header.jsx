import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import Sidebar from '../sidebar/Sidebar';

const topLinks = [
  {
    text: "Indrustries We Serve",
    url: "#"
  },
  {
    text: "Languages",
    url: "#"
  },
  {
    text: "About Us",
    url: "#"
  },
  {
    text: "Contact Us",
    url: "#"
  }
]

const bottomLinks = [
  {
    text: "FOREFGN LANGUAGE SUPPORT",
    url: "#"
  },
  {
    text: "MARKET RESEARCH & ANALYSIS",
    url: "#"
  },
  {
    text: "TRANSCRIPTION SERVICES",
    url: "#"
  },
  {
    text: "MULTILINGUAL CALL CENTER",
    url: "#"
  },
  {
    text: "DATA ENTRY SERVICES",
    url: "#"
  },
  {
    text: "CREATIVE SERVICES",
    url: "#"
  },{
    text: "PHOTO EDITING SERVICES",
    url: "#"
  },
  {
    text: "VIRTUAL ASSISTANT SERVICES",
    url: "#"
  },
]

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
          <div className={styles.left}>
            <Link href="/">
              <Image 
                src='/logo.svg'
                width={280} height={55}
                className={styles.logoImg}
                alt=''
              />
            </Link>

            <Sidebar links={bottomLinks} />
          </div>
          
          <div className={styles.right}>
            <div className={styles.menu}>
              <Link href='#' className={styles.menuLink} >
                <img src="/gears.svg" alt="" />
                ALL SERVICES
              </Link>
              <span>
              {topLinks.map((item, i)=> <Link href={item.url} className={styles.menuLink} key={i}>{item.text}</Link>)}
              </span>
            </div>

            <div className={styles.search}>
              <input type="text" className={styles.searchInput} placeholder='Search...' />
              <button className={styles.searchBtn}>
                <img src="/search.svg" alt="" />
              </button>
            </div>
          </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContainer}>
          {bottomLinks.map((item, i)=> <Link href={item.url} className={styles.bottomBarLink} key={i}>{item.text}</Link>)}
        </div>
      </div>
    </div>
  )
}

export default Header