// Layer 1 (yellow) local dependencies in domain
import { WidgetType } from "../../../domain/src/index";

// Lives in Layer 1 (yellow) in domain
export type  SaveWidgetEntityGatewayInt = (widget: WidgetType) => Promise<WidgetType>;