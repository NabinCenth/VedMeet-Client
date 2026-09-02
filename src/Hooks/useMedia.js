import { useState, useEffect } from "react";
export const cameraPreview = () => {
    const [stream, setStream] = useState(null);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video:true,audio:false})
            .then((s) => {
                setStream(s);
            });
    }, []);
    return stream;
}