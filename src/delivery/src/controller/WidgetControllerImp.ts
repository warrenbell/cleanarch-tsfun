// Level 1 dependencies from domain
import { SaveWidgetEntityGatewayInt } from "../../../domain/src/index"
// Level 2 dependencies from usecase
import { createWidgetInteractorConstructor, CreateWidgetInputBoundaryInt, CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"
// Level 3 local dependencies from delivery
import { CreateWidgetRequestInt, CreateWidgetViewModelInt, createWidgetPresenterConstructor } from "../../../delivery/src/index"

// Level 3 in delivery
export const createWidgetControllerConstructor = (saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetViewModelImp: CreateWidgetViewModelInt): CreateWidgetRequestInt => {
    const createWidgetRequestImp: CreateWidgetRequestInt = (widget) => {
        const createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt = createWidgetPresenterConstructor(createWidgetViewModelImp);
        const createWidgetInputBoundaryImp: CreateWidgetInputBoundaryInt = createWidgetInteractorConstructor(saveWidgetEntityGatewayImp, createWidgetOutputBoundaryImp);
        createWidgetInputBoundaryImp(widget);
    }
    return createWidgetRequestImp;
}