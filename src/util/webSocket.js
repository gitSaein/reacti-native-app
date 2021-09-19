// export const onopen = message => {
//   console.log('## webSocket start...');

//   const webSocketUrl = 'ws://127.0.0.1:9000/ws/chat.sendMessage';

//   ws.current = new WebSocket(webSocketUrl);
//   console.log('# websocket connected start...');

//   // 소켓 연결 시
//   ws.current.onopen = () => {
//     console.log('# websocket connected...');
//   };
//   // 에러 발생시
//   ws.current.onerror = e => {
//     console.log('error: ' + e.message);
//   };
//   // 소켓 연결 해제
//   ws.current.onclose = e => {
//     console.log(e.code, e.reason);
//   };

//   // 소켓이 연결되었을 시에 send 메소드
//   useEffect(() => {
//     if (socketConnected) {
//       ws.current.send(
//         JSON.stringify({
//           message: message,
//         }),
//       );

//       setSendMsg(true);
//     }
//   }, [socketConnected]);

//   // send 후에 onmessage로 데이터 가져오기
//   useEffect(() => {
//     if (sendMsg) {
//       ws.current.onmessage = evt => {
//         const data = JSON.parse(evt.data);
//         console.log(data);
//         setItems(prevItems => [...prevItems, data]);
//       };
//     }
//   }, [sendMsg]);
// };
