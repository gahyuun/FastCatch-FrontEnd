import { Player } from "@lottiefiles/react-lottie-player";

interface AnimationProps {
  width?: string;
  height?: string;
}

const ErrorAnimation = (props: AnimationProps) => {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/f8702fe7-6b5e-44e7-be57-bae11236ecfd/RUUvt22hQV.json"
      style={{ height: props.height, width: props.width }}
    ></Player>
  );
};

ErrorAnimation.defaultProps = {
  width: "300px",
  height: "300px",
};

export default ErrorAnimation;
