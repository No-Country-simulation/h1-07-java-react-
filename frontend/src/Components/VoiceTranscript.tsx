import React, { useRef, useState } from 'react'
import { Field } from 'formik';
import { MicrophoneClose, MicrophoneOpen } from '../../public/icons/Icons';

interface VoiceTranscriptProps {
  onTranscriptChange: (transcript: string) => void;
  label: string
}

export const VoiceTranscript: React.FC<VoiceTranscriptProps> = ({ onTranscriptChange, label}) => {
  const [transcript, setTranscript] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  const handleStart = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      const socket = new WebSocket('wss://api.deepgram.com/v1/listen?language=es', ['token', '7e3357ed49084483c2f80078538eefea980dc180']);
      socketRef.current = socket;

      socket.onopen = () => {
        mediaRecorder.addEventListener('dataavailable', (event) => {
          if (event.data.size > 0) {
            socket.send(event.data);
          }
        });
        mediaRecorder.start(250);
      };

      socket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const transcript = received.channel.alternatives[0].transcript;
        setTranscript((prev) => prev + ' ' + transcript);
      };

      setIsRecording(true);
    });
  };

  const handleStop = () => {
    if (mediaRecorderRef.current && socketRef.current) {
      mediaRecorderRef.current.stop();
      socketRef.current.close();
      setIsRecording(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value)
    onTranscriptChange(e.target.value);
  }


  return (
    <div className="flex flex-col relative">
      <label className="font-bold flex items-center gap-2 " htmlFor="descripcion">
        {label}
      </label>
      <Field as="textarea" placeholder='Añadir' name={'descripcion'} value={transcript} onChange={handleChange} className=' min-h-40 border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
      </Field>
      <div className=" absolute bottom-4 right-4">
        {isRecording ? (
          <button type='button' className=' w-10 border-black bg-black h-10  p-2 m-auto flex justify-center items-center border-2 rounded-full' onClick={handleStop}><MicrophoneOpen width={30} height={30} stroke=''/></button>
        ) : (
          <button type='button' className=' w-10 border-black bg-black h-10  p-2 m-auto flex justify-center items-center border-2 rounded-full' onClick={handleStart}><MicrophoneClose width={30} height={30} stroke=''/></button>
        )}
      </div>
    </div>
  )
}
