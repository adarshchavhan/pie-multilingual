import Image from 'next/image';
import styles from './country.module.css'

const getData = async() => {
    const res = await fetch(`${process.env.SERVER}/api/country-section?populate=*`);
    const data = await res.json();

    return data;
}

const Country = async() => {
    const {data:{attributes}} = await getData();

  return (
    <div className={styles.container}>
         <div className={styles.left}>
            <h1 className={styles.heading}>{attributes.heading}</h1>
            <p className={styles.desc}>{attributes.description}</p>
         </div>
         <div className={styles.right}>
            <Image 
                src={process.env.SERVER+attributes.img.data[0].attributes.url} 
                width={568} height={480}
                alt=''
                className={styles.img}
            />
         </div>
    </div>
  )
}

export default Country