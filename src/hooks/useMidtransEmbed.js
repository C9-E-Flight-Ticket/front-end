import { useEffect, useRef } from "react";

const useMidtransEmbed = (
  transactionToken = "",
  onSuccess,
  onPending,
  onError,
  onClose
) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    const script = document.createElement("script");
    script.src = import.meta.env.VITE_MIDTRANS_SCRIPT_SRC
      ? import.meta.env.VITE_MIDTRANS_SCRIPT_SRC
      : "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
      import.meta.env.VITE_MIDTRANS_CLIENT_KEY
    );
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.snap.embed(transactionToken, {
        embedId: "snap-container",
        onSuccess,
        onPending,
        onError,
        onClose,
      });
    };

    scriptLoaded.current = true;

    // cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, [transactionToken]);
};

export default useMidtransEmbed;
