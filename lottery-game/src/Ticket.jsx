import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      {ticket.map((Number, idx) => (
        <TicketNum key={idx} num={Number} />
      ))}
    </div>
  );
}
