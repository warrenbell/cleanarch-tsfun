// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../../domain/src/index";

// Lives in Layer 3 (blue) in delivery
export type CreateWidgetRequestInt = (widget: WidgetType) => void;