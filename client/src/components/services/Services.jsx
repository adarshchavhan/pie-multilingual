import Link from 'next/link';
import styles from './services.module.css';
import Image from 'next/image';

const getData = async() => {
  const res = await fetch(`${process.env.SERVER}/api/service-section?populate[serviceCards][populate]=*`);
  const data = await res.json();

  return data;
}

const Services = async() => {
  const {data: {attributes}} = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{attributes.heading}</h1>

      <div className={styles.services}>

        {attributes.serviceCards.data.map((item,i) => (
          <div className={styles.card} key={i}>
              <Image
                src={process.env.SERVER+item.attributes.icon.data.attributes.url}
                width={60} height={60}
                className={styles.icon}
                alt=''
              />
              <div className={styles.content}>
                <div className={styles.title}>{item.attributes.title}</div>
                <div className={styles.desc}>{item.attributes.description}</div>
                <Link href={item.attributes.link} className={styles.link}>
                  <svg className={styles.sendIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M1.177 1.119a.5.5 0 0 1 .547-.066l13 6.5a.5.5 0 0 1 0 .894l-13 6.5a.5.5 0 0 1-.702-.594L2.977 8L1.022 1.647a.5.5 0 0 1 .155-.528ZM3.869 8.5l-1.547 5.03L13.382 8L2.322 2.47L3.869 7.5H9.5a.5.5 0 0 1 0 1H3.87Z"/></svg>
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services