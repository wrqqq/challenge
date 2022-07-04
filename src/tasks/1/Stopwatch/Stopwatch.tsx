import {useEffect, useState} from "react";
import {StopwatchProps} from "./Stopwatch.props";

const Stopwatch = ({
    status = false,
    runningTime = 0,
    ...props
}: StopwatchProps): JSX.Element => {
    const [timerStatus, setTimerStatus] = useState<boolean>(status);
    const [timerRunningTime, setTimerRunningTime] =
        useState<number>(runningTime);

    useEffect(() => {
        if (timerStatus) {
            const startTime = Date.now() - timerRunningTime;
            const timer = setTimeout(() => {
                setTimerRunningTime(Date.now() - startTime);
            });
            return () => {
                clearInterval(timer);
            };
        }
    }, [timerRunningTime, timerStatus]);

    const getUnits = (time: number): string => {
        const seconds = time / 1000;

        const min = Math.floor(seconds / 60).toString();
        const sec = Math.floor(seconds % 60).toString();
        const msec = (seconds % 1).toFixed(3).substring(2);

        return `${min}:${sec}:${msec}`;
    };
    const handleClick = (): void => {
        timerStatus ? setTimerStatus(false) : setTimerStatus(true);
    };
    const handleReset = (): void => {
        setTimerRunningTime(0);
        setTimerStatus(false);
    };
    const handleLap = () => {
        console.log(getUnits(timerRunningTime));
    };
    return (
        <div {...props}>
            <p>{getUnits(timerRunningTime)}</p>
            <button onClick={handleClick}>
                {timerStatus ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLap}>Lap</button>
        </div>
    );
};

export default Stopwatch;
