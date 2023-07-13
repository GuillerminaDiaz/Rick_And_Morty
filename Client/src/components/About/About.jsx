import style from './About.module.css'

const About= () => {
    return(
        <div className={style.aboutDiv}>
            <h1 className={style.h1}>About me...</h1>
            <div style={{"width": "70%"}}>
            <p className={style.text}>Hi my name is Guillermina Diaz, I´m studyng web development and this is my first project. On this web page about Rick and Morty you can find all the tv serie's characters and their descriptions. Search your favorites and save them...</p>
            </div>
            </div>
    )
}

export default About;