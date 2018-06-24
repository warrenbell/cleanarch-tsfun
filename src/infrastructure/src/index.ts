// This is where you could wire up different implementations of SaveWidgetEntityGatewayInt to different storage
import { saveWidgetEntityGatewayAnyDBImp as saveWidgetEntityGatewayImp } from "./persistence/anydb/EntityGatewayImp";

export { saveWidgetEntityGatewayImp };
