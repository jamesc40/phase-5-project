class EventsController < ApplicationController

  def index
    events = Event.get_events(current_couple.id)
    if events 
      render json: events
    else
      head :no_content
    end
  end

end
