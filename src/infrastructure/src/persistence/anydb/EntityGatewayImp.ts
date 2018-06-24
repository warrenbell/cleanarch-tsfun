// Layer 1 (yellow) dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../../domain/src/index";

// Lives in Layer 4 (blue) in infrastructure
export const saveWidgetEntityGatewayAnyDBImp: SaveWidgetEntityGatewayInt = widget => {
    return new Promise<WidgetType>((resolve: any, reject: any) => {
        // Implement DB code here
        resolve({id: "6eu47839ifg", rev: "jd62jcg649fgdy", name: "Widget Name"});
     });
}