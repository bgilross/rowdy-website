import facebook2 from '../images/facebook.svg'
import instagram2 from '../images/instagram.svg'
import spotify2 from '../images/spotify.svg'
import youtube2 from '../images/youtube.svg'

const Social = () => {
  return (
    // <div className="fixed md:absolute top-1/2 right-0 transform -translate-y-1/2 md:bottom-4 md:right-1/2 md:translate-x-1/2 md:-translate-y-0 flex flex-col md:flex-row md:items-center justify-center space-y-9 md:space-y-0 md:space-x-4 mr-4 md:mr-0">
    <div className="fixed md:absolute top-1/2 right-0 transform -translate-y-1/2 md:bottom-4 md:right-1/2 md:translate-x-1/2 md:-translate-y-0 grid gap-9 md:grid-cols-4 md:gap-4 md:place-items-center mr-4 md:mr-0">
      <img src={instagram2} alt="facebook" className="icons" />
      <img src={youtube2} alt="facebook" className="icons" />
      <img src={spotify2} alt="facebook" className="icons" />
      <img src={facebook2} alt="facebook" className="icons" />
    </div>
  )
}
export default Social
