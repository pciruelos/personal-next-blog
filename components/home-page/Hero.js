import Image from 'next/image'
import classes from './Hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/1.png" alt="asd" width={300} height={300}/>
        </div>
        <h1>Hi, im Pablo</h1>
        <p>I am FullStack Developer based in Copenhague. passionate about programming.</p>
    </section>
  )
}

export default Hero