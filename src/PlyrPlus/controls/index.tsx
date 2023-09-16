import React from 'react';
import Seekbar from './Seekbar';
import { useState } from 'react';
import { stringTimeToSeconds } from '../utils/helper';
import { VideoChapter } from '../type/PlyrPlus';


type ControlsProps = {
    videoRef: React.RefObject<HTMLVideoElement>
    chapters?: VideoChapter[];
    currentTime: number;
    setCurrentTime: (newTime: number) => void;
    isControlsVisible: boolean;
}

function Controls({ videoRef, chapters, currentTime, setCurrentTime, isControlsVisible }: ControlsProps) {
    const duration = videoRef?.current?.duration || 0;
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const [showChapterMenu, setShowChapterMenu] = useState(false)


    const gotoChapter = (chapter: VideoChapter) => {
        if (!videoRef?.current) return
        const newTime = stringTimeToSeconds(chapter.timestamp)
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime); // Update the current time in real-time
        setCurrentChapterIndex(chapter.index);
        setShowChapterMenu(false)
    }
    return (
        <>
            <div className={`plyrPlus__top_container ${!(isControlsVisible) && " plyrPlus__hidden"}`}>
                <div className="">
                    <p className='plyrPlus__chapter_btn' onClick={() => {
                        setShowChapterMenu(prev => !prev)
                    }}>
                        {showChapterMenu ? " ^ " : " > "} {" "} {chapters && chapters[currentChapterIndex].chapterName}
                    </p>
                </div>
                {showChapterMenu &&
                    <div className="plyrPlus__allChapters_menu">
                        {chapters && chapters.map((i: VideoChapter, key) => {
                            return (
                                <div className="plyrPlus__allChapters_menu_item" key={key} onClick={() => {
                                    gotoChapter(i)
                                }}>
                                    <p>{i.timestamp}</p>
                                    <p>{i.chapterName}</p>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <div className={`video-controls ${!isControlsVisible && " plyrPlus__hidden"}`}>
                <Seekbar duration={duration} currentTime={currentTime} videoRef={videoRef} chapters={chapters} setCurrentTime={setCurrentTime} setCurrentChapterIndex={setCurrentChapterIndex} currentChapterIndex={currentChapterIndex} />
            </div>
        </>
    )
}

export default Controls

