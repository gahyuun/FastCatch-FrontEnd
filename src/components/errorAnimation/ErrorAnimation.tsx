import { Player } from "@lottiefiles/react-lottie-player";

interface AnimationProps {
  width?: string;
  height?: string;
}

const ErrorAnimation = (props: AnimationProps) => {
  return (
    <div className="loading-container">
      <Player
        autoplay
        loop
        src="https://lottie.host/f8702fe7-6b5e-44e7-be57-bae11236ecfd/RUUvt22hQV.json"
        style={{
          height: props.height,
          width: props.width,
        }}
      ></Player>
      <p style={{ textAlign: "center" }}>
        알 수 없는 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.
      </p>
    </div>
  );
};

ErrorAnimation.defaultProps = {
  width: "300px",
  height: "300px",
};

export default ErrorAnimation;
