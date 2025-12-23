export default {};
export const WebRTCModule = {};
export const RTCPeerConnection = {};
export const RTCIceCandidate = {};
export const RTCSessionDescription = {};
export const MediaStream = {};
export const MediaStreamTrack = {};
export const mediaDevices = {};
export const PermissionsAndroid = {
    request: () => Promise.resolve('granted'),
    check: () => Promise.resolve(true),
};
