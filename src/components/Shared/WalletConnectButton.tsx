import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, status } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex items-center space-x-2">
      {isConnected ? (
        <>
          <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </>
      ) : (
        connectors
          .filter((connector) => connector.ready)
          .map((connector) => (
            <button
              key={connector.id}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
              onClick={() => connect({ connector })}
              disabled={status === "pending"}
            >
              {status === "pending"
                ? "Connecting..."
                : `Connect ${connector.name}`}
            </button>
          ))
      )}
      {error && (
        <span className="text-xs text-red-500 ml-2">{error.message}</span>
      )}
    </div>
  );
}