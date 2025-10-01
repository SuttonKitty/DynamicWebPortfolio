import './styles.css'
import {ASCII} from './ascii-data'
// import CHICKEN_IMG from '../../assets/chicken2.jpeg'
import AsciiList from './AsciiList'

const AsciiCard = () => {
  return (
    <div className="card">
      <img src={ASCII.imgSrc} alt="kittykitty" className="cat_img" />
      <AsciiList ascii={ASCII.ascii} title="Ascii" />
    </div>
  )
}
export default AsciiCard
