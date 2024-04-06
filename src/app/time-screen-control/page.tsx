// фиксация того что делает исполнитель задачи

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Screenshot = {
  url: string;
  date: Date;
};
const intervalScreen = 1000;
const ScreenShotComponent = () => {
  const [stream, setStream] = useState<any>(null);
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const getPermission = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "monitor",
        },
      });
      if (
        mediaStream.getVideoTracks()[0].getSettings().displaySurface ===
        "monitor"
      ) {
        setStream(mediaStream);
        setPermissionGranted(true);
      } else {
        alert("Выбрано недопустимое окно. Пожалуйста, выберите весь экран.");
      }
    } catch (error) {
      console.error("Error accessing screen:", error);
    }
  };

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // Это требуется для старых версий браузеров
      return ""; // Для современных браузеров
    };

    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  useEffect(() => {
    if (!permissionGranted || !stream) return;

    const intervalId = setInterval(() => {
      takeScreenshot();
    }, intervalScreen);

    return () => clearInterval(intervalId);
  }, [permissionGranted, stream]);

  const takeScreenshot = () => {
    const videoTrack = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(videoTrack);

    imageCapture
      .grabFrame()
      .then((imageBitmap: any) => {
        const canvas = document.createElement("canvas");
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        canvas.getContext("2d")?.drawImage(imageBitmap, 0, 0);
        const screenshotUrl = canvas.toDataURL("image/png");
        const screenshotDate = new Date(); // Сохраняем текущую дату и время снимка
        const newScreenshot: Screenshot = {
          url: screenshotUrl,
          date: screenshotDate,
        };
        setScreenshots((prevScreenshots) => [
          ...prevScreenshots,
          newScreenshot,
        ]);
      })
      .catch((error: any) => {
        console.error("Error taking screenshot:", error);
      });
  };

  return (
    <div className="p-10">
      {permissionGranted ? (
        <div className="grid grid-cols-3 gap-4">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={screenshot.url}
                alt={`Screenshot ${index + 1}`}
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="mt-2">{screenshot.date.toString()}</p>{" "}
              {/* Выводим дату снимка */}
            </div>
          ))}
        </div>
      ) : (
        <button onClick={() => getPermission()}>Start</button>
      )}
    </div>
  );
};

export default ScreenShotComponent;
