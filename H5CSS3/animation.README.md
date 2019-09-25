```css
.wise-loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  color: #3288ff;
  animation: wise-loading 0.6s linear 0s infinite alternate;
  /*          name        周期花费时间  开始时间  动画次数  轮流反向播放*/
}
@keyframes wise-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```
