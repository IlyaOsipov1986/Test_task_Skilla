import { useEffect, useRef, useState } from "react";
import useFetchRecord from "../../utils/fetchers/useFetchRecord";
import { Spin } from 'antd';
import { formatTimeToDuration } from "../../utils/utils";

interface IAudioPlayerProps {
    id: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = (props) => {
    
    const {
        id
    } = props;

    const {
        dataRecord,
        loading,
      } = useFetchRecord(id);

    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

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
         {audioUrl && (
                <div className="absolute right-0">
                    <audio ref={audioRef} src={audioUrl} controls />
                </div>
                )}
            </>  
            )} 
        </>
    )
}
export default AudioPlayer; 