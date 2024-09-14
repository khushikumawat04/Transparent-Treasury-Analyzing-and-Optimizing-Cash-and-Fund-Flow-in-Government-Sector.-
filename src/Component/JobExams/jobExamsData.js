import {AiFillBank} from 'react-icons/ai'
import Upsc from "./JobImage/upsc.png";
import UPSC from "./UPSC Geo Scientist .pdf"
import RBI from './RBI Grade B .pdf';
import KVPY from './KVPY.pdf';
import IBPS from './IBPS PO .pdf';
import UPSCS from './UPSC Stenographer.pdf';
import UPPSC from './UPPSC.pdf';

export const dataDigitalBestSeller = [
    {
      id: 1,
      icon: <AiFillBank/>,
      head: <a href={UPSC}>UPSC Geo Scientist</a>,
      image: './images/ibps.png',
      // image: {jobImag}
      
    },
    {
      id: 2,
      icon: <AiFillBank/>,
      head: <a href={RBI}>RBI Grade B</a>,
      image: './images/ibps.png',
      
    },
    {
      id: 3,
      icon: <AiFillBank/>,
      head: <a href={KVPY}>KVPY</a>,
      image: './images/kvpy.png',
      
    },
    {
      id: 4,
      icon: <AiFillBank/>,
      head: <a href={UPPSC}>UPPSC</a>,
      image: './images/kvpy.png',
      
    },
    {
      id: 5,
      icon: <AiFillBank/>,
      head: <a href={IBPS}>IBPS PO</a>,
      image:'http://picsum.photos/200',
      
    },
    {
      id: 6,
      icon: <AiFillBank/>,
      head: <a href={UPSCS}>UPSC Steno</a>,
      image: './images/kvpy.png',
      
    },
  ];