export const formatTimeToString = (timeInSeconds: number) => {
    // Convert timeInSeconds to your desired format (e.g., 0:00)
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export function stringTimeToSeconds(timeString: string) {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
}

export function IsInMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile;
}