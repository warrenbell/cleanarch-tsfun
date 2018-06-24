// Level 3 dependencies from delivery
import { CreateWidgetViewModelInt, CreateWidgetRequestInt, createWidgetControllerConstructor } from "../../delivery/src/index";
// Level 4 dependencies from delivery
import { saveWidgetEntityGatewayImp } from "../../infrastructure/src/index";

import * as chai from "chai";
import 'mocha';

describe('Testing entry point into delivery layer', () => {

    describe('createWidgetRequestImp(widget)', () => {
        it('should return an object via createWidgetViewModelImp with certain properties', () => {

            // This code would be somewhere in level 4 in a mobile app, web app, cli, api, etc.
            const createWidgetViewModelImp: CreateWidgetViewModelInt = (widget) => {
                // Update UI here. Main output point
                chai.expect(widget).deep.equal({id: "6eu47839ifg", rev: "jd62jcg649fgdy", name: "Widget Name"});
            }
            const createWidgetRequestImp: CreateWidgetRequestInt = createWidgetControllerConstructor(saveWidgetEntityGatewayImp, createWidgetViewModelImp);
            // Called by UI. Main entry point
            createWidgetRequestImp({name: "Widget Name"});

        });
    });

});