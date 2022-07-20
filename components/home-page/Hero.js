import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/1.png" alt="asd" width={300} height={300}/>
        </div>
        <h1>hi, im pablo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quo.</p>
    </section>
  )
}

export default Hero