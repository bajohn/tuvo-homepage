import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  //aspect ratio of all these images must match.
  // We used 1.77 width/height based on coolingtowers.jpg
  imgList = [
    {
      imgSrc: '/assets/img/coolingtowers.jpg',
    },
    {
      imgSrc: '/assets/img/refinery_adj.jpg',
    },
    {
      imgSrc: '/assets/img/steelmill_adj.jpg',
    },
    {
      imgSrc: '/assets/img/windturbines_adj.jpg',
    }
  ];
  idxShown = 0;
  offset = 0
  movingForward = true;
  containerStyle = {
    display: 'flex',
    width: (this.imgList.length * 100) + '%'
  }
  constructor() { }

  ngOnInit() {
    setInterval(this.incrementImgs.bind(this), 1000);
  }

  getStyle() {
    const ret = {
      left: this.offset + '%',
      width: (100 / this.imgList.length) + '%'
    }
    //console.log(ret);
    return ret;

  }

  incrementImgs() {
    const imgCnt = this.imgList.length;
    if (this.idxShown === imgCnt - 1) {
      this.movingForward = false;
    } else if (this.idxShown === 0) {
      this.movingForward = true;
    }

    const incrementer = this.movingForward ? -1 : 1;
    this.idxShown += -incrementer;
    this.offset = this.offset + incrementer * 100 / (imgCnt);

  }


}
