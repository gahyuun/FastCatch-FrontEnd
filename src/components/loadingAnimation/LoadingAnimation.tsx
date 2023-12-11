import { Player } from "@lottiefiles/react-lottie-player";

interface AnimationProps {
  width?: string;
  height?: string;
}

const LoadingAnimation = (props: AnimationProps) => {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/6e84eab2-118c-4b86-8a2c-8ad57074effc/NZi2m88LF2.json"
      style={{ height: props.height, width: props.width }}
    ></Player>
  );
};

LoadingAnimation.defaultProps = {
  width: "300px",
  height: "300px",
};

export default LoadingAnimation;
