export default function TicketBooking(){
    return (<div className="four wide column">
    <div className="ui cards" id="showing">
      <div className="card">
        <div id="title" className="title">[MOVIE TITLE]</div>
        <div id="runtime" className="meta">[RUNTIME] minutes</div>
        <div className="content">
          <div className="description">
            <div id="film-info">[INSERT MOVIE DESCRIPTION HERE]</div>
            <span id="showtime" className="ui label">[SHOWTIME]</span>
            <span id="ticket-num">[X]</span> remaining tickets
          </div>
        </div>
        <div className="extra content">
          <button id="buy-ticket" className="ui orange button">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  </div>);
  }