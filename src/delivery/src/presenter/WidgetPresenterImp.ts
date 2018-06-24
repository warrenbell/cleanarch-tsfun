// Layer 2 (red) dependencies from usecase
import { CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"
// Layer 3 (green) local dependencies from delivery
import { CreateWidgetViewModelInt } from "../../../delivery/src/index"


// Lives in Layer 3 (green) in delivery
export const createWidgetPresenterConstructor = (createWidgetViewModelImp: CreateWidgetViewModelInt): CreateWidgetOutputBoundaryInt => {
    const createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt = (widget) => {
        // widget moving from usecase up to delivery
        // Data mapping or conversion of widget here
        createWidgetViewModelImp(widget);
    }
    return createWidgetOutputBoundaryImp;
}
