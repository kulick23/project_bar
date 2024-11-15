import { makeAutoObservable } from "mobx";
import Slide1 from '../assets/Party/Tuesday.jpg';
import Slide2 from '../assets/Party/Wednesday.jpg';
import Slide3 from '../assets/Party/Thursday.jpg';
import Slide4 from '../assets/Party/Friday.jpg';
import Slide5 from '../assets/Party/Saturday.jpg';
import Slide6 from '../assets/Party/Sunday.jpg';

class SliderStore {
  slides = [
    { id: 1, name: "Tuesday", img: Slide1, des: "1+1 Coctails" },
    { id: 2, name: "Wednesday", img: Slide2, des: "1+1 Tincture" },
    { id: 3, name: "Thursday", img: Slide3, des: "Vodka + Cola" },
    { id: 4, name: "Friday", img: Slide4, des: "4+1 Tincture" },
    { id: 5, name: "Saturday", img: Slide5, des: "5+5 Tincture" },
    { id: 6, name: "Sunday", img: Slide6, des: "1+1 Beer" },

];

  constructor() {
    makeAutoObservable(this);
  }
}

const sliderStore = new SliderStore();
export default sliderStore;