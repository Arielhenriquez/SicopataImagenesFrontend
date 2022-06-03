import { HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";

class SignalRConnection {
  connect() {
    return new HubConnectionBuilder()
      .withUrl("https://localhost:7219/ImagesMessage", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }
}
export default new SignalRConnection();
