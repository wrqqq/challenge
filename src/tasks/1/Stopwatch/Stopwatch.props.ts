import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface StopwatchProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    status?: boolean;
    runningTime?: number;
}
