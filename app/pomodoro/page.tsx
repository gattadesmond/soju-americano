"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button, Card } from "@heroui/react";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayer = dynamic(
  () => import("react-h5-audio-player").then((mod) => mod.default),
  { ssr: false },
);

const FOCUS_MINUTES = 25;
const SHORT_BREAK_MINUTES = 5;
const LONG_BREAK_MINUTES = 15;

type Mode = "focus" | "shortBreak" | "longBreak";

const MODE_CONFIG: Record<Mode, { label: string; seconds: number }> = {
  focus: { label: "Tập trung", seconds: FOCUS_MINUTES * 60 },
  shortBreak: { label: "Nghỉ ngắn", seconds: SHORT_BREAK_MINUTES * 60 },
  longBreak: { label: "Nghỉ dài", seconds: LONG_BREAK_MINUTES * 60 },
};

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const DEFAULT_PAGE_TITLE = "Pomodoro";

function playAlarmSound() {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch {
    // no sound
  }
}

const FOCUS_TRACKS = [
  {
    id: "1",
    title: "Lofi Chill Study",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2026/02/Lo-fi-chill-study-music-relaxing-background-beats.mp3",
  },
  {
    id: "2",
    title: "Emotional Piano",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2026/01/Emotional-piano-descent-ambient-cinematic-background-music.mp3",
  },
  {
    id: "3",
    title: "Futuristic Synth",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2026/01/Futuristic-synth-score-ambient-background-music.mp3",
  },
  {
    id: "4",
    title: "Chill Bossa Nova",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2026/01/Chill-downtempo-bossa-nova-ambient-electronic-music.mp3",
  },
  {
    id: "5",
    title: "Thinking Music",
    artist: "Alexander Blu",
    src: "https://www.orangefreesounds.com/wp-content/uploads/2015/01/Thinking-music.mp3",
  },
  {
    id: "6",
    title: "Rain Study",
    artist: "Alexander Blu",
    src: "https://www.orangefreesounds.com/wp-content/uploads/2017/06/Rain-study-sounds.mp3",
  },
  {
    id: "7",
    title: "Cinematic Emotive",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2026/01/Cinematic-deeply-emotive-instrumental-music.mp3",
  },
  {
    id: "8",
    title: "Gentle Harp & Chimes",
    artist: "Alexander Blu",
    src: "https://orangefreesounds.com/wp-content/uploads/2025/11/Gentle-harp-choir-and-chimes-enchanting-background-music.mp3",
  },
];

function IconPlay({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconPause({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function IconReset({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default function PomodoroPage() {
  const [mode, setMode] = useState<Mode>("focus");
  const [secondsLeft, setSecondsLeft] = useState(MODE_CONFIG.focus.seconds);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(FOCUS_TRACKS[0]);

  const totalSeconds = MODE_CONFIG[mode].seconds;
  const progress = totalSeconds > 0 ? 1 - secondsLeft / totalSeconds : 0;

  useEffect(() => {
    const label = MODE_CONFIG[mode].label;
    const timeStr = formatTime(secondsLeft);
    document.title = `${timeStr} · ${label} | ${DEFAULT_PAGE_TITLE}`;
    return () => {
      document.title = DEFAULT_PAGE_TITLE;
    };
  }, [secondsLeft, mode]);

  const resetTimer = useCallback(() => {
    const config = MODE_CONFIG[mode];
    setSecondsLeft(config.seconds);
    setIsRunning(false);
  }, [mode]);

  const switchMode = useCallback((newMode: Mode) => {
    setMode(newMode);
    setSecondsLeft(MODE_CONFIG[newMode].seconds);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const nextMode: Mode =
            mode === "focus"
              ? "shortBreak"
              : mode === "shortBreak"
                ? "focus"
                : "focus";
          setIsRunning(false);
          playAlarmSound();
          queueMicrotask(() => {
            setMode(nextMode);
            setSecondsLeft(MODE_CONFIG[nextMode].seconds);
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft, mode]);

  return (
    <section>
      <h1 className="scroll-m-20 text-[2rem] font-semibold leading-tight tracking-tight text-balance sm:text-[2.125rem]">
        Pomodoro
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {(Object.keys(MODE_CONFIG) as Mode[]).map((m) => (
          <Button
            key={m}
            variant={mode === m ? "primary" : "secondary"}
            onPress={() => switchMode(m)}
          >
            {MODE_CONFIG[m].label}
            {m === "focus" && ` (${FOCUS_MINUTES} phút)`}
            {m === "shortBreak" && ` (${SHORT_BREAK_MINUTES} phút)`}
            {m === "longBreak" && ` (${LONG_BREAK_MINUTES} phút)`}
          </Button>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <svg className="size-64 -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-muted/30"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
            />
            <circle
              className="text-primary transition-all duration-1000"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="currentColor"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress)}`}
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-5xl font-bold tabular-nums">
              {formatTime(secondsLeft)}
            </span>
            <span className="text-muted mt-1 text-sm">
              {MODE_CONFIG[mode].label}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button onPress={() => setIsRunning((r) => !r)}>
            {isRunning ? (
              <>
                <IconPause className="size-4" /> Tạm dừng
              </>
            ) : (
              <>
                <IconPlay className="size-4" /> Bắt đầu
              </>
            )}
          </Button>
          <Button variant="secondary" onPress={resetTimer}>
            <IconReset className="size-4" /> Đặt lại
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Nhạc tập trung
        </h2>
        <p className="text-muted mt-1 text-sm">
          Chọn bài và bật nhạc nền để giữ focus.
        </p>

        <Card className="bg-surface shadow-surface border-separator mt-6 max-w-2xl p-4">
          <div className="mb-4">
            <p className="font-medium">{selectedTrack.title}</p>
            <p className="text-muted text-sm">{selectedTrack.artist}</p>
          </div>
          <AudioPlayer
            className="border-separator rounded-lg border-0 bg-muted/50"
            layout="horizontal"
            showJumpControls={false}
            src={selectedTrack.src}
          />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
            {FOCUS_TRACKS.map((track) => (
              <li key={track.id}>
                <Button
                  className="h-auto w-full flex-col items-start py-2.5"
                  variant={
                    selectedTrack.id === track.id ? "primary" : "secondary"
                  }
                  onPress={() => setSelectedTrack(track)}
                >
                  <span className="block w-full truncate text-left font-medium">
                    {track.title}
                  </span>
                  <span className="text-muted w-full truncate text-left text-xs">
                    {track.artist}
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
