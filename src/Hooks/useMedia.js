import { useState, useEffect } from "react";
export const cameraPreview = () => {
    const [stream, setStream] = useState(null);
    useEffect(() => {
        let activeStream;
        navigator.mediaDevices.getUserMedia({video:true,audio:false})
            .then((s) => {
                activeStream = s;
                setStream(activeStream);
            });
            return () => activeStream?.getTracks().forEach(t => t.stop());
    }, []);
    return stream;
}