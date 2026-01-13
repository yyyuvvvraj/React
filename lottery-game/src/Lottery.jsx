import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
i

export default function Lottery({ n = 3, winningSum = 15 }) {
  const [ticket, setTicket] = useState(genTicket(n));

  const isWinning = sum(ticket) === winningSum;

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>

      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <br />
      <div className="btn-container">
        <button onClick={buyTicket}>Buy New Ticket</button>
      </div>

      <h3>{isWinning && "🎉 Congratulations, you won!"}</h3>
    </div>
  );
}
