"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";

export type VideoItem = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

export function VideosList({ videos }: { videos: VideoItem[] }) {
  const [open, setOpen] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setPlayingId(id);
    setOpen(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setPlayingId(null);
  };

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {videos.map((video) => (
          <li key={video.id}>
            <Button
              className="bg-surface shadow-surface border-separator hover:border-border h-auto w-full flex-col items-stretch gap-0 overflow-hidden rounded-xl border p-0 font-normal transition-colors"
              variant="tertiary"
              onPress={() => handleOpen(video.id)}
            >
              <div className="aspect-video w-full bg-muted relative overflow-hidden">
                {video.thumbnailUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbs
                  <img
                    alt=""
                    className="h-full w-full object-cover"
                    src={video.thumbnailUrl}
                  />
                ) : (
                  <div className="text-muted-foreground flex h-full items-center justify-center text-4xl">
                    ▶
                  </div>
                )}
              </div>
              <div className="p-2.5 text-left">
                <p className="line-clamp-2 text-sm font-medium leading-tight text-foreground">
                  {video.title || video.id}
                </p>
              </div>
            </Button>
          </li>
        ))}
      </ul>

      <Modal.Backdrop isOpen={open} onOpenChange={handleOpenChange}>
        <Modal.Container>
          <Modal.Dialog className="max-w-4xl overflow-hidden p-0 sm:max-w-4xl">
            <Modal.CloseTrigger />
            <Modal.Header className="sr-only">
              <Modal.Heading>Xem video</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-0">
              {playingId && (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${playingId}?autoplay=1`}
                    title="YouTube video"
                  />
                </div>
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
}
