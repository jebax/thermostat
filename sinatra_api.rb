require 'sinatra/base'

class ThermostatAPI < Sinatra::Base

  get '/temperature' do
    @temperature = 20
    @temperature
  end

  run! if app_file == $PROGRAM_NAME
end
