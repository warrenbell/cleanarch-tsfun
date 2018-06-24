// Layer 1 (yellow) dependencies from domain
import { SaveWidgetEntityGatewayInt } from "../../../domain/src/index"
// Layer 2 (red) dependencies from usecase
import { createWidgetInteractorConstructor, CreateWidgetInputBoundaryInt, CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"
// Layer 3 (green) local dependencies from delivery
import { CreateWidgetRequestInt, CreateWidgetViewModelInt, createWidgetPresenterConstructor } from "../../../delivery/src/index"

// Lives in Layer 3 (green) in delivery
export const createWidgetControllerConstructor = (saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetViewModelImp: CreateWidgetViewModelInt): CreateWidgetRequestInt => {
    const createWidgetRequestImp: CreateWidgetRequestInt = (widget) => {
        // widget moving from delivery down to usecase
        // Data mapping or conversion of widget here
        const createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt = createWidgetPresenterConstructor(createWidgetViewModelImp);
        const createWidgetInputBoundaryImp: CreateWidgetInputBoundaryInt = createWidgetInteractorConstructor(saveWidgetEntityGatewayImp, createWidgetOutputBoundaryImp);
        createWidgetInputBoundaryImp(widget);
    }
    return createWidgetRequestImp;
}