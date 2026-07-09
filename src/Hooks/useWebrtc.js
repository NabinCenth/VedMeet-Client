import {cameraPreview} from "./useMedia";
import { useState, useEffect,useContext } from "react";
import useSocket from "./useSocket";
import { ContextData } from "../Component/Context/Context";
const { setRemoteStream,RoomId } = useContext(ContextData);
const socket = useSocket();
useEffect(()=>{
const pc = new RTCPeerConnection({
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
});

const localStream = await cameraPreview();
localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

pc.onicecandidate = (event) => {
  if (event.candidate) {
    socket.emit("ice-candidate", { candidate: event.candidate, RoomId });
  }
};

pc.ontrack = (event) => {
 setRemoteStream(event.streams[0]);
 console.log("Remote stream received:", event.streams[0]);
};

const offer = await pc.createOffer();
await pc.setLocalDescription(offer);
socket.emit("offer", { offer, RoomId });

socket.on("answer", async ({ answer }) => {
  await pc.setRemoteDescription(new RTCSessionDescription(answer));
});

socket.on("ice-candidate", async ({ candidate }) => {
  await pc.addIceCandidate(new RTCIceCandidate(candidate));
});

  return () => {
    pc.close();
    socket.off("answer");
    socket.off("ice-candidate");
  };
},[]);