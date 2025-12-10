import { useState, useEffect } from 'react';

interface StreamState {
  token: string | null;
  roomName: string | null;
  url: string | null;
  isBroadcaster: boolean;
  pin: string | null;
}

const STORAGE_KEY = 'livestream_state';

export function useStreamState() {
  const [state, setState] = useState<StreamState>(() => {
    // Initialize from localStorage
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch {
          return {
            token: null,
            roomName: null,
            url: null,
            isBroadcaster: false,
            pin: null,
          };
        }
      }
    }
    return {
      token: null,
      roomName: null,
      url: null,
      isBroadcaster: false,
      pin: null,
    };
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const setStreamData = (data: { token: string; roomName: string; url: string; isBroadcaster: boolean; pin?: string }) => {
    setState({
      token: data.token,
      roomName: data.roomName,
      url: data.url,
      isBroadcaster: data.isBroadcaster,
      pin: data.pin || state.pin,
    });
  };

  const clearStream = () => {
    setState({
      token: null,
      roomName: null,
      url: null,
      isBroadcaster: false,
      pin: null,
    });
  };

  return {
    ...state,
    setStreamData,
    clearStream,
  };
}
