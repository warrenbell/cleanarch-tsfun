// Layer 1 (yellow) dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../domain/src/index"
// Level 2 (red) dependencies from usecase
import { CreateWidgetInputBoundaryInt, CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"

// Lives in Layer 2 (red) in usecase
export const createWidgetInteractorConstructor = (saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt): CreateWidgetInputBoundaryInt => {
    const createWidgetInputBoundaryImp: CreateWidgetInputBoundaryInt = (widget) => {
        saveWidgetEntityGatewayImp(widget)
        .then((widget: WidgetType) => {
            createWidgetOutputBoundaryImp(widget);
        });       
    }
    return createWidgetInputBoundaryImp;
};