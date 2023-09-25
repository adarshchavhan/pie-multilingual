import Image from 'next/image';
import styles from './banner.module.css';
import Link from 'next/link';

const getData = async() => {
  const res = await fetch(`${process.env.SERVER}/api/banners/1?populate=*`, {
    cache: 'no-cache'
  });

  const data = await res.json();

  return data;
}

const Banner = async() => {
  const {data: {attributes: {bannerImg, clientImg}}} = await getData();

  return (
    <div className={styles.container}>
      <Image 
        src={process.env.SERVER+bannerImg.data.attributes.url} alt=''
        width={1024} height={580}
        className={styles.bannerImg}
      />

      <div className={styles.contentContainer}>
        <div className={styles.content}>

          <div className={styles.clientContainer}>
            <h3 className={styles.clientHeading}>Trusted by</h3>
            <div className={styles.clients}>
              {clientImg.data.map((item, i) =><span key={i}>
                <Image src={process.env.SERVER+item.attributes.url} alt='' className={styles.clientImg} width={160} height={40} />
              </span>
                )}
            </div>
          </div>

          <div className={styles.formContainer}>
              <h2 className={styles.formHeading}>Request a <span>FREE QUOTE</span></h2>
              <p className={styles.formBrief}>Partner with Multilingual Experts!</p>
              <p className={styles.formBrief}>Save your cost within 12 Hours.</p>

              <form className={styles.form}>
                <input type="text" className={styles.input} placeholder='Name' />
                <input type="email" className={styles.input} placeholder='Email' />
                <span className={styles.span}>
                  <button disabled>IN</button>
                  <input type="number" className={styles.input} placeholder='Phone' />
                </span>
                <textarea className={styles.textarea} cols="30" rows="7" placeholder='Write requirements'></textarea>

                <input type="file" className={styles.fileInput} id="fileInput" />

                <button className={styles.button}>➤ SEND</button>
                <p className={styles.text}>We respect your privacy <Link href="#">Policy</Link></p>
              </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Banner