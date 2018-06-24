// Level 1 dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../domain/src/index"
// Level 2 dependencies from usecase
import { CreateWidgetInputBoundaryInt, CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"

// Level 2 in usecase
export const createWidgetInteractorConstructor = (saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt): CreateWidgetInputBoundaryInt => {
    const createWidgetInputBoundaryImp: CreateWidgetInputBoundaryInt = (widget) => {
        saveWidgetEntityGatewayImp(widget)
        .then((widget: WidgetType) => {
            createWidgetOutputBoundaryImp(widget);
        });       
    }
    return createWidgetInputBoundaryImp;
};