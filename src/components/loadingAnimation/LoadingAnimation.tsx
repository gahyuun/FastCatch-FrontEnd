import { Player } from "@lottiefiles/react-lottie-player";

import "./LoadingAnimation.scss";
interface AnimationProps {
  width?: string;
  height?: string;
}

const LoadingAnimation = (props: AnimationProps) => {
  return (
    <div className="loading-container">
      <Player
        autoplay
        loop
        src="https://lottie.host/6e84eab2-118c-4b86-8a2c-8ad57074effc/NZi2m88LF2.json"
        style={{
          height: props.height,
          width: props.width,
        }}
      ></Player>
    </div>
  );
};

LoadingAnimation.defaultProps = {
  width: "300px",
  height: "300px",
};

export default LoadingAnimation;
