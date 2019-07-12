import {base}               from "./base";
import {surveyQuestion}     from "./surveyQuestion";
import {authentication}     from "./authentication";
import {experimentTemplate} from "./experimentTemplate";
import {widgetRegistry} from "./widgetRegistry";

export const resolver = [
    base,
    surveyQuestion,
    authentication,
    experimentTemplate,
    widgetRegistry,
];
