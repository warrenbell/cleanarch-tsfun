// Layer 4 (blue) local dependencies from infrastructure
// This is were we can wire together different implementations of SaveWidgetEntityGatewayInt
import { saveWidgetEntityGatewayAnyDBImp as saveWidgetEntityGatewayImp } from "./persistence/anydb/EntityGatewayImp"

export { saveWidgetEntityGatewayImp };