// Level 2 dependencies from usecase
import { CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index"
// Level 3 local dependencies from delivery
import { CreateWidgetViewModelInt } from "../../../delivery/src/index"


// Level 3 in delivery
export const createWidgetPresenterConstructor = (createWidgetViewModelImp: CreateWidgetViewModelInt): CreateWidgetOutputBoundaryInt => {
    const createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt = (widget) => {
        createWidgetViewModelImp(widget);
    }
    return createWidgetOutputBoundaryImp;
}
