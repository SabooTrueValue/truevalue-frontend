import { useEffect, useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";


function React360({ images }) {
  const [rotationDisabled, setRotationDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRotationDisabled(true);
    }, 2000);

    return clearTimeout();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <ReactImageTurntable
        images={images}
        // autoRotate={{ disabled: true }}
        className="h-full cursor-grab"
        onClick={() => setRotationDisabled(true)}
        autoRotate={{ disabled: rotationDisabled, interval: 50 }}
      />
    </div>
  );
}

export default React360;
