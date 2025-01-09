import { useEffect, useRef, useState } from "react";
import useFetchRecord from "../../utils/fetchers/useFetchRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Spin } from 'antd';
import hidePlayerIcon from '../../assets/icons/hideAudioPlaer.svg';
import downLoadIcon from '../../assets/icons/downLoadIcon.svg';

interface IAudioPlayerProps {
    id: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = (props) => {
    
    const {
        id,
    } = props;

    const {
        dataRecord,
        loading,
      } = useFetchRecord(id);

    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0); 
    const [duration, setDuration] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          const updateProgress = (): void => setCurrentTime(audio.currentTime);
            audio.addEventListener("timeupdate", updateProgress);
            audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration);
          });
          return () => {
            audio.removeEventListener("timeupdate", updateProgress);
          };
        }
      }, [audioRef.current]);
    
      const togglePlay = (): void => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current
              .play()
              .catch(e => console.log("ошибка воспроизведения", e));
          }
          setIsPlaying(!isPlaying);
        } else {
          console.log(
            "Невозможно воспроизвести"
          );
        }
      };
    
      const handleDownload = async (): Promise<void> => {};
    
      const handleSeek = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const time = Number(event.target.value);
        if (audioRef.current) {
          audioRef.current.currentTime = time;
          setCurrentTime(time);
        }
      };
    
    const handleHidePlayer = (): void => {
      setIsVisible(false);
    };

    const progressBar = (currentTime / duration) * 100 || 0;

    useEffect(() => {
        let isMounted = true;
        if (dataRecord) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isMounted && setAudioUrl(dataRecord);
        }
        return () => {
            isMounted = false;
        }
    }, [dataRecord])
  
    return (
        <>
        {loading ? (
            <Spin size="small"/>
        ) : (
           <>
        {audioUrl && isVisible && (
            <div className="audio__player">
                <audio ref={audioRef} src={audioUrl} preload="auto">
                    <track kind="metadata" />
                    <track
                        kind="captions"
                        src="captions.vtt"
                        srcLang="ru"
                        label="Russian"
                    />
                </audio>
                <div className="audio__player__controls">
                    <button
                        className="audio__player__controls__button"
                        type="button"
                        onClick={togglePlay}
                    >
                    <FontAwesomeIcon
                        className="audio__player__controls__play"
                        icon={isPlaying ? faPause : faPlay}
                    />
                    </button>
                    <div className="audio__player__progress__container">
                    <div
                        className="audio__player__progress__fill"
                        style={{ width: `${progressBar}%` }}
                    />
                    <input
                        type="range"
                        className="audio__player__progress"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                    />
                </div>
                <button type="button" onClick={handleDownload} aria-label="Download">
                    <span className="audio__player__download__button">
                        <img className="w-4 h-4" src={downLoadIcon} alt="Загрузка"/>
                    </span>
                </button>
                <button
                    className="audio__player__controls__hide"
                    type="button"
                    onClick={() => handleHidePlayer()}
                    aria-label="Hide Player"
                >
                    <img className="w-4 h-4" src={hidePlayerIcon} alt="крестик"/>
                </button>
                </div>
            </div>
            )}
            </>  
        )} 
        </>
    )
}
export default AudioPlayer; 