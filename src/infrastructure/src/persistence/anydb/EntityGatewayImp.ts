// Level 1 dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../../domain/src/index";

// Level 4 in infrastructure
export const saveWidgetEntityGatewayAnyDBImp: SaveWidgetEntityGatewayInt = widget => {
    return new Promise<WidgetType>((resolve: any, reject: any) => {
        // Implement DB code here
        resolve({id: "6eu47839ifg", rev: "jd62jcg649fgdy", name: "Widget Name"});
     });
}