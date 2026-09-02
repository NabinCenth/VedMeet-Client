import { cameraPreview } from "./useMedia";
import { useState, useEffect, useContext } from "react";
import useSocket from "./useSocket";
import { ContextData } from "../Component/Context/Context";
import { SocketContext } from "../Component/Context/SocketContext";
export const useWebrtc = (stream) => {
  const { setRemoteStream, RoomId } = useContext(ContextData);
  const { isOfferer,socket } = useContext(SocketContext);

  useEffect(() => {
    if (!stream) {
      return;
    }
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });
       const localStream = stream;
       console.log('roomId', RoomId);
    const setup = async () => {
      const getStream = async () => {
     
        localStream
          .getTracks()
          .forEach((track) => pc.addTrack(track, localStream));
      };
      getStream();
      pc.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", { candidate: event.candidate, RoomId });
          console.log("ICE candidate sent:", event.candidate);
        }
      };
      pc.ontrack = (event) => {
        setRemoteStream(event.streams[0]);
        console.log("Remote stream received:", event.streams[0]);
        console.log("received event", event);
      };
      if (isOfferer) {socket.on('user-joined', async () => {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket.emit("offer", { offer, RoomId });
      });
        socket.on("answer", async ({ answer }) => {
          await pc.setRemoteDescription(new RTCSessionDescription(answer));
        });
      }
      console.log("isOfferer", isOfferer);
      if (!isOfferer) {
         console.log("Registering offer listener now");
        socket.on("offer", async ({ offer }) => {
            console.log("OFFER RECEIVED on joiner");
          await pc.setRemoteDescription(new RTCSessionDescription(offer));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          socket.emit("answer", { answer, RoomId });
        });
      }
      socket.on("ice-candidate", async ({ candidate }) => {
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      });
    };
    setup();
    return () => {
      pc.close();
      socket.off("answer");
      socket.off("ice-candidate");
      socket.off("offer");
    };
  }, [stream]);
};
