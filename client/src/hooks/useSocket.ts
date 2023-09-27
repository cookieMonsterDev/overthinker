import { useEffect, useState } from "react";
import io, { Socket, ManagerOptions } from "socket.io-client";

interface UseSocketProps {
  url: string;
  rooms?: string | string[];
  options?: ManagerOptions;
}

const useSocket = ({ url, rooms, options }: UseSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url, options);
    setSocket(socketIo);

    if (rooms) {
      if (Array.isArray(rooms)) {
        rooms.forEach((room) => {
          socketIo.emit("join", room);
        });
      }

      if (typeof rooms === "string") {
        socketIo.emit("join", rooms);
      }
    }

    return () => {
      if (rooms) {
        if (Array.isArray(rooms)) {
          rooms.forEach((room) => {
            socketIo.emit("leave", room);
          });
        }

        if (typeof rooms === "string") {
          socketIo.emit("leave", rooms);
        }
      }

      socketIo.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
