import PhotoJPG from '../../assets/images/image-web-3-desktop.jpg';
import PhotoSmart from '../../assets/images/image-web-3-mobile.jpg';

export default function Photo(){
    return (
        <div className="photo">
            <img src={PhotoJPG} className="img" alt="image" />
            <img src={PhotoSmart} className="img_phone" alt="image_phone" />
        </div>
    )
}