const {EchoHistoryRequest} = require('../echo/echo_pb');
const {EchoService} = require('../echo/echo_pb_service');

const {grpc, Code} = require('grpc-web-client');

const host = 'https://playground-grpc.appspot.com:443';

function main() {
  const request = new EchoHistoryRequest();
  request.setLimit(10);
  grpc.invoke(EchoService.EchoHistory, {
    request,
    host,
    onMessage: event => {
      const resp = event.toObject();
      console.log("fetchEchoHistory", "onMessage", resp)
    },
    onEnd: () => {
    }
  })
}

main();
